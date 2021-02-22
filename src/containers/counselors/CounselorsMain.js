import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { getConversations } from "../../api/counselors/getConversations";
import { counselorStyle, main } from "../../styles";

export const CounselorsMain = ({ navigation }) => {
  const [conversations, setConversations] = useState([]);
  const uid = useSelector((state) => state.auth.currentUserId);

  useEffect(() => {
    async function fetchData() {
      const result = await getConversations(uid);
      setConversations(result);
    }
    fetchData();
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
