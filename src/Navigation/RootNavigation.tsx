import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "src/Screens/SplashScreen/SplashScreen";
import { RootStackParamList } from "./type";
import OnBoarding from "src/Screens/OnBoarding/OnBoarding";
import LoginScreen from "src/Screens/Auth/LoginScreen/LoginScreen";
import SignupScreen from "src/Screens/Auth/SignUp/SignUpScreen";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="OnBoarding" component={OnBoarding} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="SignupScreen" component={SignupScreen} />
      </RootStack.Navigator>
    </>
  );
};

export default RootNavigation;
