import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Collection from './Collection.js';
import Category from './Category.js';
import TopProduct from './TopProduct.js';
import TextFlex from './TestFlex.js';
class Home extends Component {
    static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('../../../../resource/img/home.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
        ),
    }
    render() {
        return (
            <ScrollView>
                <Collection/>
                <Category/>
                <TopProduct/>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
export default Home;