import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { main, authStyle } from "../../styles";

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
    <KeyboardAwareScrollView
      contentContainerStyle={main.flexGrowOne}
      enableOnAndroid
      keyboardShouldPersistTaps="always"
    >
      <View style={authStyle.container}>
        <View style={authStyle.form}>
          <View style={authStyle.header}>
            <View>
              <Image
                style={authStyle.logo}
                source={require("../../assets/img/dudaout-logo.jpeg")}
              />
            </View>
            <Text style={authStyle.title}>Iniciar sesión</Text>
          </View>
          <View style={authStyle.subcontainer}>
            <TextInput
              placeholder="correo@ejemplo.cl"
              onChangeText={(text) => setState({ ...state, mail: text.trim() })}
              value={state.mail}
              autoCapitalize="none"
              style={main.input}
            />
            <TextInput
              placeholder="contraseña"
              secureTextEntry
              onChangeText={(text) => setState({ ...state, password: text.trim() })}
              value={state.password}
              autoCapitalize="none"
              style={main.input}
            />
          </View>
          <View style={authStyle.buttonView}>
            <TouchableOpacity onPress={() => checkLogin()} style={authStyle.button}>
              <Text style={authStyle.buttonText}>Ingresar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={authStyle.link}>
          <Text onPress={() => navigation.push("SignUp")} style={authStyle.linkText}>
            ¿No tienes cuenta? Regístrate aquí
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
