import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ConversationsMain, Chat } from "../containers/counselors";
import { headerStyle } from "../styles";

const Stack = createStackNavigator();

export const SurveyCounselorStack = () => (
  <Stack.Navigator screenOptions={headerStyle.titleHeader}>
    <Stack.Screen
      name="ConversationsMain"
      component={ConversationsMain}
      options={{ title: "Mis conversaciones" }}
    />
    <Stack.Screen
      name="Chat"
      component={Chat}
      options={({ route }) => ({ title: route.params.title })}
    />
  </Stack.Navigator>
);
