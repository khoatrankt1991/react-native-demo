import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, Button, Dimensions, Image, TextInput, StyleSheet
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from './Home/Home.js';
import Cart from './Cart/Cart.js';
import Contact from './Contact/Contact.js';
import Search from './Search/Search.js';
const {height} = Dimensions.get('window');
const TabShop = TabNavigator({
  Home: {
    screen: Home
  },
  Cart: {
    screen: Cart
  },
  Search: {
    screen: Search
  },
  Contact: {
    screen: Contact
  },
}, {
  tabBarOptions: {
    activeTintColor: '#556b2f',
  },
});

class Shop extends Component {
    
    openMenu() {
        this.props.navigation.navigate('DrawerOpen'); // open drawer
    }
    render() {
        const {wrapper, row1 , titleCss, iconCss} = styles;
        return (<View style={{flex: 1, backgroundColor: '#a9a9a9'}}>
                    <View style={wrapper}>                
                        <View style={row1}>
                            <TouchableOpacity onPress={this.openMenu.bind(this)}>
                                <Image style={iconCss} source={require('../../../resource/img/menu.png')}/>
                            </TouchableOpacity>
                            <Text style={titleCss}>Wearing A Dress</Text>
                            <Image style={iconCss} source={require('../../../resource/img/menu.png')}/>
                            
                        </View>
                        <TextInput style={{marginTop: 10, backgroundColor: '#FFF', height: height/25, paddingLeft: 10}} placeholder="What do you want to buy"/> 
                    </View>
                <TabShop/>
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
    }
});
module.exports = Shop;