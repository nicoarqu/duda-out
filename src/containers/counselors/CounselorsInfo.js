import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { getCounselors } from "../../api/counselors/getCounselors";
import { main, counselorStyle } from "../../styles";

export const CounselorsInfo = ({ navigation }) => {
  const [counselors, setCounselor] = useState([
    { id: "1", firstName: "Mario", counselorDesc: "Mario sabe mucho de vida universitaria" },
    { id: "2", firstName: "Juana", counselorDesc: "Juana sabe mucho de vida universitaria" },
  ]);

  useEffect(() => {
    async function fetchData() {
      const result = await getCounselors();
      setCounselor(result);
    }
    fetchData();
  }, []);

  const openChat = () => {};

  return (
    <View style={main.container}>
      <View style={[main.floatingBox, counselorStyle.counselorInfoVIew]}>
        <Text style={counselorStyle.titleText}>¿Quienes son l@s consejer@s?</Text>
        <Text>Los consejeros son estudiantes que .........</Text>
      </View>
      <View style={[main.floatingBox, counselorStyle.counselorInfoVIew]}>
        <Text style={counselorStyle.titleText}>Resuelve tus dudas</Text>
        <Text>Habla con nosotr@s</Text>
        <FlatList
          data={counselors}
          renderItem={({ item }) => (
            <View key={item.id}>
              <Text>{item.firstName}</Text>
              <Text>{item.desc}</Text>
              <TouchableOpacity onPress={() => openChat()} style={counselorStyle.button}>
                <Text>Habla con {item.firstName}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};
