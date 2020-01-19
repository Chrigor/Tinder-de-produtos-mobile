import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Slider from './components/Slider'

function main() {

    return (
        <SafeAreaView style={styles.view}>
            <Slider />
        </SafeAreaView>  
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    }
}) 

export default main;