

import React from 'react'; 
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colorPrimary, windowHeight, windowWidth } from '../../../utils/utils';

const RecipeCarouselItem = ({item}) => {
    
    return(
        <View style = {styles.cardContainer}> 
            <TouchableOpacity style = {styles.card}>
                <Image 
                    style = {styles.cardImage}
                    source = {{uri: item.imageUrl}}
                />
            </TouchableOpacity>
        </View>
    );
}

export default RecipeCarouselItem;

const styles = StyleSheet.create({

    cardContainer: {
        elevation: 5,
        backgroundColor: 'white',    
    },

    card: {
        elevation: 5,
        backgroundColor: 'white',
    },

    cardImage: {
        width: windowWidth,
        height: windowWidth * 1.2,
        borderColor: colorPrimary,
        // borderWidth: 2,
    },

})