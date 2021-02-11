import React from "react";
import { View, Text } from "react-native";

export const ProgramInfo = ({ route }) => {
  const { program } = route.params;
  return (
    <View>
      <Text>{program.title}</Text>
      <Text>{program.desc}</Text>
      <Text>{program.rating}</Text>
    </View>
  );
};
