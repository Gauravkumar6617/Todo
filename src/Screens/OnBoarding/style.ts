// style.ts
import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../../constant/Color";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "src/constant/Dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // White background
    position: "relative",
  },
  // The main image at the top
  image: {
    width: "100%",
    height: "60%", // Take up most of the top screen space
    resizeMode: "cover",
    position: "absolute",
    top: 0,
  },
  // The "bottom sheet" card
  cardContainer: {
    position: "absolute",
    bottom: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.45, // A percentage of screen height
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 30,
    alignItems: "center",
    // Modern shadow effect
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  // Title for the card
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
    textAlign: "center",
  },
  // Description text
  description: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
  },
  // The "Let's Go!" button
  button: {
    backgroundColor: PRIMARY_COLOR, // Using your primary color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
