import React from "react";
import { View, Text, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { colors, counselorStyle, main } from "../../styles";
import { fullName } from "../../utils/fullName";

export const CounselorList = ({ counselors, openChat }) => {
  return (
    <View style={[main.floatingBox, counselorStyle.counselorInfoVIew]}>
      <Text style={counselorStyle.titleText}>Resuelve tus dudas</Text>
      <Text>Habla con nosotr@s</Text>
      <FlatList
        data={counselors}
        style={counselorStyle.chatList}
        keyExtractor={(item) => item.counselorId}
        renderItem={({ item }) => (
          <View>
            <ListItem bottomDivider topDivider onPress={() => openChat(item.uid)}>
              <FontAwesome5 name="user-graduate" color={colors.blue} size={24} />
              <ListItem.Content>
                <ListItem.Title>
                  <Text>{fullName(item)}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>{item.desc}</ListItem.Subtitle>
              </ListItem.Content>
              <Entypo name="chevron-right" color="gray" size={24} />
            </ListItem>
          </View>
        )}
      />
    </View>
  );
};
