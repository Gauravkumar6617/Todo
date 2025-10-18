import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";

import { useNavigation, NavigationProp } from "@react-navigation/native";
import styles from "./style"; // Reusing the shared styles

// Define a type for your navigation stack parameters
type RootStackParamList = {
  Signup: undefined;
  Login: undefined; // To navigate back to login
  MainApp: undefined;
};

// Mock Icon components for demonstration purposes
const MockEyeIcon = ({ onPress, isSecure }) => (
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
const MockGoogleIcon = () => <Text style={{ fontSize: 20 }}>G</Text>;

const SignupScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // State for input focus styling
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleSignup = () => {
    // Implement your sign-up logic here
    console.log(`Signing up user: ${name}, ${email}`);
    // On success:
    // navigation.navigate("MainApp");
  };

  const handleGoogleSignup = () => {
    // Implement Google OAuth logic here
    console.log("Starting Google OAuth process for sign up...");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          {/* Header */}
          <Text style={styles.header}>Create Account</Text>
          <Text style={styles.subtitle}>
            Start your productivity journey today!
          </Text>

          {/* --- Name Input --- */}
          <View
            style={[
              styles.inputContainer,
              isNameFocused && styles.inputFocused,
            ]}
          >
            <TextInput
              style={styles.input}
              placeholder="Your Name"
              placeholderTextColor="#AAAAAA"
              autoCapitalize="words"
              value={name}
              onChangeText={setName}
              onFocus={() => setIsNameFocused(true)}
              onBlur={() => setIsNameFocused(false)}
            />
          </View>

          {/* --- Email Input --- */}
          <View
            style={[
              styles.inputContainer,
              isEmailFocused && styles.inputFocused,
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

          {/* --- Primary Sign Up Button --- */}
          <TouchableOpacity style={styles.primaryButton} onPress={handleSignup}>
            <Text style={styles.primaryButtonText}>Sign Up</Text>
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
            onPress={handleGoogleSignup}
          >
            <MockGoogleIcon />
            <Text style={styles.googleButtonText}>Sign Up with Google</Text>
          </TouchableOpacity>

          {/* --- Footer Link to Login --- */}
          <Text style={styles.footerText}>
            Already have an account?{" "}
            <Text
              style={styles.footerLink}
              onPress={() => navigation.navigate("Login")}
            >
              Log In
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
