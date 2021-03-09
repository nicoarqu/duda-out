import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { getSurveys } from "../../api/surveys/getSurveys";
import { SurveysList } from "../../components/surveys/SurveysList";
import { db } from "../../config/Firebase";
import { main } from "../../styles";
import { Loading } from "../../components/shared/Loading";

export const PendingSurveys = ({ navigation }) => {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setTimeout(() => {
        setLoading(false);
      }, 700);
    }, [])
  );

  return (
    <View style={main.container}>
      {loading ? <Loading /> : <SurveysList surveys={surveys} navigation={navigation} />}
    </View>
  );
};
