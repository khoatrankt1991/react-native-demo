import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, TextInput
} from 'react-native';

const {height} = Dimensions.get('window');

class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true
        };
    }
    static navigationOptions = {
        title: 'Authentication1'
    }
    goBack() {
        this.props.navigation.goBack();
    }
    goToSignIn() {
        this.setState({isSignIn: true});
    }
    gotoSignUp() {
        this.setState({isSignIn: false});
    }
    render() {
        const {wrapper, row1 , titleCss, iconCss, footer, middle,
             btnSignIn, btnSignUp, isActived, isInActived, bigButton, 
             txtSignInNow, txtUsername} = styles;
        const SignInScreen = () =>{
            return (<View style={middle}>
                <TextInput style={txtUsername} placeholder="Enter your username"/>
                <TextInput style={txtUsername} placeholder="Enter your password"/>
                <TouchableOpacity style={bigButton}><Text style={txtSignInNow}>Sign In Now</Text></TouchableOpacity>
            </View>)
        }
        const SignUpScreen = () =>{
            return (<View style={middle}>
                <TextInput style={txtUsername} placeholder="Enter Your Name"/>
                <TextInput style={txtUsername} placeholder="Enter Your Email"/>
                <TextInput style={txtUsername} placeholder="Enter Your Phone Number"/>
                <TextInput style={txtUsername} placeholder="Enter Your Password"/>
                <TextInput style={txtUsername} placeholder="Re Enter Your Password"/>
                <TouchableOpacity style={bigButton}><Text style={txtSignInNow}>Sign Up Now</Text></TouchableOpacity>
            </View>)
        }
        return (<View style={{flex: 1, backgroundColor: '#556b2f', justifyContent: 'space-between'}}>
                    <View style={wrapper}>                
                        <View style={row1}>
                            <TouchableOpacity onPress={this.goBack.bind(this)}>
                                <Image style={iconCss} source={require('../../resource/img/back.png')}/>
                            </TouchableOpacity>
                            <Text style={titleCss}>Wearing A Dress</Text>
                            <Image style={iconCss} source={require('../../resource/img/menu.png')}/>
                            
                        </View>
                    </View>
                    {this.state.isSignIn?<SignInScreen/>:<SignUpScreen/>}
                    <View style={footer}>
                        <TouchableOpacity style={btnSignIn} onPress={this.goToSignIn.bind(this)}><Text style={isActived}>Sign In</Text></TouchableOpacity>
                        <TouchableOpacity style={btnSignUp} onPress={this.gotoSignUp.bind(this)}><Text style={isInActived}>Sign Up</Text></TouchableOpacity>
                    </View>
                
        </View>);
    }
}
const styles = StyleSheet.create({
    wrapper: {
        height: height/10, backgroundColor: '#556b2f', padding: 10, justifyContent: 'space-around'
    },
    row1: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    titleCss: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#FFF'
    },
    iconCss: {
        width: 25,
        height: 25
    },
    footer: {
        flexDirection: 'row',
        height: 40,
        margin: 20
    },
    btnSignIn: {
        backgroundColor: '#FFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginRight: 1
    },
    btnSignUp: {
        backgroundColor: '#FFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: 1
    },
    isActived: {
        fontFamily: 'Avenir',
        color: '#a9a9a9'
    },
    isInActived: {
        fontFamily: 'Avenir',
        color: '#556b2f'
    },
    middle: {
        flex: 1,
        justifyContent: 'center'
    },
    bigButton: {
        height: 40,
        backgroundColor: '#556b2f',
        margin: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#FFF'
    },
    txtSignInNow: {
        color: '#FFF',
        fontFamily: 'Avenir'
    },
    txtUsername: {
        fontFamily: 'Avenir',
        height: 40,
        backgroundColor: '#FFF',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        paddingLeft: 20,
        borderRadius: 20
    }
});

module.exports = Authentication;