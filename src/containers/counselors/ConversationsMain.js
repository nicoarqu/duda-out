import React, { useState, useCallback } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { db } from "../../config/Firebase";
import { getItemData } from "../../api/forms/getItemData";
import { main } from "../../styles";
import { ChatList } from "../../components/counselors/ChatList";
import { fullName } from "../../utils/fullName";
import { Loading } from "../../components/shared/Loading";

export const ConversationsMain = ({ navigation }) => {
  const [conversations, setConversations] = useState([]);
  const uid = useSelector((state) => state.auth.currentUserId);
  const [state, setState] = useState({ isLoading: true });

  useFocusEffect(
    useCallback(() => {
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
              return { ...data, id, otherName: fullName(user) };
            })
          );
          setConversations(res);
        }
      }
      fetchConversations();
      setState((prev) => ({ ...prev, isLoading: false }));
    }, [])
  );

  if (state.isLoading) {
    return <Loading />;
  }

  return (
    <View style={main.container}>
      <ChatList conversations={conversations} navigation={navigation} />
    </View>
  );
};
