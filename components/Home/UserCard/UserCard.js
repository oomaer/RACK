import React from 'react'; 
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colorPrimary, windowWidth } from '../../../utils/utils';

const UserCard = ({user}) => {
    console.log(user);
    return(
        <TouchableOpacity style = {styles.card}>
            <Image 
                style = {styles.cardImage}
                source = {{uri: user.imageUrl}}
            />
        </TouchableOpacity>
    );
}

export default UserCard;

const styles = StyleSheet.create({

    cardImage: {
        width: windowWidth * 0.18,
        height: windowWidth * 0.18,
        marginRight: windowWidth * 0.03, 
        borderRadius: 10000,
        borderColor: colorPrimary,
        borderWidth: 2,
    }

})