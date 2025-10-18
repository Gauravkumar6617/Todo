import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "src/Screens/SplashScreen/SplashScreen";
import { RootStackParamList } from "./type";
import OnBoarding from "src/Screens/OnBoarding/OnBoarding";
import AuthNavigation from "./AuthNavigation";
import HomeNavigation from "./HomeNavigation";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="OnBoarding" component={OnBoarding} />
        <RootStack.Screen name="Auth" component={AuthNavigation} />
        <RootStack.Screen name="MainApp" component={HomeNavigation} />
      </RootStack.Navigator>
    </>
  );
};

export default RootNavigation;
