import { StyleSheet } from "react-native";
import { colors } from "./appStyles";

export const authStyle = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 4,
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
    fontFamily: "RobotoMedium",
    fontSize: 16,
  },
  buttonView: {
    marginTop: 8,
    width: "90%",
    flex: 0.1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  form: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.white,
    flex: 0.6,
    justifyContent: "center",
    padding: 24,
    width: "80%",
  },
  formQuiz: {
    padding: 24,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: colors.white,
  },
  formControl: {
    width: 250,
    margin: 5,
  },
  header: {
    flexDirection: "column",
    alignContent: "center",
  },
  helpText: {
    fontSize: 16,
  },
  textInputAuth: {
    borderColor: colors.blue,
    borderRadius: 4,
    borderWidth: 2,
    fontFamily: "RobotoRegular",
    includeFontPadding: true,
    marginVertical: 10,
    padding: 3,
    width: 236,
  },
  textInputForm: {
    borderColor: colors.gray,
    borderWidth: 2,
    borderRadius: 4,
    marginVertical: 4,
    marginLeft: 6,
    fontFamily: "RobotoLight",
  },
  link: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  linkText: {
    color: colors.blue,
    fontFamily: "RobotoRegular",
    fontSize: 15,
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalView: {
    margin: 24,
    backgroundColor: colors.modalBackground,
    borderRadius: 12,
    padding: 32,
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  title: {
    textAlign: "center",
    color: colors.black,
    fontSize: 22,
    marginVertical: 10,
    fontFamily: "BitterRegular",
  },
});
