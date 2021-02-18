import React from "react";
import { Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { main } from "../../styles";

export const VARKBox = ({ user }) => {
  const abilityRef = {
    aural: "Aural",
    kinesthetic: "Kinestética",
    readWrite: "Escrita",
    visual: "Visual",
  };
  if (Object.keys(user.VARK).length === 0) {
    return (
      <View style={main.floatingBox}>
        <ActivityIndicator />
        <Text>Cargando habilidades</Text>
      </View>
    );
  }
  return (
    <View style={main.floatingBox}>
      <Text>Tus resultados son:</Text>
      {Object.keys(user.VARK)
        .sort((a, b) => user.VARK[b] - user.VARK[a])
        .map((ability) => (
          <Text key={ability}>
            {abilityRef[ability]} : {user.VARK[ability]} %
          </Text>
        ))}
    </View>
  );
};

export default VARKBox;
