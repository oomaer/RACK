

import React, { useContext, useEffect, useState } from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import UserContext from '../context/UserContext/UserContext';
import firestore from '@react-native-firebase/firestore';
import UploadPhoto from '../screens/Auth/UploadPhoto/UploadPhoto';
import AuthContext from '../context/AuthContext/AuthContext';

const Stack = createStackNavigator();


const AppStack = () => {

    const {userData, userDataLoading} = useContext(UserContext);

    if(userDataLoading){
        return <Text>Loading</Text>
    }
    if(userData.imageUrl == null){
        return (
            <UploadPhoto />
        )
    }
    else{
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        )
    }
    
}

export default AppStack;