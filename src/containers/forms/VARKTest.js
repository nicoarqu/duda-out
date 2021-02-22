import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RadioButton, Checkbox } from "react-native-paper";
import { useSelector } from "react-redux";
import { VARKQuestions } from "../../api/forms/constants";
import { WarningText } from "../../components/forms/WarningText";
import { db } from "../../config/Firebase";
import { main, authStyle } from "../../styles";

export const VARKTest = ({ navigation }) => {
  const [options, setOptions] = useState({});
  const count = { a: 0, v: 0, r: 0, k: 0 };
  const scores = { a: 0, v: 0, r: 0, k: 0 };
  const uid = useSelector((state) => state.auth.currentUserId);

  const [pending, setPending] = useState(
    VARKQuestions.reduce((o, key) => ({ ...o, [key.id]: false }), {})
  );

  const isAnswered = () => {
    let res = true;
    Object.keys(pending).forEach((key) => {
      if (!options[key]) {
        setPending((prev) => ({ ...prev, [key]: true }));
        res = false;
      }
    });
    return res;
  };

  const checkTest = () => {
    if (isAnswered()) {
      Object.keys(options).forEach((key) => {
        count[options[key]] += 1;
      });
      Object.keys(count).forEach((key) => {
        scores[key] = Number(((count[key] * 100) / 16).toFixed(2));
      });
      const VARKresults = {
        visual: scores.v,
        aural: scores.a,
        readWrite: scores.r,
        kinesthetic: scores.k,
      };
      db.collection("users")
        .doc(uid)
        .update({ VARKresults, hasVARKTest: true })
        .then(navigation.replace("MainTab"))
        .catch((error) => alert(error));
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={main.flexGrowOne}
      enableOnAndroid
      keyboardShouldPersistTaps="always"
    >
      <View style={[main.container, main.floatingBox]}>
        <Text style={authStyle.title}>Test de Habilidades</Text>
        <View style={authStyle.formQuiz}>
          {VARKQuestions.map((q) => {
            return (
              <View style={authStyle.formControl} key={q.id}>
                <Text>
                  {q.id}) {q.question}
                </Text>
                <RadioButton.Group
                  onValueChange={(val) => {
                    setOptions((prev) => ({ ...prev, [q.id]: val }));
                    setPending((prev) => ({ ...prev, [q.id]: false }));
                  }}
                  key={q.id}
                  value={options[q.id]}
                >
                  {q.options.map((opt) => (
                    <View style={authStyle.radioButtonView} key={opt.id}>
                      <RadioButton value={opt.value} />
                      <Text>{opt.text}</Text>
                    </View>
                  ))}
                </RadioButton.Group>
                {pending[q.id] && <WarningText message="Selecciona una opción" />}
              </View>
            );
          })}
          <View style={authStyle.buttonView}>
            <TouchableOpacity onPress={() => checkTest()} style={authStyle.button}>
              <Text style={authStyle.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
