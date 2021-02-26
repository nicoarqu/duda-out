import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProgramStats } from "../containers/stats/ProgramStats";
import { headerStyle } from "../styles";

const Stack = createStackNavigator();

export const StatsStack = () => (
  <Stack.Navigator screenOptions={headerStyle.titleHeader}>
    <Stack.Screen name="ProgramStats" component={ProgramStats} options={{ title: "Programas" }} />
  </Stack.Navigator>
);
