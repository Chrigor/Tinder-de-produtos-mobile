import React, { useState } from 'react';
import {TouchableHighlight, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Button({ size, color, name }) {


    return (
       <TouchableHighlight onPress={() => Alert.alert("Oi")}>
           <Icon name={name} size={size} color={color}/>
       </TouchableHighlight>
    )
}

export default Button; 