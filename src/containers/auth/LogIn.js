import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { main } from "../../styles";

export const LogIn = ({ navigation }) => {
  const [state, setState] = useState({
    mail: "",
    password: "",
    isLoading: false,
  });

  const checkLogin = () => {
    navigation.replace("MainTab");
  };

  return (
    <View style={main.container}>
      <Text>Iniciar sesión</Text>
      <View>
        <TextInput
          placeholder="correo@ejemplo.cl"
          onChangeText={(text) => setState({ ...state, mail: text.trim() })}
          value={state.mail}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="contraseña"
          secureTextEntry
          onChangeText={(text) => setState({ ...state, password: text.trim() })}
          value={state.password}
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity onPress={() => checkLogin()}>
        <Text>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};
