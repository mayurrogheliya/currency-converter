import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import React from "react";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
    color: colors.text,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

type RowItemType = {
  textName: string;
  rightIcon: React.ReactNode;
  onPress: () => void;
};

export const RowItem = ({ rightIcon, textName, onPress }: RowItemType) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.text}>{textName}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export const RowSeparator = () => <View style={styles.separator} />;
