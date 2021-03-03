import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { headerStyle } from "../styles";
import { SurveyMain, AddSurvey, SurveyInfo } from "../containers/surveys";

const Stack = createStackNavigator();

export const SurveyCounselorStack = () => (
  <Stack.Navigator screenOptions={headerStyle.titleHeader}>
    <Stack.Screen name="SurveyMain" component={SurveyMain} options={{ title: "Encuestas" }} />
    <Stack.Screen name="AddSurvey" component={AddSurvey} options={{ title: "Crear encuesta" }} />
    <Stack.Screen
      name="SurveyInfo"
      component={SurveyInfo}
      options={({ route }) => ({ title: route.params.title })}
    />
  </Stack.Navigator>
);
