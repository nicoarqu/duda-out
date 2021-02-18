import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { db } from "../../config/Firebase";

export const Chat = ({ navigation, route }) => {
  const { chatId } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = () => {
      db.collection("conversations")
        .doc(chatId)
        .collection("messages")
        .orderBy("createdAt", "desc")
        .onSnapshot((query) => {
          const msgList = query.docs.map((doc) => {
            const fbData = doc.data();
            return { _id: doc.id, ...fbData };
          });
          setMessages(msgList);
        });
    };
    // unsubscribe service when unmount
    return () => getMessages();
  }, []);

  return (
    <View>
      <Text>Vista de Chat</Text>
    </View>
  );
};
