import React, { useState } from 'react';
import {View, StyleSheet, Dimensions, Text } from 'react-native';

function HeaderBar(){
    return(
        <View style={styles.containerHeaderBar}>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
        </View>
    )
}

const dimension = Dimensions.get('screen');
const heightHeaderBar = (dimension.height) / 10

const styles = StyleSheet.create({
    containerHeaderBar: {
        flexDirection:'row',
        height: heightHeaderBar,
        width:"100%", 
        backgroundColor:"purple",
        paddingBottom:10,
        justifyContent:"space-around",
        alignItems:"center"
    }
})

export default HeaderBar