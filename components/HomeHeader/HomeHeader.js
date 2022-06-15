
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colorPrimary, logoFont, windowWidth } from '../../utils/utils';


const HomeHeader = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.logo}>RACK</Text>
        </View>
    )
}

export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: windowWidth * 0.03,
    },
    
    logo: {
        fontSize: 18,
        fontFamily: logoFont,
        color: colorPrimary,
        fontWeight: '800',
    },


})