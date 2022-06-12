

import React, { useContext } from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import UserContext from '../context/UserContext/UserContext';
import UploadPhoto from '../screens/Auth/UploadPhoto/UploadPhoto';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const Stack = createStackNavigator();


const AppStack = () => {

    const {userData, userDataLoading} = useContext(UserContext);

    console.log(userData);
    if(userDataLoading){
        return (
            <View style = {styles.loadingContainer}>
                <LoadingSpinner />
            </View>
        )
    }
    if(userData && userData.imageUrl == null){
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

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})