// src/navigation/AuthNavigation.tsx

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./type";

import LoginScreen from "src/Screens/Auth/LoginScreen/LoginScreen";
import SignupScreen from "src/Screens/Auth/SignUp/SignupEmailScreen";
import CreateAccountScreen from "src/Screens/Auth/CreateAccount/CreateAccountScreen";
import ConfirmEmail from "src/Screens/Auth/ConfirmEmail/ConfirmEmail";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
      <AuthStack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
      />
      <AuthStack.Screen name="ConfirmEmail" component={ConfirmEmail} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
