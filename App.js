import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/Scenes/HomeScreen";
import AddContactScreen from "./src/Scenes/AddContactScreen";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  AddContact: {
    screen: AddContactScreen
  }
}, 
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
);

export default createAppContainer(AppNavigator);
