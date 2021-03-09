import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ActivityIndicator } from "react-native-paper";
import { useDispatch } from "react-redux";
import { WarningText } from "../../components/shared/WarningText";
import { fireAuth, db } from "../../config/Firebase";
import { logIn } from "../../redux/actions/authActions";
import { main, authStyle } from "../../styles";

const logo = require("../../assets/icon.png");

export const SignUp = ({ navigation }) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isLoading: false,
  });
  const dispatch = useDispatch();

  const [isFirstName, setIsFirstName] = useState(true);
  const [isLastName, setIsLastName] = useState(true);
  const [isMail, setIsMail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);

  const checkMail = () => {
    let valid = true;
    if (!(state.email.trim() && state.email.includes("@"))) {
      setIsMail(false);
      valid = false;
    } else setIsMail(true);
    return valid;
  };
  const checkPassword = () => {
    let valid = true;
    if (!state.password.trim()) {
      setIsPassword(false);
      valid = false;
    } else setIsPassword(true);
    return valid;
  };
  const checkFirstName = () => {
    let valid = true;
    if (!state.firstName.trim()) {
      setIsFirstName(false);
      valid = false;
    } else setIsFirstName(true);
    return valid;
  };
  const checkLastName = () => {
    let valid = true;
    if (!state.lastName.trim()) {
      setIsLastName(false);
      valid = false;
    } else setIsLastName(true);
    return valid;
  };

  const isFormValid = () => {
    let valid = checkMail();
    valid = checkFirstName();
    valid = checkLastName();
    valid = checkPassword();
    return valid;
  };

  const handleSignUp = () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    if (isFormValid()) {
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
            hasInfo: false,
            role: 0,
          };
          const usersRef = db.collection("users");
          usersRef
            .doc(uid)
            .set(data)
            .then(() => {
              dispatch(logIn(`${firstName} ${lastName}`, 0, uid));
              setState((prev) => ({ ...prev, isLoading: false }));
              navigation.replace("PersonalInfo");
            })
            .catch((error) => {
              alert(error);
            });
        })
        .catch((error) => {
          alert(error);
        });
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
            <Text style={authStyle.title}>Registro</Text>
          </View>
          <View style={authStyle.subcontainer}>
            <TextInput
              placeholder="Ingresa tu nombre"
              onChangeText={(text) => setState((prev) => ({ ...prev, firstName: text.trim() }))}
              onBlur={checkFirstName}
              value={state.firstName}
              autoCapitalize="words"
              style={authStyle.textInputAuth}
            />
            {!isFirstName && <WarningText message="Ingresa tu nombre" />}
            <TextInput
              placeholder="Ingresa tu apellido"
              onChangeText={(text) => setState((prev) => ({ ...prev, lastName: text.trim() }))}
              onBlur={checkLastName}
              value={state.lastName}
              autoCapitalize="words"
              style={authStyle.textInputAuth}
            />
            {!isLastName && <WarningText message="Ingresa tu apellido" />}
            <TextInput
              placeholder="correo@ejemplo.cl"
              onChangeText={(text) => setState((prev) => ({ ...prev, email: text.trim() }))}
              onBlur={checkMail}
              value={state.email}
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
            <TouchableOpacity onPress={() => handleSignUp()} style={authStyle.button}>
              {state.isLoading ? (
                <ActivityIndicator />
              ) : (
                <Text style={authStyle.buttonText}>Registrarme</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={authStyle.link}>
          <Text onPress={() => navigation.replace("LogIn")} style={authStyle.linkText}>
            ¿Ya tienes cuenta? Inicia sesión
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
