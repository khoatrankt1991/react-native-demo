import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
class ChangeInfo extends Component {
    static navigationOptions = {
        title: 'ChangeInfos'
    }
    goBack() {
        this.props.navigation.goBack();
    }
    render() {
        return <TouchableOpacity onPress={this.goBack.bind(this)}><View><Text>Go back</Text></View></TouchableOpacity>
    }
}
module.exports = ChangeInfo;