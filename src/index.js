import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

function main(){

    const [texto, setTexto] = useState('');

    return(
        <View>
            <Text> {texto} !</Text>
            <Text>Hello world!</Text>
            <Button onPress={() => { setTexto('Bem vindo!')}} title="Opa"/>
        </View>
    )
}

export default main;