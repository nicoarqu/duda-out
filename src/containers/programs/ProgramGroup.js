import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { main, programStyles } from "../../styles";

export const ProgramGroup = ({ route, navigation }) => {
  const { groupItems } = route.params;
  return (
    <View style={main.container}>
      <View style={main.subcontainer}>
        <View style={programStyles.buttonsContainer}>
          {groupItems.map((program) => (
            <View style={programStyles.buttonView} key={program.id}>
              <TouchableOpacity
                style={programStyles.button}
                onPress={() =>
                  navigation.navigate("ProgramInfo", {
                    program,
                    name: program.title,
                  })
                }
              >
                <Text style={programStyles.infoButton}>{program.title}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
