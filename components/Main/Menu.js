import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Image
} from 'react-native';
import {connect} from 'react-redux';

class Menu extends Component {

    static navigationOptions = {
        title: 'Menu'
    }
    goToAuthentication() {
        let { navigate } = this.props.navigation;
        navigate('Authentication');
    }
    goToChangeInfo() {
        let { navigate } = this.props.navigation;
        navigate('ChangeInfo');
    }
    goToOrderHistory() {
        let { navigate } = this.props.navigation;
        navigate('OrderHistory');
    }
    signOut() {
        var {dispatch} = this.props;
        dispatch({type: "SIGN_OUT"});
    }
    render() {
        const { wrapper, btn, btn1, btnTitle} = styles;
        const LoginScreen = ()=>(
            <View style={wrapper}>
                    <Image style={{ margin: 10, width: 177, height: 177, borderRadius: 90}} source={require('../../resource/img/non_profile.jpg')}/>
                    <View style={btn}><TouchableOpacity onPress={this.goToAuthentication.bind(this)}>
                                    <Text style={btnTitle}>Sign In</Text>
                    </TouchableOpacity></View>
            </View>
        );
        const LogOutScreen = ()=>(
            <View style={wrapper}>
                    <Image style={{ margin: 10, width: 177, height: 177, borderRadius: 90}} source={require('../../resource/img/non_profile.jpg')}/>
                    <View style={{flex: 1, justifyContent: 'space-between'}}>
                        <View></View>
                        <View>
                            <View style={btn1}><TouchableOpacity>
                                    <Text style={btnTitle}>Change Info</Text>
                            </TouchableOpacity></View>
                            <View style={btn1}><TouchableOpacity>
                                    <Text style={btnTitle}>Order History</Text>
                            </TouchableOpacity></View>
                            <View style={btn1}><TouchableOpacity onPress={this.signOut.bind(this)}>
                                    <Text style={btnTitle}>Sign Out</Text>
                            </TouchableOpacity></View>
                        </View>
                        <View></View>
                    </View>
            </View>
        );
        return this.props.username != null?<LogOutScreen/>:<LoginScreen/>;
    }
}
const styles= StyleSheet.create({
    wrapper: {
         flex: 1,
         backgroundColor: '#556b2f', 
         borderRightWidth: 3, 
         borderRightColor: '#FFF'
    },
    btn: {
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.3,
        backgroundColor: '#FFF',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10
    },
    btn1: {
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3},
        shadowOpacity: 0.3,
        backgroundColor: '#FFF',
        height: 40,
        justifyContent: 'center',
        paddingLeft: 10,
        borderRadius: 10,
        margin: 10
    },
    btnTitle: {
        fontFamily: 'Avenir',
        color: '#556b2f',
        fontSize: 20,
        marginRight: 10
    }
})
module.exports = connect(function(state){
    return { username: state.username}
})(Menu);