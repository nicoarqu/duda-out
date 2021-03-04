import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getItemData } from "../../api/forms/getItemData";
import { StarRating, Title } from "../../components/programs";
import { db } from "../../config/Firebase";
import { main, programStyles } from "../../styles";

export const ProgramInfo = ({ route }) => {
  const [program, setProgram] = useState(route.params.program);
  const [rate, setRate] = useState(0);
  const [ratingId, setRatingId] = useState("");
  const uid = useSelector((state) => state.auth.currentUserId);

  useEffect(() => {
    getItemData("programs", program.id).then((res) => setProgram(res));
    db.collection("program-ratings")
      .where("userId", "==", uid)
      .where("programId", "==", program.id)
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

  const updateProgram = (rating) => {
    const oldRate = rate;
    // get average ratings and update program in db and state
    getItemData("programs", program.id).then((pg) => {
      const count = oldRate ? 0 : 1;
      const newNumRatings = pg.numRatings + count;
      const oldRatingTotal = pg.rating * pg.numRatings;
      const newRating = (oldRatingTotal - oldRate + rating) / newNumRatings;
      db.collection("programs")
        .doc(program.id)
        .update({ rating: newRating, numRatings: newNumRatings })
        .then(setProgram({ ...pg, rating: newRating }));
    });
  };

  return (
    <ScrollView style={[main.container, main.floatingBox]}>
      <View style={programStyles.programView}>
        <Title program={program} />
        <StarRating
          programId={program.id}
          updateProgram={(rating) => updateProgram(rating)}
          rate={rate}
          setRate={setRate}
          ratingId={ratingId}
          setRatingId={setRatingId}
          uid={uid}
        />
        <View style={programStyles.descView}>
          {program.description &&
            program.description.map((des, idx) => (
              <Text style={programStyles.infoText} key={idx}>
                {des}
              </Text>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};
