import { StyleSheet } from "react-native";

export const colors = {
  black: "#000000",
  blue: "#1673FF",
  darkBlue: "#0f52b8",
  darkGray: "#3f4d52",
  gray: "#808080",
  lightBlue: "#E7F0F8",
  modalBackground: "#ebf2f2",
  pieBlue: "#0082a5",
  pieDarkBlue: "#004c6d",
  pieLightBlue: "#00c9df",
  pieLighterBlue: "#00f9ff",
  starYellow: "#f9b313",
  warnRed: "#B33A3A",
  white: "#FFFFFF",
};

export const headerStyle = {
  barStyle: {
    backgroundColor: colors.lightBlue,
  },
  hideHeader: {
    headerShown: false,
  },
  titleHeader: {
    headerStyle: {
      backgroundColor: colors.blue,
    },
    headerTintColor: colors.white,
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontFamily: "BitterRegular",
      fontSize: 24,
    },
  },
};

export const main = StyleSheet.create({
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
    margin: 20,
  },
  flexOne: { flex: 1 },
  flexGrowOne: { flexGrow: 1 },
  floatingBox: {
    backgroundColor: colors.white,
    borderRadius: 4,
    borderColor: colors.gray,
    borderWidth: 1,
    elevation: 1,
    padding: 12,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  fullWidth: { width: "100%" },
  input: {
    width: 250,
    borderColor: colors.blue,
    borderRadius: 4,
    borderWidth: 2,
    marginVertical: 8,
  },
  textInfo: {
    fontFamily: "RobotoLight",
    fontSize: 17,
    textAlign: "center",
  },
  textInput: {
    borderColor: colors.gray,
    borderWidth: 2,
    borderRadius: 4,
    marginVertical: 4,
    fontFamily: "RobotoLight",
    padding: 3,
  },
  textJustify: {
    textAlign: "justify",
  },
  pieChart: { marginTop: "33%" },
  subcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
