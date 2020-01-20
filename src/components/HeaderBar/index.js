import React, { useState } from 'react';
import {View, StyleSheet, Dimensions, Text } from 'react-native';
import Button from '../Button';

function HeaderBar(){
    return(
        <View style={styles.containerHeaderBar}>
            <Button size={25} color="#fff" name="user"/>
            <Button size={25} color="#fff" name="tint"/>
            <Button size={25} color="#fff" name="comments"/>        
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
        justifyContent:"space-around",
        alignItems:"center",
        padding:10,
    }
})

export default HeaderBar