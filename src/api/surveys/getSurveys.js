import { db } from "../../config/Firebase";

export const getSurveys = async () => {
  const querySnapshot = await db.collection("surveys").orderBy("createdAt", "desc").get();
  const surveys = await Promise.all(
    querySnapshot.docs.map((doc) => {
      const fbData = doc.data();
      return { id: doc.id, ...fbData };
    })
  );
  return surveys;
};
