import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RadioButton } from "react-native-paper";
import { main, authStyle } from "../../styles";

export const PersonalInfo = ({ navigation }) => {
  const [livingWith, setLivingWith] = useState("");
  const [isWorking, setIsWorking] = useState("");
  const [grant, setGrant] = useState("");
  const [anticipationDays, setAnticipationDays] = useState("");
  const [studyTime, setStudyTime] = useState("");
  const [studyOption, setStudyOption] = useState("");

  const checkInfo = () => {
    navigation.push("Profile");
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={main.flexGrowOne}
      enableOnAndroid
      keyboardShouldPersistTaps="always"
    >
      <View style={[main.container, main.floatingBox]}>
        <View style={authStyle.formQuiz}>
          <View style={authStyle.formControl}>
            <TextInput style={main.textInput} placeholder="Ingresa tu Universidad" />
          </View>
          <View style={authStyle.formControl}>
            <TextInput
              style={main.textInput}
              multiline
              numberOfLines={3}
              placeholder="¿Por qué elegiste esta universidad?"
            />
          </View>
          <View style={authStyle.formControl}>
            <TextInput style={main.textInput} placeholder="Carrera que estudias" />
          </View>
          <View style={authStyle.formControl}>
            <Text>¿Vives sólo o con tus padres?</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setLivingWith(newValue)}
              value={livingWith}
            >
              <View style={authStyle.radioButtonView}>
                <RadioButton value="solo" />
                <Text>Sólo</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="padres" />
                <Text>Con tus padres</Text>
              </View>
            </RadioButton.Group>
          </View>
          <View style={authStyle.formControl}>
            <Text>¿Tienes algún trabajo recurrente?</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setIsWorking(newValue)}
              value={isWorking}
            >
              <View style={authStyle.radioButtonView}>
                <RadioButton value="si" />
                <Text>Sí</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="no" />
                <Text>No</Text>
              </View>
            </RadioButton.Group>
          </View>
          <View style={authStyle.formControl}>
            <Text>¿Tienes ayuda externa que te ayude a pagar tus estudios?</Text>
            <RadioButton.Group onValueChange={(newValue) => setGrant(newValue)} value={grant}>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="cae" />
                <Text>CAE</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="beca" />
                <Text>Beca</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="gratuidad" />
                <Text>Gratuidad</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="otra" />
                <Text>Otra</Text>
              </View>
            </RadioButton.Group>
          </View>
          <View style={authStyle.formControl}>
            <Text>¿Con cuántos días de anticipación te gustaría preparar tus evaluaciones?</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setAnticipationDays(newValue)}
              value={anticipationDays}
            >
              <View style={authStyle.radioButtonView}>
                <RadioButton value="De 1-3 días de anticipación" />
                <Text>De 1-3 días de anticipación</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="De 3-5 días de anticipación" />
                <Text>De 3-5 días de anticipación</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="5 o más días de anticipación" />
                <Text>5 o más días de anticipación</Text>
              </View>
            </RadioButton.Group>
          </View>
          <View style={authStyle.formControl}>
            <Text>¿Cual horario es el que más te acomoda estudiar?</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setStudyTime(newValue)}
              value={studyTime}
            >
              <View style={authStyle.radioButtonView}>
                <RadioButton value="9:00 - 12:00" />
                <Text>9:00 - 12:00</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="14:00 - 17:00" />
                <Text>14:00 - 17:00</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="18:00 - 21:00" />
                <Text>18:00 - 21:00</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="22:00 - 00:00" />
                <Text>22:00 - 00:00</Text>
              </View>
            </RadioButton.Group>
          </View>
          <View style={authStyle.formControl}>
            <Text>¿Prefieres tener?</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setStudyOption(newValue)}
              value={studyOption}
            >
              <View style={authStyle.radioButtonView}>
                <RadioButton value="Horas seguidas de estudio" />
                <Text>Horas seguidas de estudio</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="Tiempos cortos de estudio" />
                <Text>Tiempos cortos de estudio</Text>
              </View>
            </RadioButton.Group>
          </View>
          <View style={authStyle.buttonView}>
            <TouchableOpacity onPress={() => checkInfo()} style={authStyle.button}>
              <Text style={authStyle.buttonText}>Ingresar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
