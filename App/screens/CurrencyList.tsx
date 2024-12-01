import React from "react";
import { FlatList, StatusBar, View } from "react-native";
import colors from "../constants/colors";
import currencies from "../data/currencies.json";
import { RowItem, RowSeparator } from "../components/RowItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CurrencyList: React.FC = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ backgroundColor: colors.white }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          return (
            <RowItem
              textName={item}
              onPress={() => {
                navigation.pop();
              }}
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
