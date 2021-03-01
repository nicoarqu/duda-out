import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getSurveys } from "../../api/surveys/getSurveys";
import { SurveysList } from "../../components/surveys/SurveysList";
import { main, surveyStyle } from "../../styles";

export const SurveyMain = ({ navigation }) => {
  const [surveys, setSurveys] = useState([]);
  useEffect(() => {
    getSurveys().then((res) => setSurveys(res));
  }, []);
  return (
    <View style={main.container}>
      <SurveysList surveys={surveys} navigation={navigation} />
      <View style={surveyStyle.buttonView}>
        <TouchableOpacity onPress={() => navigation.push("AddSurvey")} style={main.button}>
          <Text style={main.buttonText}>Crear encuesta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
