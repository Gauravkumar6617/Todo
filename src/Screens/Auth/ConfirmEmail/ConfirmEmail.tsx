import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  Alert,
  StyleSheet,
} from "react-native";
import {
  useNavigation,
  useRoute,
  RouteProp,
  NavigationProp,
} from "@react-navigation/native";
import styles from "./style"; // Shared external styles

// --- Constants ---
const CODE_LENGTH = 6;

// --- Local styles for OTP input fields ---
const otpStyles = StyleSheet.create({
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 40,
  },
  otpInput: {
    width: 45,
    height: 55,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
  },
  resendText: {
    fontSize: 15,
    color: "#666666",
  },
});

// --- Navigation Type Definitions ---
type RootStackParamList = {
  ConfirmEmail: { emailOrPhone: string };
  SignupDetails: { emailOrPhone: string };
  MainApp: undefined;
  Login: undefined;
};

const ConfirmEmail: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, "ConfirmEmail">>();

  const { emailOrPhone } = route.params ?? { emailOrPhone: "user@example.com" };

  const [code, setCode] = useState<string[]>(new Array(CODE_LENGTH).fill(""));
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleCodeChange = (text: string, index: number) => {
    if (text.length > 1) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    } else if (!text && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    navigation.navigate("MainApp");
    const enteredCode = code.join("");
    if (enteredCode.length !== CODE_LENGTH) {
      Alert.alert("Error", `Please enter the ${CODE_LENGTH}-digit code.`);
      return;
    }

    console.log(`Verifying code: ${enteredCode}`);
    navigation.navigate("SignupDetails", { emailOrPhone });
  };

  const handleResend = () => {
    Alert.alert("Resend Code", "A new verification code has been sent.");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {/* --- Logo Section --- */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/todo_logo.png")}
            style={styles.logoImage}
          />
          <Text style={styles.brandingText}>REXODUS GAMING</Text>
        </View>

        {/* --- Header Section --- */}
        <Text style={styles.header}>Confirm Email</Text>
        <Text style={styles.subtitle}>
          We sent a verification code to{" "}
          <Text style={{ fontWeight: "bold" }}>{emailOrPhone}</Text>. Please
          enter the code below.
        </Text>

        {/* --- OTP Input Fields --- */}
        <View style={otpStyles.otpContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={otpStyles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleCodeChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
            />
          ))}
        </View>

        {/* --- Resend Link --- */}
        <TouchableOpacity
          onPress={handleResend}
          style={{ alignSelf: "center" }}
        >
          <Text style={otpStyles.resendText}>
            Didn’t receive the code?{" "}
            <Text style={styles.footerLink}>Resend</Text>
          </Text>
        </TouchableOpacity>

        {/* --- Verify Button --- */}
        <View
          style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 30 }}
        >
          <TouchableOpacity style={styles.primaryButton} onPress={handleVerify}>
            <Text style={styles.primaryButtonText}>Verify & Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmEmail;
