import React from "react";
import { View, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { main } from "../../styles";

export const Loading = () => {
  return (
    <View style={main.subcontainer}>
      <ActivityIndicator />
      <Text>Cargando...</Text>
    </View>
  );
};
