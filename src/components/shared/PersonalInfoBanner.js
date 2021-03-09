import React, { useEffect, useState } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import { getItemData } from "../../api/forms/getItemData";
import { authStyle, main } from "../../styles";

export const PersonalInfoBanner = ({ modalVisible, setModalVisible }) => {
  const [info, setInfo] = useState({ loading: true, modal: [] });

  useEffect(() => {
    async function fetchData() {
      const introDesc = await getItemData("app-text", "intro");
      setInfo({ loading: false, modal: introDesc.modal });
      setModalVisible(true);
    }
    fetchData();
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <View style={main.subcontainer}>
        <View style={authStyle.modalView}>
          {info.modal.map((txt, idx) => (
            <Text key={idx} style={authStyle.modalText}>
              {txt}
            </Text>
          ))}
          <Pressable style={authStyle.button} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={authStyle.buttonText}>Ok</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
