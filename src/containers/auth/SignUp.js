import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import { fireAuth, db } from "../../config/Firebase";
import { logIn } from "../../redux/actions/authActions";
import { main, authStyle } from "../../styles";

export const SignUp = ({ navigation }) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isLoading: false,
  });
  const dispatch = useDispatch();

  const handleSignUp = () => {
    const { email, password, firstName, lastName } = state;
    fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const { uid } = response.user;
        const data = {
          uid,
          email,
          firstName,
          lastName,
        };
        const usersRef = db.collection("users");
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            dispatch(logIn(0, 0, uid));
            navigation.replace("MainTab");
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
            <Text style={authStyle.title}>Registro</Text>
          </View>
          <View style={authStyle.subcontainer}>
            <TextInput
              placeholder="Ingresa tu nombre"
              onChangeText={(text) => setState({ ...state, firstName: text.trim() })}
              value={state.firstName}
              autoCapitalize="none"
              style={main.input}
            />
            <TextInput
              placeholder="Ingresa tu apellido"
              onChangeText={(text) => setState({ ...state, lastName: text.trim() })}
              value={state.lastName}
              autoCapitalize="none"
              style={main.input}
            />
            <TextInput
              placeholder="correo@ejemplo.cl"
              onChangeText={(text) => setState({ ...state, email: text.trim() })}
              value={state.email}
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
            <TouchableOpacity onPress={() => handleSignUp()} style={authStyle.button}>
              <Text style={authStyle.buttonText}>Registrarme</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={authStyle.link}>
          <Text onPress={() => navigation.push("LogIn")} style={authStyle.linkText}>
            ¿Ya tienes cuenta? Inicia sesión
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
