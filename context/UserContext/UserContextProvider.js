
import React, { useContext, useState, useEffect } from "react";
import UserContext from "./UserContext";
import firestore from '@react-native-firebase/firestore';
import AuthContext from "../AuthContext/AuthContext";


function UserContextProvider({children}) {
  
    const {user} = useContext(AuthContext);
    const [userData, setUserData] = useState({});
    const [topUsers, setTopUsers] = useState([]);
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

    const getTopUsers = () => {
        firestore().collection('Users').limit(10).get().
        then(res => {
            setTopUsers(res.docs);
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        getUserData();
        getTopUsers();
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
                topUsers,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
