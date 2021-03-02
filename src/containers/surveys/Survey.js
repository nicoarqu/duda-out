import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import { Rating } from "react-native-ratings";
import { getItemData } from "../../api/forms/getItemData";
import { StarRating, Title } from "../../components/programs";
import { db } from "../../config/Firebase";
import { main, surveyStyle } from "../../styles";

export const Survey = ({ route }) => {
  const [survey, setSurvey] = useState(route.params.survey);
  const [rate, setRate] = useState(0);
  const [ratingId, setRatingId] = useState("");
  const uid = useSelector((state) => state.auth.currentUserId);

  useEffect(() => {
    db.collection("program-ratings")
      .where("userId", "==", uid)
      .where("programId", "==", survey.id)
      .limit(1)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const snapshot = querySnapshot.docs[0];
          setRatingId(snapshot.id);
          setRate(snapshot.data().rating);
        }
        return null;
      });
  }, []);

  const updateSurvey = (rating) => {
    const oldRate = rate;
    // get average ratings and update program in db and state
    getItemData("programs", survey.id).then((pg) => {
      const count = oldRate ? 0 : 1;
      const newNumRatings = pg.numRatings + count;
      const oldRatingTotal = pg.rating * pg.numRatings;
      const newRating = (oldRatingTotal - oldRate + rating) / newNumRatings;
      db.collection("surveys")
        .doc(survey.id)
        .update({ rating: newRating, numRatings: newNumRatings })
        .then(setSurvey({ ...pg, rating: newRating }));
    });
  };

  return (
    <View style={[main.container, main.floatingBox]}>
      <Title survey={survey} />
      <StarRating
        surveyId={survey.id}
        updatesurvey={(rating) => updateSurvey(rating)}
        rate={rate}
        setRate={setRate}
        ratingId={ratingId}
        setRatingId={setRatingId}
        uid={uid}
      />
      <Rating type="heart" ratingCount={5} imageSize={50} showRating={false} />
      <Rating type="rocket" ratingCount={5} imageSize={50} showRating />
      <View style={surveyStyle.descView}>
        <Text style={surveyStyle.infoText}>{survey.desc}</Text>
      </View>
    </View>
  );
};
