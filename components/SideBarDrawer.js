import React from 'react';
import {} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Shop from './Main/Shop/Shop.js';
import Main from './Main/Main.js';
import App from './App.js';

import Authentication from './Authentication/Authentication.js';
import ChangeInfo from './ChangeInfo/ChangeInfo.js';
import OrderHistory from './OrderHistory/OrderHistory.js';
const SideBarDrawer = DrawerNavigator({
  Shop: {
    screen: Shop,
  },
  Main: {screen: Main},
  Authentication: {screen: Authentication},
  ChangeInfo: {screen: ChangeInfo},
  OrderHistory: {screen: OrderHistory}
}, {
  drawerWidth: 150,
  drawerPosition: 'left',
  contentComponent: props => <Main {...props}/>
});

module.exports = SideBarDrawer;
