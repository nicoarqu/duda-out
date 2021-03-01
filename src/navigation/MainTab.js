import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useSelector } from "react-redux";
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { headerStyle, colors } from "../styles";
// Student
// import { CalendarStack } from "./CalendarStack";
import { CounselorsStack } from "./CounselorsStack";
import { ProgramsStack } from "./ProgramsStack";
import { ProfileStack } from "./ProfileStack";
// Counselors
import { StatsStack } from "./StatsStack";
import { ConversationStack } from "./ConversationStack";
import { SurveyCounselorStack } from "./SurveyCounselorStack";

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
          name="Encuestas"
          children={SurveyCounselorStack}
          options={{
            tabBarLabel: "Encuestas",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar-question" color={color} size={26} />
            ),
          }}
        />
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
          name="Estadísticas"
          children={StatsStack}
          options={{
            tabBarLabel: "Estadísticas",
            tabBarIcon: ({ color }) => <Ionicons name="stats-chart" color={color} size={26} />,
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
