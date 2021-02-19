import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";
import { LogIn, SignUp } from "../containers/auth";
import { PersonalInfo, VARKTest } from "../containers/forms";
import { MainTab } from "./MainTab";
import { stackHeader } from "../styles";
import { fireAuth } from "../config/Firebase";

const Stack = createStackNavigator();

const MainStack = () => {
  const initial = fireAuth.currentUser ? "MainTab" : "LogIn";
  return (
    <Stack.Navigator initialRouteName={initial} screenOptions={stackHeader}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen
        name="PersonalInfo"
        component={PersonalInfo}
        options={{ title: "Información personal" }}
      />

      <Stack.Screen name="VARKTest" component={VARKTest} options={{ title: "Test VARK" }} />
      <Stack.Screen name="MainTab" children={MainTab} />
    </Stack.Navigator>
  );
};

export default MainStack;
