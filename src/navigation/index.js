import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LogIn, SignUp } from "../containers/auth";
import { PersonalInfo, VARKTest } from "../containers/forms";
import { MainTab } from "./MainTab";
import { headerStyle } from "../styles";
import { fireAuth } from "../config/Firebase";

const Stack = createStackNavigator();

const MainStack = () => {
  const initial = fireAuth.currentUser ? "MainTab" : "LogIn";
  return (
    <Stack.Navigator initialRouteName={initial}>
      <Stack.Screen name="SignUp" component={SignUp} options={headerStyle.hideHeader} />
      <Stack.Screen name="LogIn" component={LogIn} options={headerStyle.hideHeader} />
      <Stack.Screen
        name="PersonalInfo"
        component={PersonalInfo}
        options={{ title: "Cuéntanos de ti", ...headerStyle.titleHeader }}
      />
      <Stack.Screen
        name="VARKTest"
        component={VARKTest}
        options={{ title: "Test de Habilidades", ...headerStyle.titleHeader }}
      />
      <Stack.Screen name="MainTab" children={MainTab} options={headerStyle.hideHeader} />
    </Stack.Navigator>
  );
};

export default MainStack;
