import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Rating } from "react-native-ratings";
import { db } from "../../config/Firebase";
import { main, surveyStyle } from "../../styles";

export const SurveyInfo = ({ route }) => {
  const { surveyId, title } = route.params;
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await db
        .collection("surveys")
        .doc(surveyId)
        .collection("questions")
        .get();
      if (!querySnapshot.empty) {
        const qstns = await Promise.all(
          querySnapshot.docs.map(async (question) => question.data())
        );
        setQuestions(qstns);
      }
    }
    fetchData();
  }, []);

  return (
    <ScrollView style={[main.container, main.floatingBox]}>
      <Text style={surveyStyle.title}>{title}</Text>
      {questions.map((quest) => (
        <View key={quest.idx} style={surveyStyle.formQuestion}>
          <Text style={surveyStyle.textLabel}>{quest.title}</Text>
          <View style={surveyStyle.surveyInfoData}>
            <Text style={surveyStyle.textNumber}>
              {quest.avgVote} / {quest.maxScore}
            </Text>
            <Text> con {quest.voteCount} votos</Text>
          </View>
          <Rating
            type={quest.type}
            ratingCount={Number(quest.maxScore)}
            startingValue={quest.avgVote}
            imageSize={50}
            readonly
          />
        </View>
      ))}
    </ScrollView>
  );
};
