import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import { ActivityIndicator } from "react-native-paper";
import { WarningText } from "../../components/shared/WarningText";
import { db, fireAuth } from "../../config/Firebase";
import { logIn } from "../../redux/actions/authActions";
import { fullName } from "../../utils/fullName";
import { main, authStyle } from "../../styles";

const logo = require("../../assets/icon.png");

export const LogIn = ({ navigation }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    isLoading: false,
  });
  const dispatch = useDispatch();

  const [isMail, setIsMail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);

  const checkMail = () => {
    let valid = true;
    if (!(state.email.trim() && state.email.includes("@"))) {
      valid = false;
    }
    setIsMail(valid);
    return valid;
  };
  const checkPassword = () => {
    let valid = true;
    if (!state.password.trim()) valid = false;
    setIsPassword(valid);
    return valid;
  };

  const isFormValid = () => {
    let valid = checkMail();
    valid = checkPassword();
    return valid;
  };

  const checkLogin = () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    if (isFormValid()) {
      const { email, password } = state;
      fireAuth
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
                const username = fullName(user);
                dispatch(logIn(username, user.role, user.uid));
                setState((prev) => ({ ...prev, isLoading: true }));
                if (user.hasInfo && user.hasVARKTest) navigation.replace("MainTab");
                else if (!user.hasInfo) navigation.replace("PersonalInfo");
                else navigation.replace("VARKTest");
              } else {
                alert("Usuario ya no existe");
              }
            })
            .catch((error) => alert(error));
        })
        .catch((error) => alert(error));
    }
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
              <Image style={authStyle.logo} source={logo} />
            </View>
            <Text style={authStyle.title}>Iniciar sesión</Text>
          </View>
          <View style={authStyle.subcontainer}>
            <TextInput
              placeholder="correo@ejemplo.cl"
              onChangeText={(text) => setState((prev) => ({ ...prev, email: text.trim() }))}
              onBlur={checkMail}
              value={state.mail}
              autoCapitalize="none"
              style={authStyle.textInputAuth}
            />
            {!isMail && <WarningText message="Ingresa tu correo" />}
            <TextInput
              placeholder="contraseña"
              secureTextEntry
              onChangeText={(text) => setState((prev) => ({ ...prev, password: text.trim() }))}
              onBlur={checkPassword}
              value={state.password}
              autoCapitalize="none"
              style={authStyle.textInputAuth}
            />
            {!isPassword && <WarningText message="Ingresa una contraseña" />}
          </View>
          <View style={authStyle.buttonView}>
            <TouchableOpacity onPress={() => checkLogin()} style={authStyle.button}>
              {state.isLoading ? (
                <ActivityIndicator />
              ) : (
                <Text style={authStyle.buttonText}>Ingresar</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={authStyle.link}>
          <Text onPress={() => navigation.replace("SignUp")} style={authStyle.linkText}>
            ¿No tienes cuenta? Regístrate aquí
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
