import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { fireAuth } from "../../config/Firebase";
import { logOut } from "../../redux/actions/authActions";
import { main } from "../../styles";

export const Profile = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    fireAuth
      .signOut()
      .then(() => {
        dispatch(logOut());
        navigation.replace("LogIn");
      })
      .catch((error) => alert(error));
  };
  return (
    <View style={main.container}>
      <View style={main.subcontainer}>
        <Text>Mi perfil</Text>
        <View style={main.buttonView}>
          <TouchableOpacity onPress={handleLogout} style={main.button}>
            <Text style={main.buttonText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
