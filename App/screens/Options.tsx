import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";
import { Entypo } from "@expo/vector-icons";

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <RowItem
          onPress={() => alert("You get themes!")}
          textName="Themes"
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem
          onPress={() => alert("You get typescript!")}
          textName="React Native with Typescript"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem
          onPress={() => alert("You get Typescript!")}
          textName="React Native with Expo"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
        <RowSeparator />
      </ScrollView>
    </SafeAreaView>
  );
};
