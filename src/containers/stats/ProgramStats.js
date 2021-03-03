import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { ListItem } from "react-native-elements";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { db } from "../../config/Firebase";
import { counselorStyle, main, colors } from "../../styles";

export const ProgramStats = () => {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    db.collection("programs")
      .orderBy("rating", "desc")
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((res) => {
          return { ...res.data(), id: res.id };
        });
        setPrograms(data);
      })
      .catch((error) => alert(error));
  }, []);
  return (
    <ScrollView style={main.flexOne}>
      <FlatList
        style={counselorStyle.chatList}
        data={programs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem bottomDivider topDivider>
            <Ionicons name="school" color={colors.blue} size={24} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>
                <Ionicons name="star" color={colors.starYellow} size={16} />
                <Text>
                  {"  "}
                  {item.rating.toFixed(1)}
                </Text>
              </ListItem.Subtitle>
            </ListItem.Content>
            <Entypo name="chevron-right" color="gray" size={24} />
          </ListItem>
        )}
        ListEmptyComponent={<Text>Cargando programas</Text>}
      />
    </ScrollView>
  );
};
