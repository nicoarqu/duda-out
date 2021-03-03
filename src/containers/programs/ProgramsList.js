import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { getItemData } from "../../api/forms/getItemData";
import { programs } from "../../api/programs/constants";
import { main, programStyles } from "../../styles";

export const ProgramsList = ({ navigation }) => {
  const [info, setInfo] = useState({ loading: true, modal: [] });

  useEffect(() => {
    async function fetchData() {
      const introDesc = await getItemData("app-text", "programs");
      setInfo({ loading: false, main: introDesc.main });
    }
    fetchData();
  }, []);

  if (info.loading) {
    return (
      <View style={main.subcontainer}>
        <ActivityIndicator />
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={main.container}>
      <View style={main.subcontainer}>
        <View style={programStyles.infoView}>
          {info.main.map((txt, idx) => (
            <Text key={idx} style={programStyles.infoText}>
              {txt}
            </Text>
          ))}
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
