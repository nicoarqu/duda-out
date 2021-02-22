import { StyleSheet } from "react-native";
import { colors } from "./appStyles";

export const authStyle = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 4,
    borderRadius: 4,
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonView: {
    paddingVertical: 12,
    flex: 0.1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  form: {
    backgroundColor: colors.white,
    padding: 24,
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
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
  helpText: { fontSize: 16 },
  link: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  linkText: {
    color: colors.blue,
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
    fontSize: 16,
    marginVertical: 10,
  },
});
