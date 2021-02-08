import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CalendarWeek } from "../containers/calendar";

const Stack = createStackNavigator();

export const CalendarStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="CalendarWeek" component={CalendarWeek} />
    </Stack.Navigator>
);