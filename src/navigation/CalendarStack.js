import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CalendarWeek, CalendarMonth } from "../containers/calendar";
import { titleHeader } from "../styles";

const Stack = createStackNavigator();

export const CalendarStack = () => (
  <Stack.Navigator screenOptions={titleHeader}>
    <Stack.Screen
      name="CalendarWeek"
      component={CalendarWeek}
      options={{ title: "Horario semana" }}
    />
    <Stack.Screen
      name="CalendarMonth"
      component={CalendarMonth}
      options={{ title: "Vista mensual" }}
    />
  </Stack.Navigator>
);
