import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { LogBox } from "react-native";
import {
  useFonts,
  Roboto_300Light as RobotoLight,
  Roboto_400Regular as RobotoRegular,
  Roboto_500Medium as RobotoMedium,
  Roboto_700Bold as RobotoBold,
} from "@expo-google-fonts/roboto";
import {
  Bitter_400Regular as BitterRegular,
  Bitter_700Bold as BitterBold,
} from "@expo-google-fonts/bitter";
import { ActivityIndicator } from "react-native-paper";
import store from "./src/redux/store";
import MainStack from "./src/navigation";

LogBox.ignoreLogs(["Setting a timer"]);
LogBox.ignoreAllLogs(true);

const App = () => {
  const [fontsLoaded] = useFonts({
    RobotoBold,
    RobotoMedium,
    RobotoRegular,
    RobotoLight,
    BitterBold,
    BitterRegular,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
