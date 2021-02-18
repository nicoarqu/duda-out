import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CounselorsMain, Chat } from "../containers/counselors";
import { titleHeader } from "../styles";

const Stack = createStackNavigator();

export const CounselorsStack = () => (
  <Stack.Navigator screenOptions={titleHeader}>
    <Stack.Screen
      name="CounselorsMain"
      component={CounselorsMain}
      options={{ title: "Consejeros" }}
    />
    <Stack.Screen name="Chat" component={Chat} options={{ title: "Chat" }} />
  </Stack.Navigator>
);
