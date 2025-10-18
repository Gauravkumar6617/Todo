import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import styles from "./style";

// Define a type for your navigation stack parameters
type RootStackParamList = {
  Login: undefined;
  SignupEmail: undefined;
  CreateAccountScreen: undefined;
  SignupDetails: { emailOrPhone: string }; // Next step: pass data
};

const SignupEmailScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleContinue = () => {
    // Basic validation navigation.navigate("SignupScreen");
    navigation.navigate("CreateAccountScreen");
  };

  const navigateToLogin = () => {};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {/* --- Logo and Branding --- */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/todo_logo.png")} // Use your logo image here
            style={styles.logoImage}
          />
          <Text style={styles.brandingText}>REXODUS GAMING</Text>
        </View>

        {/* --- Header --- */}
        <Text style={styles.header}>Create Your Account</Text>
        <Text style={styles.subtitle}>Create account for exploring news</Text>

        {/* --- Illustration Image --- */}
        <Image
          source={require("../../../assets/todo_logo.png")} // Replace with your illustration
          style={styles.illustrationImage}
        />

        {/* --- Email or Phone Number Input --- */}
        <Text style={{ marginBottom: 5, fontSize: 14, color: "#333333" }}>
          Email or Phone Number
        </Text>
        <View
          style={[styles.inputContainer, isInputFocused && styles.inputFocused]}
        >
          <TextInput
            style={styles.input}
            placeholder="Hello@tyler.com" // Placeholder from design
            placeholderTextColor="#AAAAAA"
            keyboardType="email-address" // Can be 'phone-pad' if primarily for phone
            autoCapitalize="none"
            value={emailOrPhone}
            onChangeText={setEmailOrPhone}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
          {/* Optional: Add a checkmark or error icon like in Figma if validation is instant */}
          {/* {emailOrPhone.length > 0 && <Text>✅</Text>} */}
        </View>

        {/* --- Continue Button --- */}
        <TouchableOpacity style={styles.primaryButton} onPress={handleContinue}>
          <Text style={styles.primaryButtonText}>Continue</Text>
        </TouchableOpacity>

        {/* --- Footer Link to Login --- */}
        <Text style={styles.footerText}>
          Don't have an account?{" "}
          <Text style={styles.footerLink} onPress={navigateToLogin}>
            Sign up here
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignupEmailScreen;
