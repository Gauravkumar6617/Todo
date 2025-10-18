// LoginScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
// NOTE: For icons, you would typically use a library like 'react-native-vector-icons'.
// We are using mock components here for illustration.
// import { Ionicons } from '@expo/vector-icons';

import { useNavigation, NavigationProp } from "@react-navigation/native";
import styles from "./style";
import SignupScreen from "../SignUp/SignUpScreen";

// Define a type for your navigation stack parameters
type RootStackParamList = {
  SignupScreen: undefined;
};

// Mock Icon components for demonstration purposes
const MockEyeIcon = ({ onPress, isSecure }) => (
  <Text
    onPress={onPress}
    style={{ color: styles.inputFocused.borderColor, fontSize: 20 }}
  >
    {isSecure ? "👁️" : "🔒"}
  </Text>
);
const MockGoogleIcon = () => <Text style={{ fontSize: 20 }}>G</Text>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // State to handle input focus for modern styling
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleLogin = () => {
    navigation.navigate(SignupScreen);
    // Implement your authentication logic here
    console.log(`Logging in with: ${email} and ${password}`);
    // On success:
    // navigation.navigate("MainApp");
  };

  const handleGoogleLogin = () => {
    // Implement Google OAuth logic here
    console.log("Starting Google OAuth process...");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {/* Header */}
        <Text style={styles.header}>Welcome Back</Text>
        <Text style={styles.subtitle}>
          Sign in to pick up where you left off.
        </Text>

        {/* --- Email Input --- */}
        <View
          style={[
            styles.inputContainer,
            isEmailFocused && styles.inputFocused, // Apply focus style if true
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#AAAAAA"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
        </View>

        {/* --- Password Input --- */}
        <View
          style={[
            styles.inputContainer,
            isPasswordFocused && styles.inputFocused, // Apply focus style if true
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

        {/* --- Primary Login Button --- */}
        <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
          <Text style={styles.primaryButtonText}>Sign In</Text>
        </TouchableOpacity>

        {/* --- Separator --- */}
        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>OR</Text>
          <View style={styles.separatorLine} />
        </View>

        {/* --- Google OAuth Button --- */}
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleLogin}
        >
          <MockGoogleIcon />
          <Text style={styles.googleButtonText}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
