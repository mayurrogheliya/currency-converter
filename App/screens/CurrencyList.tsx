import React from "react";
import { FlatList, StatusBar, StyleSheet, View } from "react-native";
import colors from "../constants/colors";
import currencies from "../data/currencies.json";
import { RowItem, RowSeparator } from "../components/RowItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

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

  const params = route.params || {};
  const { activeCurrency, onChange = () => {} } = params;

  return (
    <View style={{ backgroundColor: colors.white }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          const selected = activeCurrency === item;
          return (
            <RowItem
              textName={item}
              onPress={() => {
                onChange(item);
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
