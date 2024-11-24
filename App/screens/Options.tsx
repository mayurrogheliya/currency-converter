import React from "react";
import { Alert, Linking, SafeAreaView, ScrollView } from "react-native";
import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";
import { Entypo } from "@expo/vector-icons";

const openURL = (url: string) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert("Sorry, something went wrong", "Please try again later");
  });
};

export default () => {
  return (
    <SafeAreaView style={{ paddingTop: 25, flex: 1 }}>
      <ScrollView>
        <RowItem
          onPress={() => openURL("httpsds://mayurport.netlify.app/")}
          textName="My Portfolio"
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem
          onPress={() => openURL("https://github.com/mayurrogheliya")}
          textName="My Github Profile"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem
          onPress={() =>
            openURL("https://www.linkedin.com/in/mayur-rogheliya/")
          }
          textName="My LinkedIn Profile"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
        <RowSeparator />
      </ScrollView>
    </SafeAreaView>
  );
};
