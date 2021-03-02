import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { getSurveys } from "../../api/surveys/getSurveys";
import { SurveysList } from "../../components/surveys/SurveysList";
import { db } from "../../config/Firebase";
import { main, surveyStyle } from "../../styles";

export const PendingSurveys = ({ navigation }) => {
  const [surveys, setSurveys] = useState([]);

  const uid = useSelector((state) => state.auth.currentUserId);

  useEffect(() => {
    async function fetchData() {
      const allSurveys = await getSurveys();
      const querySnapshot = await db
        .collection("survey-responses")
        .where("studentId", "==", uid)
        .get();
      if (!querySnapshot.empty) {
        const respondedIds = querySnapshot.docs.map((surv) => surv.data().surveyId);
        const pending = allSurveys.filter((surv) => respondedIds.includes(surv.id));
        setSurveys(pending);
      } else setSurveys(allSurveys);
    }
    fetchData();
  }, []);
  return (
    <View style={main.container}>
      <SurveysList surveys={surveys} navigation={navigation} />
    </View>
  );
};
