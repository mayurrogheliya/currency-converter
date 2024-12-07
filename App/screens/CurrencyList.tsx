import React, { useContext } from "react";
import { FlatList, StatusBar, StyleSheet, View } from "react-native";
import colors from "../constants/colors";
import currencies from "../data/currencies.json";
import { RowItem, RowSeparator } from "../components/RowItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { ConversionContext } from "../util/ConversionContext";

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.blue,
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowColor: colors.offWhite,
  },
});

const CurrencyList: React.FC = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const { baseCurrency, quoteCurrency, setBaseCurrency, setQuoteCurrency } =
    useContext(ConversionContext);

  const params = route.params || {};
  const { isBaseCurrency } = params;

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          let selected = false;

          if (isBaseCurrency && item === baseCurrency) {
            selected = true;
          } else if (!isBaseCurrency && item === quoteCurrency) {
            selected = true;
          }

          return (
            <RowItem
              textName={item}
              onPress={() => {
                if (isBaseCurrency) {
                  setBaseCurrency(item);
                } else {
                  setQuoteCurrency(item);
                }
                navigation.pop();
              }}
              rightIcon={
                selected && (
                  <View style={styles.icon}>
                    <Entypo name="check" size={20} color={colors.white} />
                  </View>
                )
              }
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: insets.bottom }} />
        )}
      />
    </View>
  );
};

export default CurrencyList;
