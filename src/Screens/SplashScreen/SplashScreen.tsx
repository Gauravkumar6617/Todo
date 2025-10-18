import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "src/Navigation/type"; // ✅ Correct import path

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "SplashScreen"
>;

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  const translateY = useRef(new Animated.Value(100)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(500),
    ]).start(() => {
      navigation.navigate("OnBoarding"); // ✅ Type-safe now
    });
  }, [navigation, opacity, translateY]);

  return (
    <View style={styles.background}>
      <Animated.Image
        source={require("../../assets/todo_logo.png")}
        style={[
          styles.logo,
          {
            transform: [{ translateY }],
            opacity,
          },
        ]}
      />
    </View>
  );
};

export default SplashScreen;
