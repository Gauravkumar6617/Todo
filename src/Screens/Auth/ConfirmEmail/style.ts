import { StyleSheet } from "react-native";
// NOTE: Assuming PRIMARY_COLOR and Dimensions are imported from the correct path
// Replace these with your actual import paths if different
const PRIMARY_COLOR = "#6495ED"; // Calm Blue (used for general theme accents/links)
const SCREEN_HEIGHT = 812; // Placeholder, usually imported from Dimensions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 25,
    paddingTop: SCREEN_HEIGHT * 0.08,
  },

  // --- Logo/Branding Styles ---
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logoImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginBottom: 5,
  },
  brandingText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#333333",
  },
  // --- End Logo/Branding Styles ---

  header: {
    fontSize: 30,
    fontWeight: "900",
    color: "#333333",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    color: "#666666",
    marginBottom: 30,
  },

  // --- Input Styles (Standard clean input) ---
  inputContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 55,
  },
  inputFocused: {
    borderColor: PRIMARY_COLOR, // Using PRIMARY_COLOR for focus effect
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
  },

  // --- Illustration Image (Used on Signup Email Screen) ---
  illustrationImage: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.25,
    resizeMode: "contain",
    marginBottom: 30,
    alignSelf: "center",
  },

  // --- Remember Me & Forgot Password (Used on Login Screen) ---
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: -10,
  },
  rememberMe: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxPlaceholder: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: PRIMARY_COLOR,
    borderRadius: 4,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxText: {
    fontSize: 14,
    color: "#333333",
  },
  forgotPasswordText: {
    fontSize: 14,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
  },
  // --- End Options Row ---

  // --- Primary Action Button (Red for Sign Up Flow, Blue for Login) ---
  primaryButton: {
    // Using a fixed red color for "Continue"/"Sign Up" button as per your latest design image
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    elevation: 5,
    shadowColor: PRIMARY_COLOR,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { height: 5, width: 0 },
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  // --- Social Login/Separator Styles (Used on Login Screen) ---
  socialHeader: {
    textAlign: "center",
    color: "#666666",
    marginBottom: 15,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    marginBottom: 30,
  },
  socialIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  socialIconText: {
    fontSize: 24,
  },

  // --- Footer Link to Login/Signup ---
  footerText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 15,
    color: "#666666",
  },
  footerLink: {
    color: PRIMARY_COLOR, // Using PRIMARY_COLOR for the link text
    fontWeight: "bold",
  },
});

// NOTE: OTP-specific styles were kept within ConfirmEmailScreen.tsx for modularity.

export default styles;
