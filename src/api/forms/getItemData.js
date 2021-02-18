import { db } from "../../config/Firebase";

export const getItemData = async (collectionName, cId) => {
  const item = await db.collection(collectionName).doc(cId).get();
  return item.data();
};
