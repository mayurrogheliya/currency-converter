import {
  Dimensions,
  Image,
  Keyboard,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../constants/colors";
import bgImage from "../assets/images/bg.png";
import { ConversionInput } from "../components/ConversionInput";
import { format } from "date-fns";
import { Button } from "../components/BUtton";
import React, { useEffect, useState } from "react";
import { KeyboardSpacer } from "../components/KeyboardSpacer";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  content: {
    paddingTop: screen.height * 0.1,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoSize: {
    width: screen.width * 2.5,
    height: screen.height * 0.3,
  },
  textHeader: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
  },
  header: {
    alignItems: "flex-end",
    marginHorizontal: 20,
  },
});

const Home: React.FC = ({ navigation }) => {
  // const baseCurrency: string = "USD";
  // const quoteCurrency: string = "GBP";
  const [baseCurrency, setBaseCurrency] = useState<string>("USD");
  const [quoteCurrency, setQuoteCurrency] = useState<string>("GBP");
  const [value, setValue] = useState<string>("100");
  const [scrollEnabled, setScrollEnabled] = useState<boolean>(false);

  const conversionRate: number = 0.89824;
  const date: Date = new Date();

  const swapCurrency: React.FC = (): void => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", () =>
      setScrollEnabled(true)
    );
    const hideListener = Keyboard.addListener("keyboardDidHide", () =>
      setScrollEnabled(false)
    );

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <ScrollView scrollEnabled={scrollEnabled}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push("Options")}>
            <Entypo name="cog" size={32} color={colors.white} />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={bgImage}
              resizeMode="contain"
              style={styles.logoSize}
            />
          </View>
          <Text style={styles.textHeader}>Currency Converter</Text>
          <View style={styles.inputContainer}>
            <ConversionInput
              text={baseCurrency}
              onButtonPress={() =>
                navigation.push("CurrencyList", {
                  title: "Base Currency",
                  activeCurrency: baseCurrency,
                  onChange: (currency: string) => setBaseCurrency(currency),
                })
              }
              keyboardType="numeric"
              value={value}
              onChangeText={(text: string) => setValue(text)}
            />
            <ConversionInput
              text={quoteCurrency}
              value={
                value && `${(parseFloat(value) * conversionRate).toFixed(3)}`
              }
              onButtonPress={() =>
                navigation.push("CurrencyList", {
                  title: "Quote Currency",
                  activeCurrency: quoteCurrency,
                  onChange: (currency: string) => setQuoteCurrency(currency),
                })
              }
              editable={false}
            />
          </View>
          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
              new Date(date),
              "MMM do, yyyy"
            )}`}
          </Text>
          <Button text="Reverse Currencies" onPress={() => swapCurrency()} />
          <KeyboardSpacer
            onToggle={(visible: boolean) => setScrollEnabled(visible)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
