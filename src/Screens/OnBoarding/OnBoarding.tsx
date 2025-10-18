import React from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import styles from "./style";
import { RootStackParamList } from "src/Navigation/type";

const OnBoarding: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    // Navigate to your main application screen, for example, "MainApp"
    navigation.navigate("Auth");
  };

  return (
    <View style={styles.container}>
      {/* Set status bar to be transparent for full-screen effect */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* The main image at the top */}
      <Image
        source={require("../../assets/onBoarding/onBoarding.jpg")} // Replace with your image
        style={styles.image}
      />

      {/* The bottom sheet card */}
      <View style={styles.cardContainer}>
        {/* Title */}
        <Text style={styles.title}>Winter Vacation Trips</Text>

        {/* Description */}
        <Text style={styles.description}>
          Enjoy your winter vacation with warmth and amazing sightseeing on the
          mountains. Enjoy the best experience with us!
        </Text>

        {/* Let's Go! Button */}
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Let's Go! →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;
