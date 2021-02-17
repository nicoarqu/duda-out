import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RadioButton } from "react-native-paper";
import { useSelector } from "react-redux";
import { db } from "../../config/Firebase";
import { main, authStyle } from "../../styles";

export const PersonalInfo = ({ navigation }) => {
  const [university, setUniversity] = useState("");
  const [career, setCareer] = useState("");
  const [universityChoice, setUniversityChoice] = useState("");
  const [livingWith, setLivingWith] = useState("");
  const [isWorking, setIsWorking] = useState("");
  const [grant, setGrant] = useState("");
  const [anticipationDays, setAnticipationDays] = useState("");
  const [studyTime, setStudyTime] = useState("");
  const [studyOption, setStudyOption] = useState("");

  const uid = useSelector((state) => state.auth.currentUserId);

  const handleSubmit = () => {
    db.collection("users")
      .doc(uid)
      .update({
        university,
        universityChoice,
        career,
        livingWith,
        isWorking,
        grant,
        anticipationDays,
        studyTime,
        studyOption,
        hasInfo: true,
      })
      .then(navigation.push("VARKTest"))
      .catch((error) => alert(error));
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={main.flexGrowOne}
      enableOnAndroid
      keyboardShouldPersistTaps="always"
    >
      <View style={[main.container, main.floatingBox]}>
        <View style={authStyle.formQuiz}>
          <Text style={authStyle.title}>Información personal</Text>
          <View style={authStyle.formControl}>
            <Text>Ingresa tu universidad</Text>
            <TextInput
              style={main.textInput}
              placeholder="UAI"
              value={university}
              onChangeText={(text) => setUniversity(text)}
            />
          </View>
          <View style={authStyle.formControl}>
            <Text>¿Por qué elegiste esta universidad?</Text>
            <TextInput
              style={main.textInput}
              multiline
              numberOfLines={3}
              value={universityChoice}
              onChangeText={(text) => setUniversityChoice(text)}
              placeholder="Me gusta porque..."
            />
          </View>
          <View style={authStyle.formControl}>
            <Text>¿Qué carrera estudias?</Text>
            <TextInput
              style={main.textInput}
              placeholder="Tu carrera"
              value={career}
              onChangeText={(text) => setCareer(text)}
            />
          </View>
          <View style={authStyle.formControl}>
            <Text>¿Vives sólo o con tus padres?</Text>
            <RadioButton.Group
              onValueChange={(newValue) => setLivingWith(newValue)}
              value={livingWith}
            >
              <View style={authStyle.radioButtonView}>
                <RadioButton value="Sólo" />
                <Text>Sólo</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="Con los padres" />
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
                <RadioButton value="Sí" />
                <Text>Sí</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="No" />
                <Text>No</Text>
              </View>
            </RadioButton.Group>
          </View>
          <View style={authStyle.formControl}>
            <Text>¿Tienes ayuda externa que te ayude a pagar tus estudios?</Text>
            <RadioButton.Group onValueChange={(newValue) => setGrant(newValue)} value={grant}>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="CAE" />
                <Text>CAE</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="Beca" />
                <Text>Beca</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="Gratuidad" />
                <Text>Gratuidad</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="Otra" />
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
            <TouchableOpacity onPress={handleSubmit} style={authStyle.button}>
              <Text style={authStyle.buttonText}>Ingresar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
