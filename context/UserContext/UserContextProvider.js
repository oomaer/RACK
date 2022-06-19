
import React, { useContext, useState, useEffect } from "react";
import UserContext from "./UserContext";
import firestore from '@react-native-firebase/firestore';
import AuthContext from "../AuthContext/AuthContext";


function UserContextProvider({children}) {
  
    const {user} = useContext(AuthContext);
    const [userData, setUserData] = useState({});
    const [topUsers, setTopUsers] = useState([]);
    const [userDataLoading, setUserDataLoading] = useState(true);


    const updateUserName = async (name) => {
        return await firestore()
        .collection('Users')
        .doc(user.uid)
        .update({name: name})
    }

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


    const updateUserInPosts = (userData) => {

        //updating user data in posts
        firestore()
        .collection('Posts')
        .where('user.uid', '==', user.uid)
        .get()
        .then(posts => {
            posts.docs.forEach(post => {
                
                firestore()
                .collection('Posts')
                .doc(post.id)
                .update({user: userData})
                .then(() => console.log('User updated in posts'))
                .catch(err => console.log(err));

            })
        })
        .catch(err => console.log(err));

        //updating user data in post likes
        firestore()
        .collection('Posts')
        .get()
        .then(posts => {
            posts.docs.forEach(post => {
                
                let likedBy = post._data.likedBy;
                for(let i = 0; i < likedBy.length; i++){
                    if(likedBy[i].uid === user.uid){
                        likedBy[i] = userData;
                    }
                }
                
                firestore()
                .collection('Posts')
                .doc(post.id)
                .update({likedBy: likedBy})
                .then(() => console.log('User updated in post likes'))
                .catch(err => console.log(err));

            })
        })
    
    }



    useEffect(() => {
        getUserData();
        getTopUsers();   
        
        const subscriber = firestore()
        .collection('Users')
        .doc(user.uid)
        .onSnapshot(documentSnapshot => {
            console.log(documentSnapshot.exists)
          if(documentSnapshot.metadata._metadata[0] === false){
    
            updateUserInPosts(documentSnapshot.data());
          }
          
        });
        // Stop listening for updates when no longer required
        return () => subscriber();


    }, [user.uid])


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

    const changeUserImage = async (newImageUrl) => {
        
        return await firestore()
        .collection('Users')
        .doc(user.uid)
        .update({
            imageUrl: newImageUrl
        })

    }


    return (
        <UserContext.Provider
            value={{
                userData,
                setUserData,
                updateUserImage,
                userDataLoading,
                topUsers,
                updateUserName,
                changeUserImage,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
