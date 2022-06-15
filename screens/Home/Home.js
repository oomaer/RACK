

import React, {useContext, useEffect} from 'react';
import { View, Text, StyleSheet, Button, ScrollView, LogBox} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import ActionButtonComponent from '../../components/Home/ActionButtonComponent/ActionButtonComponent';
// import Carousel from 'react-native-snap-carousel';
import RecipeCarouselItem from '../../components/Home/RecipeCarouselItem/RecipeCarouselItem';
import UserCard from '../../components/Home/UserCard/UserCard';

import UserContext from '../../context/UserContext/UserContext';
import {windowWidth, bgColor, color3, pFont500, pFont600, pFont700, color4, colorPrimary, color2 } from '../../utils/utils';



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


  useEffect(() => {
      LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])


  return (

    <ScrollView style={{backgroundColor: bgColor}}>

      <View style = {styles.container}>

          <View style = {styles.topUsers}>
            <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
              {topUsers.map((user, index) => {
                return(
                  <UserCard key = {index} user = {user["_data"]} />
                )
              })}    
            </ScrollView>            
          </View>

          <View style = {styles.content}>
            <Carousel
                width={400}
                height={400}
                data={data}
                renderItem={({ item }) => <RecipeCarouselItem item = {item}/>}
                autoPlay={true}
                autoPlayInterval={1500}
                mode="parallax"
                
            />
          </View>

          
          
      </View>
      

      <ActionButtonComponent />

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
    borderBottomWidth: 1,
    borderBottomColor: color4,
    
    padding: windowWidth * 0.04,
    height: (windowWidth * 0.18) + (windowWidth * 0.10),
  },
  
  navigate: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-end',
  },
  slash: {
    fontFamily: pFont500,
    fontSize: 24,
    color: color3,
  },
  inputContainer: {
    padding: 10,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: color3,
    fontFamily: pFont500,
  },
  
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 16,
  },
  
  buttonContainer: {
    width: '100%',
    margin: 4
  },

  errorMsg: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },

  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoImage: {
    width: 70 * windowWidth / 100,
    height: 70 * windowWidth / 100,
  },

});
