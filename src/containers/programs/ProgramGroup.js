import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { main } from "../../styles";

export const ProgramGroup = ({ route, navigation }) => {
  const { groupItems } = route.params;
  return (
    <View style={main.container}>
      {groupItems.forEach((program) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProgramInfo", {
              program,
              name: program.title,
            })
          }
        >
          <Text>{program.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
