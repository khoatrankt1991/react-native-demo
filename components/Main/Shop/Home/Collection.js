import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');

class Collection extends Component {
    render() {
        var {wrapper, header, headerTitle, imageCss} = styles;
        return (
            <View style={wrapper}>
                <View style = {header}><Text style={headerTitle}>Summer Collection</Text></View>
                <View style={{flex: 4}}>
                    <Image style={imageCss}source={require('../../../../resource/img/collection_summer.jpg')}/>
                </View>
            </View>
        );
    }
}
const styles =  StyleSheet.create({
    wrapper: {
        height: height/3,
        margin: 10,
        marginBottom: 0,
        backgroundColor: '#FFF',
        shadowColor: '#2E272B',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.3
    },
    header: {
        height: 30,
        justifyContent: 'center'
    },
    headerTitle: {
        fontFamily: 'Avenir',
        color: '#a9a9a9',
        fontSize: 25,
        paddingLeft: 10
    },
    imageCss: {
        height: height*4/15 - 20,
        width: width - 40,
        margin: 10
    },
    wrapperTitle: {
        fontFamily: 'Avenir',
        fontSize: 25,
        color: '#a9a9a9',
        margin: 10
    }
});
export default Collection;