import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { main } from "../../styles";

export const Profile = ({ navigation }) => {
  return (
    <View style={main.container}>
      <Text>Mi perfil</Text>
      <TouchableOpacity onPress={() => navigation.replace("LogIn")}>
        <Text>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};
