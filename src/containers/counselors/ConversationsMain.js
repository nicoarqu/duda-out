import React, { useState, useCallback, useEffect } from "react";
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
  const [loading, setLoading] = useState(true);

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
    }, [])
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, [conversations]);

  return (
    <View style={main.container}>
      {loading ? (
        <Loading />
      ) : (
        <ChatList conversations={conversations} navigation={navigation} loading={loading} />
      )}
    </View>
  );
};
