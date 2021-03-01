import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { db } from "../../config/Firebase";
import { getItemData } from "../../api/forms/getItemData";
import { main } from "../../styles";
import { ChatList } from "../../components/counselors/ChatList";

export const ConversationsMain = ({ navigation }) => {
  const [conversations, setConversations] = useState([]);
  const uid = useSelector((state) => state.auth.currentUserId);

  useEffect(() => {
    async function fetchConversations() {
      const querySnapshot = await db
        .collection("conversations")
        .where("counselorId", "==", uid)
        .get();
      if (!querySnapshot.empty) {
        const res = await Promise.all(
          querySnapshot.docs.map(async (chat) => {
            const { id } = chat;
            const data = chat.data();
            const user = await getItemData("users", data.studentId);
            return { ...data, id, otherName: user.firstName };
          })
        );
        setConversations(res);
      }
    }
    fetchConversations();
  }, []);

  return (
    <View style={main.container}>
      <ChatList conversations={conversations} navigation={navigation} />
    </View>
  );
};