import React, { useEffect, useState } from "react";
import { Dimensions, Keyboard, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});

type KeyboardSpacerType = {
  onToggle: (visible: boolean) => void;
};

export const KeyboardSpacer: React.FC<KeyboardSpacerType> = ({ onToggle }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [keyboardSpace, setKeyboardSpace] = useState<number>(0);

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", (event) => {
      console.log(event);
      const screenHeight = Dimensions.get("window").height;
      const endY = event.endCoordinates.screenY;

      setKeyboardSpace(screenHeight - endY);
      onToggle(true);
    });

    const higeListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardSpace(0);
      onToggle(false);
    });

    return () => {
      showListener.remove();
      higeListener.remove();
    };
  }, []);

  return <View style={styles.container} />;
};
