import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { getSurveys } from "../../api/surveys/getSurveys";
import { SurveysList } from "../../components/surveys/SurveysList";
import { main } from "../../styles";

export const SurveyMain = ({ navigation }) => {
  const [surveys, setSurveys] = useState([]);
  useEffect(() => {
    getSurveys().then((res) => setSurveys(res));
  }, []);
  return (
    <View style={main.container}>
      <SurveysList conversations={surveys} navigation={navigation} />
    </View>
  );
};
