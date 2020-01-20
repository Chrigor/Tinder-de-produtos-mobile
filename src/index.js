import React, { useState } from 'react';
import {View, StyleSheet } from 'react-native';
import Slider from './components/Slider';
import Header from './components/HeaderBar';
import ActionBar from './components/ActionBar';
import Icon from 'react-native-vector-icons/FontAwesome';

function main() {

    return (
        <View style={styles.view}>
            <Header />
            <Slider />
            <ActionBar />
            <Icon name="home" size={18} color="#999" />
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