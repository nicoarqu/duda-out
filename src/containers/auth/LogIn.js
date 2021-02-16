import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { db, Firebase } from "../../config/Firebase";
import { main, authStyle } from "../../styles";

export const LogIn = ({ navigation }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    isLoading: false,
  });

  const checkLogin = () => {
    const { email, password } = state;
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        const { uid } = res.user;
        const usersRef = db.collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((document) => {
            if (document.exists) {
              const user = document.data();
              navigation.replace("MainTab");
            } else {
              alert("Usuario ya no existe");
            }
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
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
              onChangeText={(text) => setState({ ...state, email: text.trim() })}
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
