import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Options from "../screens/Options";
import CurrencyList from "../screens/CurrencyList";

export type MainStackParamList = {
  Home: undefined;
  Options: undefined;
  CurrencyList: undefined;
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
    <MainStack.Screen name="Options" component={Options} />
    <MainStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({ route }) => ({
        title: route.params.title,
      })}
    />
  </MainStack.Navigator>
);

const Navigation: React.FC = () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);

export default Navigation;
