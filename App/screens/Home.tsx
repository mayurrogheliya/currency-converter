import { Dimensions, Image, StatusBar, StyleSheet, View } from "react-native";
import colors from "../constants/colors";
import bgImage from "../assets/images/bg.png";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoSize: {
    width: screen.width * 0.75,
    height: screen.height * 0.75,
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={styles.logoContainer}>
        <Image source={bgImage} resizeMode="contain" style={styles.logoSize} />
      </View>
    </View>
  );
};
