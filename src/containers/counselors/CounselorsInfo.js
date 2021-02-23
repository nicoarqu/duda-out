import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { getCounselors } from "../../api/counselors/getCounselors";
import { db } from "../../config/Firebase";
import { main, counselorStyle } from "../../styles";

export const CounselorsInfo = ({ navigation }) => {
  const [counselors, setCounselor] = useState([]);

  const uid = useSelector((state) => state.auth.currentUserId);

  useEffect(() => {
    async function fetchData() {
      const result = await getCounselors();
      setCounselor(result);
    }
    fetchData();
  }, []);

  const openChat = async (counselorId) => {
    const querySnapshot = await db
      .collection("conversations")
      .where("studentId", "==", uid)
      .where("counselorId", "==", counselorId)
      .limit(1)
      .get();
    if (!querySnapshot.empty) {
      const chat = querySnapshot.docs[0];
      navigation.navigate("Chat", { chatId: chat.id });
    } else {
      // create new chat
      const newChat = await db.collection("conversations").add({ counselorId, studentId: uid });
      navigation.navigate("Chat", { chatId: newChat.id });
    }
  };

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
            <View key={item.counselorId}>
              <Text>{item.firstName}</Text>
              <Text>{item.desc}</Text>
              <TouchableOpacity onPress={() => openChat(item.uid)} style={counselorStyle.button}>
                <Text>Habla con {item.firstName}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};
