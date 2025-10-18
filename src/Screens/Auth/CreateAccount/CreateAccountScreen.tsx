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
import {
  useNavigation,
  useRoute,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";
import { AuthStackParamList } from "src/Navigation/type";
import styles from "./style";

// 🔹 Reusable mock eye icon
type MockEyeIconProps = {
  onPress: () => void;
  isSecure: boolean;
};

const MockEyeIcon: React.FC<MockEyeIconProps> = ({ onPress, isSecure }) => (
  <Text
    onPress={onPress}
    style={{ color: styles.inputFocused.borderColor, fontSize: 20 }}
  >
    {isSecure ? "👁️" : "🔒"}
  </Text>
);

const CreateAccountScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const route =
    useRoute<RouteProp<AuthStackParamList, "CreateAccountScreen">>();

  const { emailOrPhone } = route.params || { emailOrPhone: "user@example.com" };

  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleSignUp = () => {
    navigation.navigate("ConfirmEmail", { emailOrPhone: emailOrPhone ?? "" });
  };

  const navigateToLogin = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {/* --- Logo --- */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/todo_logo.png")}
            style={styles.logoImage}
          />
          <Text style={styles.brandingText}>REXODUS GAMING</Text>
        </View>

        <Text style={styles.header}>Create Your Account</Text>
        <Text style={styles.subtitle}>
          You are signing up with:
          <Text style={{ fontWeight: "bold", color: styles.header.color }}>
            {emailOrPhone}
          </Text>
        </Text>

        {/* Full Name Input */}
        <Text style={{ marginBottom: 5, fontSize: 14, color: "#333333" }}>
          Full Name
        </Text>
        <View
          style={[styles.inputContainer, isNameFocused && styles.inputFocused]}
        >
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#AAAAAA"
            autoCapitalize="words"
            value={fullName}
            onChangeText={setFullName}
            onFocus={() => setIsNameFocused(true)}
            onBlur={() => setIsNameFocused(false)}
          />
        </View>

        {/* Password Input */}
        <Text style={{ marginBottom: 5, fontSize: 14, color: "#333333" }}>
          Password
        </Text>
        <View
          style={[
            styles.inputContainer,
            isPasswordFocused && styles.inputFocused,
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            placeholderTextColor="#AAAAAA"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />
          <MockEyeIcon
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            isSecure={!isPasswordVisible}
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.primaryButton} onPress={handleSignUp}>
          <Text style={styles.primaryButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Footer Link */}
        <Text style={styles.footerText}>
          Already have an account?{" "}
          <Text style={styles.footerLink} onPress={navigateToLogin}>
            Sign in here
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccountScreen;
