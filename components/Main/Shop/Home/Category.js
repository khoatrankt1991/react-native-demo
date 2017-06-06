import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
const {height, width} = Dimensions.get('window');

class Category extends Component {
    render() {
        var {wrapper, wrapperTitle, imageCss} = styles;
        return (
            <View style={wrapper}>
                <View style = {{flex: 1}}><Text style={wrapperTitle}>List Of Category1</Text></View>
                <View style={{flex: 4, paddingLeft: 10}}>
                    <Swiper showsPagination width={width-40} height={height*4/15 -10}>
                        <Image style={imageCss} source={require('../../../../resource/img/catagory_1.jpg')}/>
                        <Image style={imageCss} source={require('../../../../resource/img/catagory_2.jpg')}/>
                        <Image style={imageCss}  source={require('../../../../resource/img/catagory_3.jpg')}/>    
                    </Swiper>
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
    imageCss: {
        height: height*4/15 - 20,
        width: width - 40,
        margin: 10,
        marginLeft: 0
    },
    wrapperTitle: {
        fontFamily: 'Avenir',
        fontSize: 25,
        color: '#a9a9a9',
        margin: 10
    }
});
export default Category;