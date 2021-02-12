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
};

export const titleHeader = {
  headerStyle: {
    backgroundColor: colors.blue,
  },
  headerTintColor: colors.white,
  headerTitleAlign: "center",
};

export const main = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  flexOne: { flex: 1 },
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
  subcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
