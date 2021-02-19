import { db } from "../../config/Firebase";

export const getItemData = async (collectionName, cId) => {
  const item = await db.collection(collectionName).doc(cId).get();
  const data = item.data();
  data.id = item.id;
  return data;
};
