import React from "react";
import { View, Text, Modal, Pressable } from "react-native";
import { authStyle, main } from "../../styles";

export const PersonalInfoBanner = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <View style={main.subcontainer}>
        <View style={authStyle.modalView}>
          <Text style={authStyle.modalText}>
            Hola! Bienvenido/a a DudaOut, una app para que organices tu estudio.
          </Text>
          <Text style={authStyle.modalText}>
            Antes de iniciar, te pedimos que nos cuentes un poco más de ti para determinar la mejor
            forma de ayudarte.
          </Text>
          <Pressable style={authStyle.button} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={authStyle.buttonText}>Ok</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
