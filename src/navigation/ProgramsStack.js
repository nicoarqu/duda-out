import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProgramsList, ProgramGroup, ProgramInfo } from "../containers/programs";
import { headerStyle } from "../styles";

const Stack = createStackNavigator();

export const ProgramsStack = () => (
  <Stack.Navigator screenOptions={headerStyle.titleHeader}>
    <Stack.Screen name="ProgramsList" component={ProgramsList} options={{ title: "Programas" }} />
    <Stack.Screen
      name="ProgramGroup"
      component={ProgramGroup}
      options={({ route }) => ({ title: route.params.name })}
    />
    <Stack.Screen
      name="ProgramInfo"
      component={ProgramInfo}
      options={({ route }) => ({ title: route.params.name })}
    />
  </Stack.Navigator>
);
