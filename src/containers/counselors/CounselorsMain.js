import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { db } from "../../config/Firebase";
import { getItemData } from "../../api/forms/getItemData";
import { counselorStyle, main } from "../../styles";
import { ChatList } from "../../components/counselors/ChatList";
import { fullName } from "../../utils/fullName";
import { Loading } from "../../components/shared/Loading";

export const CounselorsMain = ({ navigation }) => {
  const [conversations, setConversations] = useState([]);
  const uid = useSelector((state) => state.auth.currentUserId);
  const [state, setState] = useState({ isLoading: true });

  useFocusEffect(
    useCallback(() => {
      async function fetchConversations() {
        setState((prev) => ({ ...prev, isLoading: true }));
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

  return (
    <View style={main.container}>
      {state.isLoading ? (
        <Loading />
      ) : (
        <ChatList conversations={conversations} navigation={navigation} />
      )}
      <View style={counselorStyle.buttonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CounselorsInfo")}
          style={counselorStyle.button}
        >
          <Text style={main.buttonText}>Conoce a tus consejeras/os</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
