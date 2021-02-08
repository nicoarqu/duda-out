import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { LogIn, SignUp } from '../containers/auth';
import { MainTab } from './MainTab';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="LogIn" component={LogIn} />
    <Stack.Screen name="MainTab" children={MainTab} />
  </Stack.Navigator>
);

export default MainStack;
/*
<Stack.Screen name="AbilityTest" component={AbilityTest} />
<Stack.Screen name="PersonalTest" component={PersonalTest} />
*/
