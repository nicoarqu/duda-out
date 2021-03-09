import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useSelector } from "react-redux";
import { getItemData } from "../../api/forms/getItemData";
import { counselorStyle, main } from "../../styles";

export const EmptyChats = () => {
  const [info, setInfo] = useState({ loading: true, main: [] });
  const role = useSelector((state) => state.auth.currentUserRole);

  useEffect(() => {
    async function fetchData() {
      const counselorDesc = await getItemData("app-text", "counselors");
      setInfo({ loading: false, main: counselorDesc.main });
    }
    fetchData();
  }, []);

  if (role === 1) {
    return <Text style={main.textInfo}>No tienes conversaciones</Text>;
  }

  return (
    <View style={[main.floatingBox, counselorStyle.counselorInfoVIew]}>
      <Text style={counselorStyle.titleText}>¿Quienes son l@s consejer@s?</Text>
      {info.loading && <ActivityIndicator />}
      {!info.loading &&
        info.main.map((txt, idx) => (
          <Text key={idx} style={counselorStyle.infoText}>
            {txt}
          </Text>
        ))}
    </View>
  );
};
