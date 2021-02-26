import { StyleSheet } from "react-native";
import { colors } from "./appStyles";

export const programStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 240,
    justifyContent: "center",
  },
  buttonsContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  buttonView: {
    flex: 1,
    paddingVertical: 12,
  },
  descView: {
    flex: 2,
    justifyContent: "center",
    marginTop: 16,
  },
  infoView: {
    marginTop: 20,
    flex: 0.3,
    paddingHorizontal: 8,
  },
  infoText: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    textAlign: "justify",
  },
  infoButton: {
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 2,
  },
  programView: { padding: 12 },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
  },
  star: { color: colors.starYellow },
  rating: {
    flexDirection: "row",
  },
  ratingView: {
    marginVertical: "2%",
  },
});
