import React, { useCallback, useState } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { getSurveys } from "../../api/surveys/getSurveys";
import { SurveysList } from "../../components/surveys/SurveysList";
import { db } from "../../config/Firebase";
import { main, surveyStyle } from "../../styles";
import { Loading } from "../../components/shared/Loading";

export const PendingSurveys = ({ navigation }) => {
  const [surveys, setSurveys] = useState([]);
  const [state, setState] = useState({ isLoading: true });

  const uid = useSelector((state) => state.auth.currentUserId);

  useFocusEffect(
    useCallback(() => {
      async function fetchData() {
        const allSurveys = await getSurveys();
        const querySnapshot = await db
          .collection("survey-responses")
          .where("studentId", "==", uid)
          .get();
        if (!querySnapshot.empty) {
          const respondedIds = querySnapshot.docs.map((surv) => surv.data().surveyId);
          const pending = allSurveys.filter((surv) => !respondedIds.includes(surv.id));
          setSurveys(pending);
        } else setSurveys(allSurveys);
      }
      fetchData();
      setState((prev) => ({ ...prev, isLoading: false }));
    }, [])
  );

  if (state.isLoading) {
    return <Loading />;
  }

  return (
    <View style={main.container}>
      <SurveysList surveys={surveys} navigation={navigation} />
    </View>
  );
};
