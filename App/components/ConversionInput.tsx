import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../constants/colors";
import React from "react";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    borderRadius: 5,
  },
  containerDisable: {
    backgroundColor: colors.offWhite,
  },
  button: {
    padding: 15,
    borderRightColor: colors.border,
    borderRightWidth: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: colors.textLight,
  },
});

interface ConversionInputType extends TextInputProps {
  text: string;
  onButtonPress: () => void;
}

export const ConversionInput: React.FC<ConversionInputType> = ({
  text,
  onButtonPress,
  ...props
}: ConversionInputType) => {
  const containerStyles = [
    styles.container,
    props.editable === false ? styles.containerDisable : {},
  ];
  return (
    <View style={containerStyles}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};
