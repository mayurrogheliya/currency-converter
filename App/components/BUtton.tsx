import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import buttonIcon from "../assets/images/reverse.png";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  buttonIcon: {
    marginRight: 10,
    width: 30,
    height: 30,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
  },
});

type buttonParameters = {
  onPress: () => void;
  text: string;
};

export const Button = ({ onPress, text }: buttonParameters) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={buttonIcon}
        style={styles.buttonIcon}
        resizeMode="contain"
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
