import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CalendarWeek } from "../containers/calendar";
import { titleHeader } from "../styles";

const Stack = createStackNavigator();

export const CalendarStack = () => (
  <Stack.Navigator screenOptions={titleHeader}>
    <Stack.Screen name="CalendarWeek" component={CalendarWeek} options={{ title: "Horario" }} />
  </Stack.Navigator>
);
