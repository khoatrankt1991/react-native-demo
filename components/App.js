import React, {Component} from 'react';
import {
    View, Text, StatusBar
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Authentication from './Authentication/Authentication.js';
import ChangeInfo from './ChangeInfo/ChangeInfo.js';
import Main from './Main/Main.js';
import OrderHistory from './OrderHistory/OrderHistory.js';

StatusBar.setHidden(true);
const App = StackNavigator({
  Main: {screen: Main},
  Authentication: {screen: Authentication},
  ChangeInfo: {screen: ChangeInfo},
  OrderHistory: {screen: OrderHistory}
}, {
  headerMode: 'none'
});

module.exports = App;