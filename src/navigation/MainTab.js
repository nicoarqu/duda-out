import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CalendarStack } from "./CalendarStack";
import { CounselorsStack } from "./CounselorsStack";
import { ProgramsStack } from "./ProgramsStack";
import { Profile } from "../containers/profile/Profile";
import { colors } from "../styles";

const Tab = createMaterialBottomTabNavigator();

export const MainTab = () => (
    <Tab.Navigator
        initialRouteName="Calendario"
        shifting={false}
        activeColor={colors.blue}
        inactiveColor={colors.gray}
        barStyle={{ backgroundColor: colors.lightBlue }}
    >
        <Tab.Screen name="Calendario" children={CalendarStack} options={{
            tabBarLabel: 'Calendario',
            tabBarIcon: ({ color }) => (
                <MaterialIcons name="event" color={color} size={26} />
            ),
        }} />
        <Tab.Screen name="Consejeros" children={CounselorsStack} options={{
            tabBarLabel: 'Consejeros',
            tabBarIcon: ({ color }) => (
                <MaterialIcons name="contact-support" color={color} size={26} />
            ),
        }} />
        <Tab.Screen name="Programas" children={ProgramsStack} options={{
            tabBarLabel: 'Programas',
            tabBarIcon: ({ color }) => (
                <MaterialIcons name="school" color={color} size={26} />
            ),
        }} />
        <Tab.Screen name="Perfil" component={Profile} options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
                <MaterialIcons name="account-circle" color={color} size={26} />
            ),
        }} />
    </Tab.Navigator>
);