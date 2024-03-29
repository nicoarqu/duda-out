import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ActivityIndicator, RadioButton } from "react-native-paper";
import { useSelector } from "react-redux";
import { VARKQuestions } from "../../api/forms/constants";
import { getItemData } from "../../api/forms/getItemData";
import { WarningText } from "../../components/shared/WarningText";
import { db } from "../../config/Firebase";
import { main, authStyle, counselorStyle } from "../../styles";

export const VARKTest = ({ navigation }) => {
  const [options, setOptions] = useState({});
  const count = { a: 0, v: 0, r: 0, k: 0 };
  const scores = { a: 0, v: 0, r: 0, k: 0 };
  const [info, setInfo] = useState({ loading: true, main: [] });
  const uid = useSelector((state) => state.auth.currentUserId);

  const [pending, setPending] = useState(
    VARKQuestions.reduce((o, key) => ({ ...o, [key.id]: false }), {})
  );

  useEffect(() => {
    async function fetchData() {
      const introDesc = await getItemData("vark-descriptions", "main");
      setInfo({ loading: false, main: introDesc.intro });
    }
    fetchData();
  }, []);

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

  const checkTest = async () => {
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
      await db.collection("users").doc(uid).update({ VARKresults, hasVARKTest: true });
      const highestAbility = Object.keys(VARKresults).sort(
        (a, b) => VARKresults[b] - VARKresults[a]
      )[0];
      const highestRef = await db.collection("vark").doc("count").get();
      const prevCount = highestRef.data()[highestAbility];
      await db
        .collection("vark")
        .doc("count")
        .update({ [highestAbility]: prevCount + 1 });
      navigation.replace("MainTab");
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={main.flexGrowOne}
      enableOnAndroid
      keyboardShouldPersistTaps="always"
    >
      <View style={[main.container, main.floatingBox]}>
        {info.loading && <ActivityIndicator />}
        {!info.loading &&
          info.main.map((txt, idx) => (
            <Text key={idx} style={counselorStyle.infoText}>
              {txt}
            </Text>
          ))}
        <View style={authStyle.formQuiz}>
          {VARKQuestions.map((q) => {
            return (
              <View style={authStyle.formControl} key={q.id}>
                <Text style={[authStyle.textLabel, main.textJustify]}>
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
                      <Text style={authStyle.textOption}>{opt.text}</Text>
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
