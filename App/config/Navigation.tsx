import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Options from "../screens/Options";

export type MainStackParamList = {
  Home: undefined;
  Options: undefined;
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
  </MainStack.Navigator>
);

const Navigation: React.FC = () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);

export default Navigation;
