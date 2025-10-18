import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "src/constant/Color";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "src/constant/Dimensions";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: SCREEN_HEIGHT * 0.3,
    width: SCREEN_WIDTH * 0.5,
  },
});

export default styles;
