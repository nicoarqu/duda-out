import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
    <View style={main.container}>
      <TextInput
        placeholder="Título de encuesta"
        value={state.surveyTitle}
        onChangeText={(text) => setState((prev) => ({ ...prev, surveyTitle: text }))}
      />
      <ScrollView style={[main.floatingBox, surveyStyle.form]}>
        {questions.map((q) => {
          const { idx } = q;
          return (
            <View key={idx}>
              <Text>{idx + 1})</Text>
              <TextInput
                placeholder="Pregunta"
                value={questions[idx].title}
                onChangeText={(text) => {
                  const newState = [...questions];
                  newState[idx].title = text;
                  setQuestions(newState);
                }}
              />
              <TextInput
                placeholder="Tipo"
                value={questions[idx].type}
                onChangeText={(text) => {
                  const newState = [...questions];
                  newState[idx].type = text;
                  setQuestions(newState);
                }}
              />
              <TextInput
                placeholder="Puntaje"
                value={questions[idx].maxScore}
                onChangeText={(text) => {
                  const newState = [...questions];
                  newState[idx].maxScore = text;
                  setQuestions(newState);
                }}
              />
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
            style={main.button}
          >
            <Text style={main.buttonText}>Agregar pregunta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={main.buttonView}>
        <TouchableOpacity onPress={() => saveSurvey()} style={main.button}>
          <Text style={main.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
