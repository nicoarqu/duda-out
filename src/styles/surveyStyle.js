import { StyleSheet } from "react-native";
import { colors } from "./appStyles";

export const surveyStyle = StyleSheet.create({
  abilityContent: {
    flex: 1,
    paddingBottom: 30,
  },
  abilityLabel: {
    textAlign: "justify",
    color: colors.darkBlue,
    fontSize: 18,
    marginVertical: 4,
    fontFamily: "BitterRegular",
  },
  abilityView: {
    flex: 1,
    maxWidth: 340,
    padding: 20,
  },
  button: {
    backgroundColor: colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 4,
  },
  buttonAdd: {
    alignSelf: "center",
    backgroundColor: colors.gray,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
    fontFamily: "RobotoMedium",
    fontSize: 16,
  },
  buttonView: {
    alignSelf: "center",
    flex: 0.1,
    marginVertical: 10,
    width: "80%",
  },
  form: {
    alignSelf: "center",
    flex: 0.6,
    padding: 20,
    width: "90%",
  },
  formQuiz: {
    padding: 24,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: colors.white,
  },
  formControl: {
    marginHorizontal: 10,
    marginVertical: 6,
    width: "94%",
  },
  formQuestion: {
    marginVertical: 10,
  },
  header: {
    flexDirection: "column",
    alignContent: "center",
  },
  helpText: {
    fontSize: 16,
  },
  textLabel: {
    fontFamily: "BitterRegular",
    fontSize: 16,
    marginBottom: 4,
    textAlign: "left",
  },
  textInputAuth: {
    borderColor: colors.blue,
    borderRadius: 4,
    borderWidth: 2,
    fontFamily: "RobotoRegular",
    includeFontPadding: true,
    marginVertical: 10,
    padding: 3,
    width: "100%",
  },
  textInputForm: {
    borderColor: colors.gray,
    borderWidth: 2,
    borderRadius: 4,
    marginVertical: 4,
    fontFamily: "RobotoRegular",
  },
  textOption: {
    fontFamily: "RobotoRegular",
    fontSize: 14,
    textAlign: "justify",
  },
  textNumber: {
    fontFamily: "RobotoMedium",
    fontSize: 15,
  },
  link: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  radioButtonView: {
    flexDirection: "row",
    alignItems: "center",
  },
  subcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  surveyInfoData: {
    alignContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    marginBottom: 6,
  },
  title: {
    textAlign: "center",
    color: colors.black,
    fontSize: 22,
    marginVertical: 10,
    fontFamily: "BitterRegular",
  },
});
