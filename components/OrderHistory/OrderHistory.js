import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
class OrderHistory extends Component {
    static navigationOptions = {
        title: 'Order History'
    }
    goBack() {
        this.props.navigation.goBack();
    }
    render() {
        return <TouchableOpacity onPress={this.goBack.bind(this)}><View><Text>OrderHistory</Text></View></TouchableOpacity>
    }
}
module.exports = OrderHistory;