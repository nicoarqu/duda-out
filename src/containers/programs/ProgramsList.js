import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { programs } from "../../api/programs/constants";
import { main } from "../../styles";

export const ProgramsList = ({ navigation }) => {
  return (
    <View style={main.container}>
      <Text>En esta sección encontrarás algunos de los programas que tiene la universidad</Text>
      <Text>Si ya has asistido, ¡evalúalas!</Text>
      {programs.forEach((group) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProgramGroup", {
              groupItems: group.items,
              name: group.title,
            })
          }
        >
          <Text>{group.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
