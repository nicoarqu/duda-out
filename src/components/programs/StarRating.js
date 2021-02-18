import React from "react";
import { View } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";

export const StarRating = () => {
  return (
    <View>
      <Rating ratingCount={5} type="star" />
      <AirbnbRating reviews={["Pésimo", "Malo", "Piola", "Bueno"]} count={4} />
    </View>
  );
};
