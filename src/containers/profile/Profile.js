import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { main } from "../../styles";

export const Profile = ({ navigation }) => {
  return (
    <View style={main.container}>
      <View style={main.subcontainer}>
        <Text>Mi perfil</Text>
        <View style={main.buttonView}>
          <TouchableOpacity onPress={() => navigation.replace("LogIn")} style={main.button}>
            <Text style={main.buttonText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
