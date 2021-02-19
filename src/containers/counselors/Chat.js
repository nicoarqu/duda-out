import React, { useEffect, useState } from "react";
import { GiftedChat, Composer, Send } from "react-native-gifted-chat";
import { useSelector } from "react-redux";
import { db } from "../../config/Firebase";

export const Chat = ({ route }) => {
  const { chatId } = route.params;
  const [messages, setMessages] = useState([]);
  const auth = useSelector((state) => state.auth);
  const user = { _id: auth.currentUserId, name: auth.currentUserName };

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

  const addMessage = (newMsg = []) => {
    setMessages((prevMsg) => GiftedChat.append(prevMsg, newMsg));
    const { text } = newMsg[0];
    db.collection("conversations").doc(chatId).collection("messages").add({
      text,
      createdAt: new Date().getTime(),
      user,
      sent: true,
    });
  };

  useEffect(() => {
    getMessages();
    // unsubscribe service when unmount
    return () => getMessages();
  }, []);

  return (
    <GiftedChat
      messages={messages}
      user={user}
      onSend={(msg) => addMessage(msg)}
      renderComposer={(props) => <Composer {...props} placeholder="Ingresa tu mensaje" />}
      renderSend={(props) => <Send {...props} label="Enviar" />}
    />
  );
};
