

import React, {useContext, useState} from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import AuthContext from '../../context/AuthContext/AuthContext';
import UserContext from '../../context/UserContext/UserContext';
import {windowWidth, bgColor, color3, pFont500, pFont600, pFont700 } from '../../utils/utils';

const Home = ({navigation}) => {
  
  const {user, logout} = useContext(AuthContext);
  const {userData} = useContext(UserContext);
  // console.log(userData)

  return (

    <View style = {styles.container}>
        <Text style = {styles.errorMsg}>Hello this is {userData.name}</Text>
        <Button title = 'logout' onPress = {() => logout()} />
    </View>

  );
}

export default Home



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'center',
    flex: 1,
    width: 80 * windowWidth / 100,
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
  }

});
