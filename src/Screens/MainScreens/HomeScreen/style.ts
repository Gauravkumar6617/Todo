import { StyleSheet, Dimensions } from "react-native";

// Define your primary colors for consistency
const PRIMARY_RED = "#FF3B30"; // Vibrant Red for Action (iOS Red)
const PRIMARY_BLUE = "#007AFF"; // Clean Blue for Header (iOS Blue)
const TEXT_DARK = "#1C1C1E"; // Near Black
const TEXT_LIGHT = "#FFFFFF";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: TEXT_LIGHT,
  },
  // General container for Auth screens
  container: {
    flex: 1,
    backgroundColor: TEXT_LIGHT,
    paddingHorizontal: 25,
    paddingTop: SCREEN_HEIGHT * 0.05,
  },
  // --- Branding/Logo ---
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  logoImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  brandingText: {
    fontSize: 20,
    fontWeight: "900",
    color: PRIMARY_RED,
    marginTop: 10,
  },
  illustrationImage: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.3,
    resizeMode: "contain",
    marginBottom: 20,
  },

  // --- Headers & Text ---
  header: {
    fontSize: 30,
    fontWeight: "900",
    color: TEXT_DARK,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 25,
    lineHeight: 22,
  },

  // --- Input Styles (Auth) ---
  inputContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 55,
    backgroundColor: "#F9F9F9",
  },
  inputFocused: {
    borderColor: PRIMARY_RED,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: TEXT_DARK,
  },

  // --- Auth Buttons (Primary is RED for Signup Flow) ---
  primaryButton: {
    backgroundColor: PRIMARY_RED,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
    shadowColor: PRIMARY_RED,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  primaryButtonText: {
    color: TEXT_LIGHT,
    fontSize: 18,
    fontWeight: "bold",
  },

  // --- Auth Footer/Links ---
  footerText: {
    textAlign: "center",
    color: "#666666",
    fontSize: 15,
    marginTop: 10,
  },
  footerLink: {
    color: PRIMARY_RED,
    fontWeight: "bold",
  },

  // ------------------------------------------------------------------
  // --- HOME SCREEN STYLES (IMPROVED) ---
  // ------------------------------------------------------------------

  // --- 1. Curved Header Banner (Simplified, less overlap) ---
  headerBackground: {
    backgroundColor: PRIMARY_BLUE,
    paddingTop: 60,
    paddingBottom: 25, // Less padding to reduce the overall height
    width: "100%",
    // The curve is now only at the bottom, creating a clean swoop
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    marginBottom: 10, // Added margin below the content
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: TEXT_LIGHT,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
    marginTop: 4,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginHorizontal: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: TEXT_LIGHT,
    marginLeft: 10,
  },

  // --- 2. Main Scroll Content (No More Negative Margin/Overlap) ---
  scrollViewContainer: {
    flex: 1, // Use a separate container for scrollable content area
    backgroundColor: TEXT_LIGHT,
  },
  scrollViewContent: {
    paddingHorizontal: 25,
    paddingBottom: 100,
    paddingTop: 20, // Clean separation from the blue header
  },

  // --- 3. AI Feature Card (More modern, prominent design) ---
  aiCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6A5ACD", // A strong, unique purple/indigo for AI
    borderRadius: 20,
    padding: 20,
    marginBottom: 35, // More space below the banner
    shadowColor: "#6A5ACD",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 15,
    overflow: "hidden", // Ensures everything stays inside the shadow area
  },
  aiCardLeft: {
    // Removed separate background, using the main card color
    marginRight: 15,
  },
  aiCardMiddle: {
    flex: 1,
  },
  aiCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: TEXT_LIGHT,
    marginBottom: 2,
  },
  aiCardSubtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
  },
  aiCardButton: {
    backgroundColor: "#FFD700", // Gold accent color
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
  },
  aiCardButtonText: {
    color: TEXT_DARK,
    fontWeight: "bold",
    fontSize: 16,
  },

  // --- 4. Task List ---
  taskListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 20, // Increased space
  },
  taskListTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: TEXT_DARK,
  },
  seeAllText: {
    fontSize: 15,
    color: PRIMARY_RED,
    fontWeight: "600",
  },
  taskCardContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: TEXT_LIGHT,
    padding: 18, // Increased padding
    borderRadius: 15,
    marginBottom: 12, // Reduced gap between cards
    borderWidth: 1,
    borderColor: "#F0F0F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, // Increased shadow for better lifting effect
    shadowRadius: 5,
    elevation: 3,
  },
  taskIndicator: {
    width: 8, // Thicker indicator
    height: "100%",
    borderRadius: 4,
    marginRight: 18, // Increased margin
    alignSelf: "stretch",
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: TEXT_DARK,
  },
  taskCategory: {
    fontSize: 13,
    color: "#999999",
    marginTop: 3,
  },
  taskTime: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
    marginLeft: 10,
  },

  // --- 5. Floating Action Button (FAB) ---
  fab: {
    position: "absolute",
    width: 65,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    right: 25,
    bottom: 30, // Pushed slightly higher
    backgroundColor: PRIMARY_RED,
    borderRadius: 32.5,
    shadowColor: PRIMARY_RED,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
  },
});

export default styles;
