import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { getCounselors } from "../../api/counselors/getCounselors";
import { getItemData } from "../../api/forms/getItemData";
import { CounselorList } from "../../components/counselors/CounselorList";
import { Loading } from "../../components/shared/Loading";
import { db } from "../../config/Firebase";
import { main, counselorStyle } from "../../styles";
import { fullName } from "../../utils/fullName";

export const CounselorsInfo = ({ navigation }) => {
  const [counselors, setCounselor] = useState([]);
  const [info, setInfo] = useState({ loading: true, main: [] });

  const uid = useSelector((state) => state.auth.currentUserId);

  useEffect(() => {
    async function fetchData() {
      const result = await getCounselors();
      setCounselor(result);
      const counselorDesc = await getItemData("app-text", "counselors");
      setInfo({ loading: false, main: counselorDesc.main });
    }
    fetchData();
  }, []);

  const openChat = async (counselorId) => {
    const querySnapshot = await db
      .collection("conversations")
      .where("studentId", "==", uid)
      .where("counselorId", "==", counselorId)
      .limit(1)
      .get();
    const counselor = await getItemData("users", counselorId);
    if (!querySnapshot.empty) {
      const chat = querySnapshot.docs[0];
      navigation.navigate("Chat", { chatId: chat.id, title: fullName(counselor) });
    } else {
      // create new chat
      const newChat = await db.collection("conversations").add({ counselorId, studentId: uid });
      navigation.navigate("Chat", { chatId: newChat.id, title: fullName(counselor) });
    }
  };
  if (info.loading) {
    return <Loading />;
  }

  return (
    <ScrollView style={main.container}>
      <View style={[main.floatingBox, counselorStyle.counselorInfoVIew]}>
        <Text style={counselorStyle.titleText}>¿Quienes son l@s consejer@s?</Text>
        {!info.loading &&
          info.main.map((txt, idx) => (
            <Text key={idx} style={counselorStyle.infoText}>
              {txt}
            </Text>
          ))}
      </View>
      <CounselorList openChat={openChat} counselors={counselors} />
    </ScrollView>
  );
};
