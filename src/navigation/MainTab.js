import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
// import { CalendarStack } from "./CalendarStack";
import { CounselorsStack } from "./CounselorsStack";
import { ConversationStack } from "./ConversationStack";
import { ProgramsStack } from "./ProgramsStack";
import { ProfileStack } from "./ProfileStack";
import { headerStyle, colors } from "../styles";

const Tab = createMaterialBottomTabNavigator();

export const MainTab = () => {
  const role = useSelector((state) => state.auth.currentUserRole);
  // counselor users tabs
  if (role && role === 1) {
    return (
      <Tab.Navigator
        initialRouteName="Conversaciones"
        shifting={false}
        activeColor={colors.blue}
        inactiveColor={colors.gray}
        barStyle={headerStyle.barStyle}
      >
        <Tab.Screen
          name="Conversaciones"
          children={ConversationStack}
          options={{
            tabBarLabel: "Conversaciones",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="contact-support" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Programas"
          children={ProgramsStack}
          options={{
            tabBarLabel: "Programas",
            tabBarIcon: ({ color }) => <MaterialIcons name="school" color={color} size={26} />,
          }}
        />
        <Tab.Screen
          name="Perfil"
          children={ProfileStack}
          options={{
            tabBarLabel: "Perfil",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="account-circle" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      shifting={false}
      activeColor={colors.blue}
      inactiveColor={colors.gray}
      barStyle={headerStyle.barStyle}
    >
      <Tab.Screen
        name="Consejeros"
        children={CounselorsStack}
        options={{
          tabBarLabel: "Consejeros",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="contact-support" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Programas"
        children={ProgramsStack}
        options={{
          tabBarLabel: "Programas",
          tabBarIcon: ({ color }) => <MaterialIcons name="school" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Perfil"
        children={ProfileStack}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

/**
 *  <Tab.Screen
      name="Calendario"
      children={CalendarStack}
      options={{
        tabBarLabel: "Calendario",
        tabBarIcon: ({ color }) => <MaterialIcons name="event" color={color} size={26} />,
      }}
    />
 */
