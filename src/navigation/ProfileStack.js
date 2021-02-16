import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "../containers/profile/Profile";
import { PersonalInfo, VARKTest } from "../containers/forms";
import { titleHeader } from "../styles";

const Stack = createStackNavigator();

export const ProfileStack = () => (
  <Stack.Navigator screenOptions={titleHeader}>
    <Stack.Screen name="VARKTest" component={VARKTest} options={{ title: "Test VARK" }} />
    <Stack.Screen
      name="PersonalInfo"
      component={PersonalInfo}
      options={{ title: "Información personal" }}
    />
    <Stack.Screen name="Profile" component={Profile} options={{ title: "Perfil" }} />
  </Stack.Navigator>
);
