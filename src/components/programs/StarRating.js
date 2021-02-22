import React from "react";
import { View, Text } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { db } from "../../config/Firebase";
import { programStyles } from "../../styles";

export const StarRating = ({
  programId,
  updateProgram,
  rate,
  setRate,
  ratingId,
  setRatingId,
  uid,
}) => {
  const reviews = ["Pésimo", "Malo", "Piola", "Bueno", "Lo mejor!"];

  const finishRating = (rating) => {
    if (ratingId !== "") {
      db.collection("program-ratings")
        .doc(ratingId)
        .update({
          rating,
        })
        .then(updateProgram(rating));
    } else {
      db.collection("program-ratings")
        .add({
          programId,
          rating,
          userId: uid,
        })
        .then((res) => {
          setRatingId(res.id);
          updateProgram(rating);
        });
    }
    setRate(rating);
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
