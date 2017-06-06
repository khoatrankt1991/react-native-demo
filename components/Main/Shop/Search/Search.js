import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Search extends Component {
    static navigationOptions = {
    tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('../../../../resource/img/search.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
        ),
    }
    render() {
        return (
            <View><Text>Search</Text></View>
        );
    }
}
const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
export default Search;