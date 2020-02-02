import React, { useState } from 'react';
import {TouchableHighlight, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Button({ size, color, name }) {


    return (
       <TouchableHighlight style={styles.button} onPress={() => Alert.alert("Oi")}>
           <Icon name={name} size={size} color={color}/>
       </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        height:40,
        width:40,
        borderRadius:25,
        backgroundColor: 'transparent',
        justifyContent:"center",
        alignItems:"center",
        padding:5,
    }
})

export default Button; 