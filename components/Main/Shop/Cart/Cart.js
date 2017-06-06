import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Cart extends Component {
    static navigationOptions = {
    tabBarLabel: 'Cart',
        tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('../../../../resource/img/cart.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
        ),
    }
    render() {
        return (
            <View><Text>Cart</Text></View>
        );
    }
}
const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
export default Cart;