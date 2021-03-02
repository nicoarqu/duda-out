import React from "react";
import { ScrollView, Text, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { colors, counselorStyle, main } from "../../styles";

export const SurveysList = ({ surveys, navigation }) => {
  return (
    <ScrollView style={main.flexOne}>
      <FlatList
        style={counselorStyle.chatList}
        data={surveys}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem bottomDivider topDivider>
            <AntDesign name="form" size={24} color={colors.blue} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <Entypo name="chevron-right" color="gray" size={24} />
          </ListItem>
        )}
        ListEmptyComponent={<Text>No hay encuestas</Text>}
      />
    </ScrollView>
  );
};
