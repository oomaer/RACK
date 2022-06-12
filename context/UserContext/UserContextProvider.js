
import React, { useContext, useState, useEffect } from "react";
import UserContext from "./UserContext";
import firestore from '@react-native-firebase/firestore';
import AuthContext from "../AuthContext/AuthContext";


function UserContextProvider({children}) {
  
    const {user} = useContext(AuthContext);
    const [userData, setUserData] = useState({});
    const [userDataLoading, setUserDataLoading] = useState(true);

    const getUserData = () => {
        setUserDataLoading(true);
    
        firestore().collection('Users').doc(user.uid).get().
        then(res => {
            setUserData(res["_data"])
            setUserDataLoading(false);
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        getUserData();
    }, [])


    const updateUserImage = (newImageUrl) => {
        
        firestore()
        .collection('Users')
        .doc(user.uid)
        .update({
            imageUrl: newImageUrl
        })
        .then(() => {
            console.log('User Image updated!');
            getUserData();
        })
        .catch(err => console.log(err));

    }

    return (
        <UserContext.Provider
            value={{
                userData,
                setUserData,
                updateUserImage,
                userDataLoading,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
