import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CounselorsMain } from "../containers/counselors";

const Stack = createStackNavigator();

export const CounselorsStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="CounselorsMain" component={CounselorsMain} />
    </Stack.Navigator>
);