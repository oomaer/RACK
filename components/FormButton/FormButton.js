
import React from 'react';
import {StyleSheet, Text, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { pFont600 } from '../../utils/Styles';

const FormButton = ({title, onPress, ...rest}) => {
    return (
        <TouchableOpacity style={styles.button} onPress = {onPress} >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#890d0c',
        color: 'white',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 8,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        textTransform: 'uppercase',
        fontFamily: pFont600,
    }
})

export default FormButton;
