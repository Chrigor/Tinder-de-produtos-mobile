import React, { useState } from 'react';
import {View, StyleSheet } from 'react-native';
import Slider from './components/Slider';
import Header from './components/HeaderBar';

function main() {

    return (
        <View style={styles.view}>
            <Header />
            <Slider />
        </View> 
    )
} 

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"red"
    }
})

export default main;