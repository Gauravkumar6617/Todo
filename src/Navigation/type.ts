// src/navigation/type.ts

export type RootStackParamList = {
  SplashScreen: undefined;
  OnBoarding: undefined;
  Auth: undefined;
  MainApp: undefined;
};

export type AuthStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
  CreateAccountScreen: { emailOrPhone?: string };
  ConfirmEmail: { emailOrPhone: string };
};

export type HomeStackParamList = {
  HomeScreen: undefined;
};
