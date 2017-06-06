import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Contact extends Component {
    static navigationOptions = {
    tabBarLabel: 'Contact',
        tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('../../../../resource/img/contact.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
        ),
    }
    render() {
        return (
            <View><Text>Contact</Text></View>
        );
    }
}
const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
export default Contact;