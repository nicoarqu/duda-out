import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { main, surveyStyle } from "../../styles";
import { db } from "../../config/Firebase";

export const AddSurvey = ({ navigation }) => {
  const [questions, setQuestions] = useState([
    {
      idx: 0,
      title: "",
      type: "",
      maxScore: "",
    },
  ]);
  const [state, setState] = useState({
    surveyTitle: "",
  });

  const saveSurvey = async () => {
    const newSurvey = await db.collection("surveys").add({
      title: state.surveyTitle,
    });
    Promise.all(
      questions.map((q) => {
        return db
          .collection("surveys")
          .doc(newSurvey.id)
          .collection("questions")
          .doc(q.idx.toString())
          .set({ ...q, voteCount: 0, avgVote: 0, maxScore: Number(q.maxScore) });
      })
    );
    navigation.pop();
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={main.flexGrowOne}
      enableOnAndroid
      keyboardShouldPersistTaps="always"
      style={main.container}
    >
      <ScrollView contentContainerStyle={[main.floatingBox, surveyStyle.form]}>
        <TextInput
          placeholder="Título de encuesta"
          value={state.surveyTitle}
          style={surveyStyle.textInputAuth}
          onChangeText={(text) => setState((prev) => ({ ...prev, surveyTitle: text }))}
        />
        {questions.map((q) => {
          const { idx } = q;
          return (
            <View key={idx} style={surveyStyle.formQuestion}>
              <Text style={surveyStyle.textNumber}>{idx + 1})</Text>
              <View style={surveyStyle.formControl}>
                <Text>Pregunta</Text>
                <TextInput
                  placeholder="¿Cómo fue tu semana?"
                  value={questions[idx].title}
                  style={surveyStyle.textInputForm}
                  onChangeText={(text) => {
                    const newState = [...questions];
                    newState[idx].title = text;
                    setQuestions(newState);
                  }}
                />
              </View>
              <View style={surveyStyle.formControl}>
                <Text>Tipo de ícono</Text>
                <Picker
                  selectedValue={questions[idx].type}
                  onValueChange={(itemValue) => {
                    const newState = [...questions];
                    newState[idx].type = itemValue;
                    setQuestions(newState);
                  }}
                >
                  <Picker.Item label="Estrella" value="star" />
                  <Picker.Item label="Corazón" value="heart" />
                  <Picker.Item label="Cohete" value="rocket" />
                  <Picker.Item label="Campana" value="bell" />
                </Picker>
              </View>
              <View style={surveyStyle.formControl}>
                <Text>Escala</Text>
                <Picker
                  selectedValue={questions[idx].maxScore}
                  onValueChange={(itemValue) => {
                    const newState = [...questions];
                    newState[idx].maxScore = itemValue;
                    setQuestions(newState);
                  }}
                >
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                  <Picker.Item label="6" value="6" />
                  <Picker.Item label="7" value="7" />
                  <Picker.Item label="8" value="8" />
                </Picker>
              </View>
            </View>
          );
        })}
        <View style={main.buttonView}>
          <TouchableOpacity
            onPress={() =>
              setQuestions((prev) => [
                ...prev,
                { idx: prev.length, title: "", type: "", maxScore: "" },
              ])
            }
            style={surveyStyle.buttonAdd}
          >
            <Text style={surveyStyle.buttonText}>Agregar pregunta</Text>
          </TouchableOpacity>
        </View>
        <View style={main.buttonView}>
          <TouchableOpacity onPress={() => saveSurvey()} style={main.button}>
            <Text style={main.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};
