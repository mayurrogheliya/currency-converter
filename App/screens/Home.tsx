import { Dimensions, Image, StatusBar, StyleSheet, View } from "react-native";
import colors from "../constants/colors";
import bgImage from "../assets/images/bg.png";
import { ConversionInput } from "../components/ConversionInput";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoSize: {
    width: screen.width * 2.5,
    height: screen.height * 0.3,
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={styles.logoContainer}>
        <Image source={bgImage} resizeMode="contain" style={styles.logoSize} />
      </View>
      <ConversionInput
        text="USD"
        onButtonPress={() => alert("todo!..")}
        keyboardType="numeric"
        value="123"
        onChangeText={(text) => console.log("text", text)}
      />
      <ConversionInput
        text="GBP"
        value="123"
        onButtonPress={() => alert("todo!..")}
        keyboardType="numeric"
      />
    </View>
  );
};
