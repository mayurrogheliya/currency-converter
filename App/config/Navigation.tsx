import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Options from "../screens/Options";
import CurrencyList from "../screens/CurrencyList";
import { TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";

export type MainStackParamList = {
  Home: undefined;
  Options: undefined;
};

export type ModalStackParamList = {
  Main: undefined;
  CurrencyList: { title: string };
};

const MainStack = createStackNavigator<MainStackParamList>();
const MainStackScreen: React.FC = () => (
  <MainStack.Navigator
  /*initialRouteName="Options"*/
  >
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="Options"
      component={Options}
      options={({ navigation, route }) => ({
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ paddingHorizontal: 10 }}
          >
            <Entypo name="cross" size={30} color={colors.blue} />
          </TouchableOpacity>
        ),
      })}
    />
  </MainStack.Navigator>
);

const ModalStack = createStackNavigator<ModalStackParamList>();
const ModalStackScreen: React.FC = () => (
  <ModalStack.Navigator>
    <ModalStack.Screen
      name="Main"
      component={MainStackScreen}
      options={{ headerShown: false }}
    />
    <ModalStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({ navigation, route }) => ({
        title: route.params?.title || "Currency List",
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ paddingHorizontal: 10 }}
          >
            <Entypo name="cross" size={30} color={colors.blue} />
          </TouchableOpacity>
        ),
      })}
    />
  </ModalStack.Navigator>
);

const Navigation: React.FC = () => (
  <NavigationContainer>
    <ModalStackScreen />
  </NavigationContainer>
);

export default Navigation;
