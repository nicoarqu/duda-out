import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RadioButton, Checkbox } from "react-native-paper";
import { VARKQuestions } from "../../api/forms/constants";
import { main, authStyle } from "../../styles";

export const VARKTest = ({ navigation }) => {
  const [options, setOptions] = useState({});
  const count = { a: 0, v: 0, r: 0, k: 0 };

  const checkTest = () => {
    Object.keys(options).forEach((key) => {
      count[options[key]] += 1;
    });
    console.log(count);
    // navigation.push("PersonalInfo");
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={main.flexGrowOne}
      enableOnAndroid
      keyboardShouldPersistTaps="always"
    >
      <View style={[main.container, main.floatingBox]}>
        <View style={authStyle.formQuiz}>
          {VARKQuestions.map((q) => {
            return (
              <View style={authStyle.formControl}>
                <Text>{q.question}</Text>
                <RadioButton.Group
                  onValueChange={(val) => {
                    setOptions((prev) => ({ ...prev, [q.id]: val }));
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
