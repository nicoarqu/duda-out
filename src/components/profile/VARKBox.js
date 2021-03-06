import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";
import { main, surveyStyle } from "../../styles";

export const VARKBox = ({ user, state }) => {
  const abilityRef = {
    aural: "auditivo",
    kinesthetic: "kinestesica",
    readWrite: "lectoEscritura",
    visual: "visual",
  };
  const abilityText = {
    aural: "Perfil Auditivo",
    kinesthetic: "Perfil Kinestésico",
    readWrite: "Perfil Lectura y escritura",
    visual: "Perfil Visual",
  };
  if (state.isLoading) {
    return (
      <View style={main.floatingBox}>
        <ActivityIndicator />
        <Text>Cargando habilidades</Text>
      </View>
    );
  }
  return (
    <ScrollView style={[main.floatingBox, surveyStyle.abilityView]}>
      <View style={surveyStyle.abilityContent}>
        <Text>Tus resultados del test de habilidades son:</Text>
        {Object.keys(user.VARK)
          .sort((a, b) => user.VARK[b] - user.VARK[a])
          .map((ability, index) => (
            <View key={ability}>
              <Text style={surveyStyle.abilityLabel}>
                {abilityText[ability]} : {user.VARK[ability]} %
              </Text>
              {(index === 0 || index === 1) &&
                state.varkDesc[abilityRef[ability]].map((desc, idx) => (
                  <Text key={idx}>{desc}</Text>
                ))}
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default VARKBox;
