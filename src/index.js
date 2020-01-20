import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from './components/Slider';
import Header from './components/HeaderBar';
import ActionBar from './components/ActionBar';

function main() {

    return (
        <View style={styles.view}>
            <Header />
            <Slider />
            <ActionBar />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
    }
})

export default main;