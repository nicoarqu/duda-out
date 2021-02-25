import { db } from "../../config/Firebase";

export const getCounselors = async () => {
  const querySnapshot = await db.collection("users").where("role", "==", 1).get();
  const counselors = await Promise.all(querySnapshot.docs.map((cslr) => cslr.data()));
  return counselors;
};
