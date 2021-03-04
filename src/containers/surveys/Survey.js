import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import { Rating } from "react-native-ratings";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db } from "../../config/Firebase";
import { main, surveyStyle } from "../../styles";

export const Survey = ({ route, navigation }) => {
  const { surveyId, title } = route.params;
  const [answer, setAnswer] = useState([]);
  const [questions, setQuestions] = useState([]);
  const uid = useSelector((state) => state.auth.currentUserId);

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
        const res = qstns.map((q) => ({ idx: q.idx, title: q.title, score: 0 }));
        setAnswer(res);
        setQuestions(qstns);
      }
    }
    fetchData();
  }, []);

  const updateSurvey = (rating) => {
    const { idx } = rating.params;
    const newAnswer = [...answer];
    newAnswer[idx].score = rating.rating;
    setAnswer(newAnswer);
  };

  const sendSurvey = async () => {
    const newResponse = await db.collection("survey-responses").add({ surveyId, studentId: uid });
    answer.map(async (ans) => {
      await db.collection("survey-responses").doc(newResponse.id).collection("answers").add(ans);
      const questionRef = await db
        .collection("surveys")
        .doc(surveyId)
        .collection("questions")
        .doc(ans.idx.toString())
        .get();
      const { avgVote, voteCount } = questionRef.data();
      const newCount = voteCount + 1;
      const newAvg = (avgVote * voteCount + Number(ans.score)) / newCount;
      await db
        .collection("surveys")
        .doc(surveyId)
        .collection("questions")
        .doc(questionRef.id)
        .update({
          avgVote: newAvg,
          voteCount: newCount,
        });
    });
    navigation.pop();
  };

  return (
    <View style={[main.container, main.floatingBox]}>
      <Text style={surveyStyle.title}>{title}</Text>
      {questions.map((quest) => (
        <View key={quest.idx}>
          <Text>{quest.title}</Text>
          <Rating
            type={quest.type}
            ratingCount={quest.maxScore}
            startingValue={answer[quest.idx] ? answer[quest.idx].score : 0}
            imageSize={40}
            showRating
            onFinishRating={(rating) => updateSurvey({ rating, params: { idx: quest.idx } })}
            setAnswer={setAnswer}
            answer={answer}
          />
        </View>
      ))}
      <View style={main.buttonView}>
        <TouchableOpacity onPress={() => sendSurvey()} style={main.button}>
          <Text style={main.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
