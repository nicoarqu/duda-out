import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProgramsList } from "../containers/programs";

const Stack = createStackNavigator();

export const ProgramsStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="ProgramsList" component={ProgramsList} />
    </Stack.Navigator>
);