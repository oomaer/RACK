
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { color2, color3, color4, color6, colorPrimary, pFont500, windowWidth } from '../../../utils/utils';
import UserDetailsCard from '../../UserDetailsCard/UserDetailsCard';
import Icon from 'react-native-vector-icons/FontAwesome';

const PostCard = ({post}) => {
    
    return (
        <View style={styles.container}>
            <View style = {styles.userDetails}>
                <UserDetailsCard user = {post.user} />
                <Text style = {styles.postText}>{(new Date(post.createdAt.toMillis())).toJSON().slice(0,10).split`-`.join`/`}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: post.image}} />
            </View>
            <View style = {styles.postDetails}>
                <View style = {styles.interactions}>
                    <View style = {styles.likes}>
                        <TouchableOpacity>
                            <Icon name="heart-o" size={26} color={color2} />
                        </TouchableOpacity>
                        <View style = {styles.likedBy}>
                            <Text style = {styles.postText}>Liked by 
                            <Text style={styles.highlight}> someone </Text>
                            and<Text style={styles.highlight}> 444 </Text>others
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Icon name="share-alt" size={26} color={color2} />
                    </TouchableOpacity>
                </View>
               
                <View style = {styles.postDescription}>
                    <Text style = {styles.postText}>
                        <Text style={styles.highlight}>{post.user.name} - </Text>
                        Traldaldaldal asdjsadjsadjsds skadksd sd
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default PostCard;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },

    postDetails: {
        paddingHorizontal: windowWidth * 0.03,
    },

    userDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth * 0.03,
        marginBottom: 10,
    },

    imageContainer: {
        marginBottom: 5,
    },

    image: {
        width: windowWidth,
        height: windowWidth,
    },

    interactions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },

    likes: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    likedBy: {
        color: color3,
        marginLeft: 8,
    },

    postDescription: {
        color: color3,
    },

    highlight: {
        color: color2,
    },

    postText: {
        color: color6,
    }

})