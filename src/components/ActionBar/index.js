import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Button from '../Button';

function ActionBar() {
    return (
        <View style={styles.containerHeaderBar}>
             <Button size={25} color="#fff" name="times"/>
             <Button size={25} color="#fff" name="star"/>
             <Button size={25} color="#fff" name="heart"/>
        </View>
    )
}

const dimension = Dimensions.get('screen');
const heightActionBar = (dimension.height) / 10

const styles = StyleSheet.create({
    containerHeaderBar: {
        flexDirection:'row',
        height: heightActionBar,
        width:"100%",
        backgroundColor:"purple",
        justifyContent:"space-around",
        alignItems:"center",
        marginBottom:5,
    }
})

export default ActionBar;