import React, { useState, useEffect } from "react";
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
import { AuthStackParamList, RootStackParamList } from "src/Navigation/type";

// Mock Eye Icon for password toggle
const MockEyeIcon = ({
  onPress,
  isSecure,
}: {
  onPress: () => void;
  isSecure: boolean;
}) => (
  <Text
    onPress={onPress}
    style={{
      color: styles.inputFocused.borderColor,
      fontSize: 20,
      paddingHorizontal: 5,
    }}
  >
    {isSecure ? "👁️" : "🔒"}
  </Text>
);

// Mock Checkbox component
const MockCheckbox = ({
  isChecked,
  onPress,
}: {
  isChecked: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity
    style={[
      styles.checkboxPlaceholder,
      isChecked && { backgroundColor: styles.checkboxPlaceholder.borderColor },
    ]}
    onPress={onPress}
  >
    {isChecked && <Text style={{ color: "white", fontSize: 16 }}>✓</Text>}
  </TouchableOpacity>
);

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  // Example: Safe navigation after render (if you need to redirect)
  useEffect(() => {
    // For example, if user is already logged in
    // navigation.navigate("MainApp");
  }, []);

  const handleLogin = () => {
    console.log(`Logging in with: ${email}, remember me: ${rememberMe}`);
    // Perform your login logic, then navigate
    // navigation.navigate("MainApp");
  };

  const navigateToSignup = () => navigation.navigate("SignupScreen");
  const navigateToForgotPassword = () => navigation.navigate("SignupScreen");

  const handleGoogleLogin = () => console.log("Google login clicked");
  const handleAppleLogin = () => console.log("Apple login clicked");
  const handleFacebookLogin = () => console.log("Facebook login clicked");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/todo_logo.png")}
            style={styles.logoImage}
          />
          <Text style={styles.brandingText}>REXODUS GAMING</Text>
        </View>

        {/* Header */}
        <Text style={styles.header}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Let's login to continue</Text>

        {/* Email Input */}
        <View
          style={[styles.inputContainer, isEmailFocused && styles.inputFocused]}
        >
          <TextInput
            style={styles.input}
            placeholder="Email or Phone Number"
            placeholderTextColor="#AAAAAA"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
        </View>

        {/* Password Input */}
        <View
          style={[
            styles.inputContainer,
            isPasswordFocused && styles.inputFocused,
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Password"
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

        {/* Remember Me & Forgot Password */}
        <View style={styles.optionsRow}>
          <TouchableOpacity
            style={styles.rememberMe}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <MockCheckbox
              isChecked={rememberMe}
              onPress={() => setRememberMe(!rememberMe)}
            />
            <Text style={styles.checkboxText}>Remember me</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot password</Text>
          </TouchableOpacity>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
          <Text style={styles.primaryButtonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Social Login */}
        <Text style={styles.socialHeader}>Or connect with</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity
            style={styles.socialIcon}
            onPress={handleGoogleLogin}
          >
            <Text style={styles.socialIconText}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialIcon}
            onPress={handleAppleLogin}
          >
            <Text style={styles.socialIconText}></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialIcon}
            onPress={handleFacebookLogin}
          >
            <Text style={styles.socialIconText}>f</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Text style={styles.footerText}>
          Don't have an account?{" "}
          <Text style={styles.footerLink} onPress={navigateToSignup}>
            Sign up here
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
