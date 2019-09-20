import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';

import Login from './app/pages/login';
import Motor from './app/pages/motoristReg';
import Mechanic from './app/pages/mechanicReg';
import MotoHome from './app/pages/motorHome';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Motor: {
      screen: Motor
  },
  Mecha: {
      screen: Mechanic
  },
  MotoHome:{
    screen: MotoHome
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});