

import React, { useContext } from 'react';
import {StyleSheet, View} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';


import UserContext from '../context/UserContext/UserContext';
import UploadPhoto from '../screens/Auth/UploadPhoto/UploadPhoto';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import Root from './Root';

import EditProfile from '../screens/User/EditProfile/EditProfile';


// const Drawer = createDrawerNavigator();


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
            <>
                <Root />
                
                {/* <Drawer.Navigator>
                    <Drawer.Screen name="EditProfile" component={EditProfile} />
                </Drawer.Navigator> */}

            </>
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