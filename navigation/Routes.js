import React, {useContext, useEffect, useState} from 'react';
import AuthStack from "./AuthStack";
import AppStack from './AppStack';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import AuthContext from '../context/AuthContext/AuthContext';
import UserContextProvider from '../context/UserContext/UserContextProvider';
import PostContextProvider from '../context/PostContext/PostContextProvider';

const Routes = () => {

    const [initializing, setInitializing] = useState(true);
    const {user, setUser} = useContext(AuthContext);
    
    //Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    else{
        return(
            <NavigationContainer>    
                {user ? (
                    <UserContextProvider>
                        <PostContextProvider>
                            <AppStack /> 
                        </PostContextProvider>
                    </UserContextProvider>
                ):(
  <                 AuthStack />                 
                )}
            </NavigationContainer>
        )

    }
   
}

export default Routes;