import React from "react";
import { ScrollView, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { colors, counselorStyle, main } from "../../styles";
import { EmptyChats } from "./EmptyChats";

export const ChatList = ({ conversations, navigation, loading }) => {
  if (!loading && conversations.length === 0) {
    return <EmptyChats />;
  }
  return (
    <ScrollView style={main.flexOne}>
      <FlatList
        style={counselorStyle.chatList}
        data={conversations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            bottomDivider
            topDivider
            onPress={() => navigation.navigate("Chat", { chatId: item.id, title: item.otherName })}
          >
            <FontAwesome5 name="user-graduate" color={colors.blue} size={24} />
            <ListItem.Content>
              <ListItem.Title>{item.otherName}</ListItem.Title>
            </ListItem.Content>
            <Entypo name="chevron-right" color="gray" size={24} />
          </ListItem>
        )}
      />
    </ScrollView>
  );
};
