// import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import auth from '@react-native-firebase/auth';
import AuthContext from "./AuthContext";


function AuthContextProvider({children}) {
  
    const [user, setUser] = useState(null);


    const register = async (user) => {
        try{
            await auth().createUserWithEmailAndPassword(user.email, user.password);
        }
        catch(err){
            console.log(err);
        }
        
    }

    const login = async (user) => {
        try{
            await auth().signInWithEmailAndPassword(user.email, user.password);
        }
        catch(err){
            console.log(err);
        }
    }

    const logout = async () => {
        try{
            await auth().signOut();
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                register,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
