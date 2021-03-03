import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { headerStyle } from "../styles";
import { Survey, PendingSurveys } from "../containers/surveys";

const Stack = createStackNavigator();

export const SurveyStack = () => (
  <Stack.Navigator screenOptions={headerStyle.titleHeader}>
    <Stack.Screen
      name="PendingSurveys"
      component={PendingSurveys}
      options={{ title: "Encuestas a responder" }}
    />
    <Stack.Screen
      name="Survey"
      component={Survey}
      options={({ route }) => ({ title: route.params.title })}
    />
  </Stack.Navigator>
);
