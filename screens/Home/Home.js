

import React, {useContext, useEffect} from 'react';
import { View, Text, StyleSheet, Button, ScrollView, LogBox} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import ActionButtonComponent from '../../components/Home/ActionButtonComponent/ActionButtonComponent';
import PostCard from '../../components/Home/PostCard/PostCard';
// import Carousel from 'react-native-snap-carousel';
import RecipeCarouselItem from '../../components/Home/RecipeCarouselItem/RecipeCarouselItem';
import UserCard from '../../components/Home/UserCard/UserCard';
import PostContext from '../../context/PostContext/PostContext';

import UserContext from '../../context/UserContext/UserContext';
import {windowWidth, bgColor, color5, pFont500, pFont600, pFont700, color4, colorPrimary, color2, windowHeight, primaryFont } from '../../utils/utils';



const data = [
  {
    id: 1,
    text: 'Hello, world!',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80',
  },
  {
    id: 2,
    text: 'Hello, world!',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  }
]

const Home = ({navigation}) => {
  
  const {topUsers} = useContext(UserContext);
  const {wallPosts} = useContext(PostContext);

  useEffect(() => {
      LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])


  return (

    <ScrollView style={{backgroundColor: bgColor}}>

      <View style = {styles.container}>

            <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
              <View style = {styles.topUsers}>
                {topUsers.map((user, index) => {
                  return(
                    <UserCard key = {index} user = {user["_data"]} />
                  )
                })}             
              </View>
          </ScrollView>   

          {/* <View style = {styles.carousel}>
            <Text style = {styles.header}>Browse Top Recipes this month</Text>
            <Carousel
                width={windowWidth}
                height={windowWidth * 1.2}
                data={data}
                renderItem={({ item }) => <RecipeCarouselItem item = {item}/>}
                autoPlay={true}
                autoPlayInterval={1500}
                mode="scale-fade-in-out"  
            />

            <ActionButtonComponent  />
          </View> */}

          <View style = {styles.posts}>
            {wallPosts.map((post, index) => {
              return(
                <PostCard key = {index} post = {post["_data"]} id = {post.id}/>
              )
            })}
          </View>

        
          
      </View>
      
    </ScrollView>

  );
}

export default Home



const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    alignItems: 'center',
  },

  topUsers: {
    borderBottomWidth: 0.8,
    borderBottomColor: color5,
    paddingHorizontal: windowWidth * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    height: (windowWidth * 0.12) + (windowWidth * 0.10),
    flexDirection: 'row',
    marginBottom: 5,
  },
  
  header: {
    color: color2,
    fontSize: 18,
    fontFamily: primaryFont,
    marginBottom: 5,
    paddingHorizontal: windowWidth * 0.03
  },

  carousel: {
    marginTop: 14,
    marginBottom: 20,
  }

});
