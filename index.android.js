/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './components/App.js';
import store from './store.js';
import { Provider } from  'react-redux';
export default class NativeShopping extends Component {
  render() {
    return <Provider store={store}><App/></Provider>
  }
}
AppRegistry.registerComponent('NativeShopping', () => NativeShopping);