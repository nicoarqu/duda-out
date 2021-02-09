import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "../containers/profile/Profile";
import { titleHeader } from "../styles";

const Stack = createStackNavigator();

export const ProfileStack = () => (
  <Stack.Navigator screenOptions={titleHeader}>
    <Stack.Screen name="Profile" component={Profile} options={{ title: "Perfil" }} />
  </Stack.Navigator>
);
