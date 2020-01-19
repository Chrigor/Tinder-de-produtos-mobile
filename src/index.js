import React, { useState } from 'react';
import {View, StyleSheet } from 'react-native';
import Slider from './components/Slider'

function main() {

    return (
        <View style={styles.view}>
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