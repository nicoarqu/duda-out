import { StyleSheet } from "react-native";

export const colors = {
  gray: "#808080",
  blue: "#1673FF",
  lightBlue: "#E7F0F8",
  white: "white",
};

export const stackHeader = {
  headerShown: false,
};

export const titleHeader = {
  headerStyle: {
    backgroundColor: colors.blue,
  },
  headerTintColor: colors.white,
  headerTitleAlign: "center",
};

export const main = StyleSheet.create({
  container: { flex: 1, margin: 20, alignItems: "center" },
});
