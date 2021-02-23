import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { db } from "../../config/Firebase";
import { getItemData } from "../../api/forms/getItemData";
import { counselorStyle, main } from "../../styles";

export const CounselorsMain = ({ navigation }) => {
  const [conversations, setConversations] = useState([]);
  const uid = useSelector((state) => state.auth.currentUserId);

  useEffect(() => {
    async function fetchConversations() {
      const querySnapshot = await db
        .collection("conversations")
        .where("studentId", "==", uid)
        .get();
      if (!querySnapshot.empty) {
        const res = await Promise.all(
          querySnapshot.docs.map(async (chat) => {
            const { id } = chat;
            const data = chat.data();
            const user = await getItemData("users", data.counselorId);
            return { ...data, id, counselorName: user.firstName };
          })
        );
        setConversations(res);
      }
    }
    fetchConversations();
  }, []);

  return (
    <View style={main.container}>
      <View style={main.subcontainer}>
        <Text>Chats</Text>
        <FlatList
          data={conversations}
          renderItem={({ item }) => (
            <View key={item.id}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Chat", { chatId: item.id })}
                style={counselorStyle.button}
              >
                <Text>Chat con {item.counselorName}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <View style={main.subcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate("CounselorsInfo")}>
            <Text>Conoce a tus consejeras/os</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
