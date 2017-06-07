import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');
const widthProduct = width/2 -30;
const heightProductImg = widthProduct*4/3;
const heightProductInfo = 30;
const heightProduct = heightProductImg + 20*2;
class TopProduct extends Component {
    render() {
        var {wrapper, header, headerTitle, body, productContainer, 
            productImg, productName, productPrice} = styles;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <Text style={headerTitle}>Top Product</Text>
                </View>
                <View style={body}>
                    <View style={productContainer}>
                        <Image style={productImg} source={require('../../../../resource/product/catagory_1.jpg')}/>
                        <Text style={productName}>PROPAIII</Text>
                        <Text style={productPrice}>2000$</Text>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImg} source={require('../../../../resource/product/catagory_1.jpg')}/>
                        <Text style={productName}>PROPAIII</Text>
                        <Text style={productPrice}>2000$</Text>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImg} source={require('../../../../resource/product/catagory_1.jpg')}/>
                        <Text style={productName}>PROPAIII</Text>
                        <Text style={productPrice}>2000$</Text>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImg} source={require('../../../../resource/product/catagory_1.jpg')}/>
                        <Text style={productName}>PROPAIII</Text>
                        <Text style={productPrice}>2000$</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles =  StyleSheet.create({
    wrapper: {
        flex: 1,
        margin: 10,
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
    body: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    productContainer: {
        backgroundColor: '#FFF',
        shadowColor: '#2E272B',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.3,
        margin: 10,
        width: widthProduct,
        height: heightProduct
    },
    productImg: {
        width: widthProduct,
        height: heightProductImg
    },
    productName: {
        marginLeft: 10,
        fontFamily: 'Avenir',
        color: '#a9a9a9'
    },
    productPrice: {
        marginLeft: 10,
        fontFamily: 'Avenir',
        fontWeight: '900',
        color: '#556b2f'
    }
});
export default TopProduct;