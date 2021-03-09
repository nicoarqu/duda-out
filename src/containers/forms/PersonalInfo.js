import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RadioButton } from "react-native-paper";
import { useSelector } from "react-redux";
import { PersonalInfoBanner } from "../../components/shared/PersonalInfoBanner";
import { WarningText } from "../../components/shared/WarningText";
import { db } from "../../config/Firebase";
import { main, authStyle } from "../../styles";

export const PersonalInfo = ({ navigation }) => {
  const [university, setUniversity] = useState("");
  const [career, setCareer] = useState("Ingeniería Comercial");
  const [universityChoice, setUniversityChoice] = useState("");
  const [livingWith, setLivingWith] = useState("");
  const [isWorking, setIsWorking] = useState("");
  const [grant, setGrant] = useState("");
  const [grantOther, setGrantOther] = useState("-");
  const [anticipationDays, setAnticipationDays] = useState("");
  const [studyTime, setStudyTime] = useState("");
  const [studyOption, setStudyOption] = useState("");

  const [universityError, setUniversityError] = useState(false);
  const [careerError, setCareerError] = useState(false);
  const [universityChoiceError, setUniversityChoiceError] = useState(false);
  const [livingWithError, setLivingWithError] = useState(false);
  const [isWorkingError, setIsWorkingError] = useState(false);
  const [grantError, setGrantError] = useState(false);
  const [anticipationDaysError, setAnticipationDaysError] = useState(false);
  const [studyTimeError, setStudyTimeError] = useState(false);
  const [studyOptionError, setStudyOptionError] = useState(false);

  const uid = useSelector((state) => state.auth.currentUserId);
  const [modalVisible, setModalVisible] = useState(false);

  const checkForm = () => {
    if (!university.trim()) setUniversityError(true);
    else setUniversityError(false);
    if (!universityChoice.trim()) setUniversityChoiceError(true);
    else setUniversityChoiceError(false);
    if (!career.trim()) setCareerError(true);
    else setCareerError(false);
    if (!livingWith.trim()) setLivingWithError(true);
    else setLivingWithError(false);
    if (!isWorking.trim()) setIsWorkingError(true);
    else setIsWorkingError(false);
    if (!grant.trim() || !grantOther.trim()) setGrantError(true);
    else setGrantError(false);
    if (!anticipationDays.trim()) setAnticipationDaysError(true);
    else setAnticipationDaysError(false);
    if (!studyTime.trim()) setStudyTimeError(true);
    else setStudyTimeError(false);
    if (!studyOption.trim()) setStudyOptionError(true);
    else setStudyOptionError(false);
    return (
      university.trim() &&
      universityChoice.trim() &&
      career.trim() &&
      livingWith.trim() &&
      isWorking.trim() &&
      grant.trim() &&
      grantOther.trim() &&
      anticipationDays.trim() &&
      studyTime.trim() &&
      studyOption.trim()
    );
  };

  const handleSubmit = async () => {
    if (checkForm()) {
      let grantVal = grant;
      if (grant === "Otra") {
        grantVal = grantOther;
      }
      await db.collection("users").doc(uid).update({
        university,
        universityChoice,
        career,
        livingWith,
        isWorking,
        grant: grantVal,
        anticipationDays,
        studyTime,
        studyOption,
        hasInfo: true,
      });
      navigation.replace("VARKTest");
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={main.flexGrowOne}
      enableOnAndroid
      keyboardShouldPersistTaps="never"
    >
      <PersonalInfoBanner modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <View style={[main.container, main.floatingBox]}>
        <View style={authStyle.formQuiz}>
          <View style={authStyle.formControl}>
            <Text style={authStyle.textLabel}>Ingresa tu universidad</Text>
            <TextInput
              style={main.textInput}
              placeholder="UAI"
              value={university}
              onChangeText={(text) => setUniversity(text)}
              onBlur={() =>
                !university.trim() ? setUniversityError(true) : setUniversityError(false)
              }
            />
            {universityError && <WarningText message="Ingresa tu universidad" />}
          </View>
          <View style={authStyle.formControl}>
            <Text style={authStyle.textLabel}>¿Por qué elegiste esta universidad?</Text>
            <TextInput
              style={main.textInput}
              multiline
              numberOfLines={3}
              value={universityChoice}
              onChangeText={(text) => setUniversityChoice(text)}
              placeholder="Me gusta porque..."
              onEndEditing={() =>
                !universityChoice.trim()
                  ? setUniversityChoiceError(true)
                  : setUniversityChoiceError(false)
              }
            />
            {universityChoiceError && <WarningText message="Ingresa tus motivos" />}
          </View>
          <View style={authStyle.formControl}>
            <Text style={authStyle.textLabel}>¿Qué carrera estudias?</Text>
            <Picker
              selectedValue={career}
              onValueChange={(text) => {
                setCareer(text);
                setCareerError(false);
              }}
            >
              <Picker.Item label="Ingeniería Comercial" value="Ingeniería Comercial" />
              <Picker.Item label="Ingeniería Civil" value="Ingeniería Civil" />
            </Picker>
            {careerError && <WarningText message="Ingresa tu carrera" />}
          </View>
          <View style={authStyle.formControl}>
            <Text style={authStyle.textLabel}>¿Vives sólo o con tus padres?</Text>
            <RadioButton.Group
              onValueChange={(newValue) => {
                setLivingWith(newValue);
                setLivingWithError(false);
              }}
              value={livingWith}
            >
              <View style={authStyle.radioButtonView}>
                <RadioButton value="Sólo" />
                <Text style={authStyle.textOption}>Sólo</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="Con los padres" />
                <Text style={authStyle.textOption}>Con tus padres</Text>
              </View>
            </RadioButton.Group>
            {livingWithError && <WarningText message="Selecciona una opción" />}
          </View>
          <View style={authStyle.formControl}>
            <Text style={authStyle.textLabel}>¿Tienes algún trabajo recurrente?</Text>
            <RadioButton.Group
              onValueChange={(newValue) => {
                setIsWorking(newValue);
                setIsWorkingError(false);
              }}
              value={isWorking}
            >
              <View style={authStyle.radioButtonView}>
                <RadioButton value="Sí" />
                <Text style={authStyle.textOption}>Sí</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="No" />
                <Text style={authStyle.textOption}>No</Text>
              </View>
            </RadioButton.Group>
            {isWorkingError && <WarningText message="Selecciona una opción" />}
          </View>
          <View style={authStyle.formControl}>
            <Text style={authStyle.textLabel}>
              ¿Tienes ayuda externa que te ayude a pagar tus estudios?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => {
                setGrant(newValue);
                setGrantError(false);
              }}
              value={grant}
            >
              <View style={authStyle.radioButtonView}>
                <RadioButton value="CAE" />
                <Text style={authStyle.textOption}>CAE</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="Beca" />
                <Text style={authStyle.textOption}>Beca</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="Gratuidad" />
                <Text style={authStyle.textOption}>Gratuidad</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="Ninguna" />
                <Text style={authStyle.textOption}>Ninguna</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="Otra" />
                {grant !== "Otra" ? (
                  <Text style={authStyle.textOption}>Otra</Text>
                ) : (
                  <TextInput
                    style={authStyle.textInputPersonal}
                    placeholder="Otra ayuda"
                    onChangeText={(newValue) => {
                      setGrantOther(newValue);
                      setGrantError(false);
                    }}
                  />
                )}
              </View>
            </RadioButton.Group>
            {grantError && <WarningText message="Selecciona una opción" />}
          </View>
          <View style={authStyle.formControl}>
            <Text style={authStyle.textLabel}>
              ¿Con cuántos días de anticipación te gusta preparar tus evaluaciones?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => {
                setAnticipationDays(newValue);
                setAnticipationDaysError(false);
              }}
              value={anticipationDays}
            >
              <View style={authStyle.radioButtonView}>
                <RadioButton value="De 1-3 días de anticipación" />
                <Text style={authStyle.textOption}>De 1-3 días de anticipación</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="De 3-5 días de anticipación" />
                <Text style={authStyle.textOption}>De 3-5 días de anticipación</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="5 o más días de anticipación" />
                <Text style={authStyle.textOption}>5 o más días de anticipación</Text>
              </View>
            </RadioButton.Group>
            {anticipationDaysError && <WarningText message="Selecciona una opción" />}
          </View>
          <View style={authStyle.formControl}>
            <Text style={authStyle.textLabel}>
              ¿Cual horario es el que más te acomoda estudiar?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => {
                setStudyTime(newValue);
                setStudyTimeError(false);
              }}
              value={studyTime}
            >
              <View style={authStyle.radioButtonView}>
                <RadioButton value="9:00 - 12:00" />
                <Text style={authStyle.textOption}>9:00 - 12:00</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="14:00 - 17:00" />
                <Text style={authStyle.textOption}>14:00 - 17:00</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="18:00 - 21:00" />
                <Text style={authStyle.textOption}>18:00 - 21:00</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="22:00 - 00:00" />
                <Text style={authStyle.textOption}>22:00 - 00:00</Text>
              </View>
            </RadioButton.Group>
            {studyTimeError && <WarningText message="Selecciona una opción" />}
          </View>
          <View style={authStyle.formControl}>
            <Text style={authStyle.textLabel}>¿Prefieres tener?</Text>
            <RadioButton.Group
              onValueChange={(newValue) => {
                setStudyOption(newValue);
                setStudyOptionError(false);
              }}
              value={studyOption}
            >
              <View style={authStyle.radioButtonView}>
                <RadioButton value="Horas seguidas de estudio" />
                <Text style={authStyle.textOption}>Horas seguidas de estudio</Text>
              </View>
              <View style={authStyle.radioButtonView}>
                <RadioButton value="Tiempos cortos de estudio" />
                <Text style={authStyle.textOption}>Tiempos cortos de estudio</Text>
              </View>
            </RadioButton.Group>
            {studyOptionError && <WarningText message="Selecciona una opción" />}
          </View>
          <View style={authStyle.buttonView}>
            <TouchableOpacity onPress={handleSubmit} style={authStyle.button}>
              <Text style={authStyle.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
