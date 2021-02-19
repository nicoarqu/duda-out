import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { useSelector } from "react-redux";
import { db } from "../../config/Firebase";
import { programStyles } from "../../styles";

export const StarRating = ({ programId }) => {
  const reviews = ["Pésimo", "Malo", "Piola", "Bueno", "Lo mejor!"];
  const uid = useSelector((state) => state.auth.currentUserId);
  const [ratingId, setRatingId] = useState("");
  const [rate, setRate] = useState(0);

  useEffect(() => {
    db.collection("program-ratings")
      .where("userId", "==", uid)
      .where("programId", "==", programId)
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

  const finishRating = (rating) => {
    console.log(ratingId);
    if (ratingId !== "") {
      db.collection("program-ratings").doc(ratingId).update({
        rating,
      });
    } else {
      db.collection("program-ratings")
        .add({
          programId,
          rating,
          userId: uid,
        })
        .then((res) => setRatingId(res.id));
    }
  };

  return (
    <View style={programStyles.ratingView}>
      <Text style={programStyles.subtitle}>¿Cómo calificas el programa?</Text>
      <AirbnbRating
        reviews={reviews}
        count={5}
        defaultRating={rate}
        size={35}
        onFinishRating={(rating) => finishRating(rating)}
      />
    </View>
  );
};
