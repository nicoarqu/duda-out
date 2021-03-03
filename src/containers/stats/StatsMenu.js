import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { main, programStyles } from "../../styles";

export const StatsMenu = ({ navigation }) => {
  return (
    <View style={main.container}>
      <View style={main.subcontainer}>
        <View style={programStyles.buttonsContainer}>
          <View style={programStyles.buttonView}>
            <TouchableOpacity
              style={programStyles.button}
              onPress={() => navigation.navigate("ProgramStats")}
            >
              <Text style={programStyles.infoButton}>Programas</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={programStyles.buttonsContainer}>
          <View style={programStyles.buttonView}>
            <TouchableOpacity
              style={programStyles.button}
              onPress={() => navigation.navigate("VARKChart")}
            >
              <Text style={programStyles.infoButton}>Resultados VARK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
