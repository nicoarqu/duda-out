import { StyleSheet } from "react-native";
import { colors } from "./appStyles";

export const counselorStyle = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: colors.blue,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: "70%",
  },
  buttonsContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  buttonView: {
    flex: 0.5,
    paddingVertical: 12,
  },
  counselorInfoVIew: {
    marginBottom: 16,
  },
  chatList: {
    marginVertical: 16,
    padding: 4,
  },
  descView: {
    flex: 2,
    justifyContent: "flex-start",
    marginTop: 14,
  },
  infoView: {
    marginTop: 20,
    flex: 0.3,
    paddingHorizontal: 8,
  },
  infoText: {
    textAlign: "justify",
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  infoButton: {
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 2,
  },
  titleText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
  },
});
