import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import Shop from './Shop/Shop.js';
import Menu from './Menu.js';

const Main = DrawerNavigator({
  Shop: {
    screen: Shop
  }
  }, {
  drawerWidth: 200,
  drawerPosition: 'left',
  contentComponent: props => <Menu {...props}/>
});

module.exports = Main;