import { StyleSheet } from "react-native";

export const stackHeader = {
  headerShown: false,
};

export const colors = {
  gray: "#808080",
  blue: "#1673FF",
  lightBlue: "#E7F0F8",
  white: "#FFFFFF",
  black: "#000000",
  starYellow: "#f9b313",
  modalBackground: "#ebf2f2",
};

export const titleHeader = {
  headerStyle: {
    backgroundColor: colors.blue,
  },
  headerTintColor: colors.white,
  headerTitleAlign: "center",
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
    backgroundColor: colors.white,
  },
  flexOne: { flex: 1 },
  flexGrowOne: { flexGrow: 1 },
  floatingBox: {
    padding: 12,
    borderRadius: 4,
    borderColor: colors.gray,
    borderWidth: 1,
    elevation: 1,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  input: {
    width: 250,
    borderColor: colors.blue,
    borderRadius: 4,
    borderWidth: 2,
    marginVertical: 8,
  },
  textInput: {
    borderColor: colors.gray,
    borderWidth: 2,
    borderRadius: 4,
    marginVertical: 4,
  },
  subcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
