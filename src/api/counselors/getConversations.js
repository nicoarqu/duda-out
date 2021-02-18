import { getItemData } from "../forms/getItemData";

export const getConversations = async (uid) => {
  let conversations = [];
  const user = await getItemData("users", uid);
  const conversationIds = user.conversations;

  if (conversationIds.length > 0) {
    conversations = await Promise.all(
      conversationIds.map((id) => getItemData("conversations", id))
    );
  }
  return conversations;
};
