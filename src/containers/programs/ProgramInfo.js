import React from "react";
import { View, Text } from "react-native";
import { main, programStyles } from "../../styles";

export const ProgramInfo = ({ route }) => {
  const { program } = route.params;
  return (
    <View style={[main.container, main.floatingBox]}>
      <View style={main.subcontainer}>
        <Text style={programStyles.titleText}>{program.title}</Text>
        <Text>({program.rating})</Text>
      </View>
      <View style={programStyles.descView}>
        <Text style={programStyles.infoText}>{program.desc}</Text>
      </View>
    </View>
  );
};
