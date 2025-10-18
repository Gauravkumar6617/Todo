import { StyleSheet } from "react-native";
// Assuming PRIMARY_COLOR and Dimensions are imported from the correct path
import { PRIMARY_COLOR } from "src/constant/Color";
import { SCREEN_HEIGHT } from "src/constant/Dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 25,
    paddingTop: SCREEN_HEIGHT * 0.1,
  },
  header: {
    fontSize: 32,
    fontWeight: "900",
    color: "#333333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 40,
  },

  // --- Input Styles ---
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
    borderColor: PRIMARY_COLOR,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
  },

  // --- Primary Button Styles (Sign Up) ---
  primaryButton: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  // --- Separator Styles ---
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  separatorText: {
    width: 50,
    textAlign: "center",
    color: "#AAAAAA",
    fontSize: 14,
  },

  // --- Google Button Styles (OAuth) ---
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#E0E0E0",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 10,
  },
  googleButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333333",
    marginLeft: 10,
  },

  // --- Footer/Navigation Link ---
  footerText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 15,
    color: "#666666",
  },
  footerLink: {
    color: PRIMARY_COLOR,
    fontWeight: "bold",
  },
});

export default styles;
