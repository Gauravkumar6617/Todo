import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "src/Navigation/RootNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
