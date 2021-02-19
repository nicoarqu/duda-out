import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { colors, main, programStyles } from "../../styles";

export const Title = ({ program }) => {
  return (
    <View style={main.subcontainer}>
      <Text style={programStyles.titleText}>{program.title}</Text>
      <View style={programStyles.rating}>
        <MaterialIcons name="star" size={18} color={colors.starYellow} />
        <Text>{program.rating.toFixed(1)}</Text>
      </View>
    </View>
  );
};
