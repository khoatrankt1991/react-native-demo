import React, { Component } from 'react';
import { View, Text } from 'react-native';
export default class TestFlex extends Component {
    
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>
                <View style={{flex: 1, height: 150, backgroundColor: 'pink', justifyContent: 'center'}}>
                    <Text style={{backgroundColor: 'blue'}}>Title</Text>
                </View>
            </View>
        );
    }
}