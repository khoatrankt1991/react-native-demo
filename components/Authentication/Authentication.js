import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';

class Authentication extends Component {
    static navigationOptions = {
        title: 'Authentication1'
    }
    goBack() {
        this.props.navigation.goBack();
    }
    render() {
        return (<TouchableOpacity onPress={this.goBack.bind(this)}><View><Text>Go back</Text></View></TouchableOpacity>)
    }
}
module.exports = Authentication;