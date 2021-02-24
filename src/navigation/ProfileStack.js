import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "../containers/profile/Profile";
import { headerStyle } from "../styles";

const Stack = createStackNavigator();

export const ProfileStack = () => (
  <Stack.Navigator screenOptions={headerStyle.titleHeader}>
    <Stack.Screen name="Profile" component={Profile} options={{ title: "Mi perfil" }} />
  </Stack.Navigator>
);
