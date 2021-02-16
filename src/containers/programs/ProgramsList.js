import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { programs } from "../../api/programs/constants";
import { main, programStyles } from "../../styles";

export const ProgramsList = ({ navigation }) => {
  return (
    <View style={main.container}>
      <View style={main.subcontainer}>
        <View style={programStyles.infoView}>
          <Text style={programStyles.infoText}>
            En esta sección encontrarás algunos de los programas que tiene la universidad.
          </Text>
          <Text style={programStyles.infoText}>Si ya has asistido, ¡evalúalas!</Text>
        </View>
        <View style={programStyles.buttonsContainer}>
          {programs.map((group) => (
            <View style={programStyles.buttonView} key={group.id}>
              <TouchableOpacity
                style={programStyles.button}
                onPress={() =>
                  navigation.navigate("ProgramGroup", {
                    groupItems: group.items,
                    name: group.title,
                  })
                }
              >
                <Text style={programStyles.infoButton}>{group.title}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
