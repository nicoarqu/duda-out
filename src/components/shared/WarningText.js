import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../../styles";

export const WarningText = ({ message }) => {
  return <Text style={styles.redText}>{message}</Text>;
};

const styles = StyleSheet.create({
  redText: { color: colors.warnRed, fontSize: 14 },
});
