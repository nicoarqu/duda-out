import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CounselorsMain, Chat, CounselorsInfo } from "../containers/counselors";
import { headerStyle } from "../styles";

const Stack = createStackNavigator();

export const CounselorsStack = () => (
  <Stack.Navigator screenOptions={headerStyle.titleHeader}>
    <Stack.Screen
      name="CounselorsMain"
      component={CounselorsMain}
      options={{ title: "Mis conversaciones" }}
    />
    <Stack.Screen
      name="CounselorsInfo"
      component={CounselorsInfo}
      options={{ title: "Consejeros" }}
    />
    <Stack.Screen
      name="Chat"
      component={Chat}
      options={({ route }) => ({ title: route.params.title })}
    />
  </Stack.Navigator>
);
