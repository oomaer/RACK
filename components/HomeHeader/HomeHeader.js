
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color2, colorPrimary, logoFont, pFont500, pFont700, pFont800, windowWidth } from '../../utils/utils';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeHeader = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.logo}>RACK</Text>
            <TouchableOpacity style = {styles.profile}>
                <Icon name="user" size={24} color={'white'} />
            </TouchableOpacity>
        </View>
    )
}

export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    logo: {
        fontSize: 28,
        fontFamily: logoFont,
        color: 'white',
        // fontWeight: '800',
    },


})