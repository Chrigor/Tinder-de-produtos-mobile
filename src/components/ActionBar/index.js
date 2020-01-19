import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

function ActionBar() {
    return (
        <View style={styles.containerHeaderBar}>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
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
        paddingBottom:10,
        justifyContent:"space-around",
        alignItems:"center",
        marginVertical:5,
    }
})

export default ActionBar;