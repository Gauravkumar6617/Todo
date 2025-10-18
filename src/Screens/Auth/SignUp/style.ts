import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "src/constant/Color"; // Assuming PRIMARY_COLOR exists
import { SCREEN_HEIGHT } from "src/constant/Dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 25,
    paddingTop: SCREEN_HEIGHT * 0.08, // Slightly less paddingTop than login for more content
  },

  // --- Logo/Branding Styles (reused from Login) ---
  logoContainer: {
    alignItems: "center",
    marginBottom: 20, // Slightly less margin for signup
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
    fontSize: 30, // Slightly smaller header for signup steps
    fontWeight: "900",
    color: "#333333",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    color: "#666666",
    marginBottom: 30, // More space before input
  },

  // --- Input Styles (reused from Login) ---
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

  // --- Illustration Image for Signup Email Screen ---
  illustrationImage: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.25, // Adjust height as needed
    resizeMode: "contain",
    marginBottom: 30,
    alignSelf: "center",
  },

  // --- Primary Action Button (Red color as per design) ---
  primaryButton: {
    backgroundColor: PRIMARY_COLOR, // Red color for "Continue" button
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20, // More margin before the button
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

  // --- Footer Link to Login ---
  footerText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 15,
    color: "#666666",
  },
  footerLink: {
    color: PRIMARY_COLOR, // Using PRIMARY_COLOR for the link
    fontWeight: "bold",
  },
});

export default styles;
