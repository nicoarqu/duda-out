import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProgramStats, StatsMenu, VARKChart } from "../containers/stats";
import { headerStyle } from "../styles";

const Stack = createStackNavigator();

export const StatsStack = () => (
  <Stack.Navigator screenOptions={headerStyle.titleHeader}>
    <Stack.Screen name="StatsMenu" component={StatsMenu} options={{ title: "Estadísticas" }} />
    <Stack.Screen name="ProgramStats" component={ProgramStats} options={{ title: "Programas" }} />
    <Stack.Screen name="VARKChart" component={VARKChart} options={{ title: "Resultados VARK" }} />
  </Stack.Navigator>
);
