import React, { useCallback, useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import { getSurveys } from "../../api/surveys/getSurveys";
import { SurveysList } from "../../components/surveys/SurveysList";
import { main, surveyStyle } from "../../styles";
import { Loading } from "../../components/shared/Loading";

export const SurveyMain = ({ navigation }) => {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      getSurveys().then((res) => {
        setSurveys(res);
        setLoading(false);
      });
    }, [])
  );
  return (
    <View style={main.container}>
      {loading ? <Loading /> : <SurveysList surveys={surveys} navigation={navigation} />}
      <View style={surveyStyle.buttonView}>
        <TouchableOpacity onPress={() => navigation.push("AddSurvey")} style={main.button}>
          <Text style={main.buttonText}>Crear encuesta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
