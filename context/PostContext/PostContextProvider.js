
import React, { useContext, useState, useEffect } from "react";
import PostContext from "./PostContext";
import firestore from '@react-native-firebase/firestore';
import firebase from "@react-native-firebase/app"


function PostContextProvider({children}) {

    const [wallPosts, setWallPosts] = useState([]);
   
    const addNewPost = (post) => {
        firestore()
        .collection('Posts')
        .add(post)
        .then(() => {
            console.log('Post added!');
        })
        .catch(err => console.log(err));
    }

    const getWallPosts = () => {
        firestore()
        .collection('Posts')
        .orderBy('createdAt', 'desc')
        .get()
        .then(response => {
            setWallPosts(response.docs)
        })
        .catch(err => console.log(err));
    }

    const updatePosts = () => {
        firestore()
        .collection('Posts')
        .orderBy('createdAt', 'desc')
        .get()
        .then(response => {
            setWallPosts(response.docs)
        })
        .catch(err => console.log(err));
    }

    const addLike = (id, userData) => {
        firestore()
        .collection('Posts')
        .doc(id)
        .update({
            likedBy: firebase.firestore.FieldValue.arrayUnion(userData),
        })
        .then(response => {
            console.log("like added");
        })
        .catch(err => console.log(err));
    }

    const removeLike = (id, userData) => {
        firestore()
        .collection('Posts')
        .doc(id)
        .update({
            likedBy: firebase.firestore.FieldValue.arrayRemove(userData),
        })
        .then(response => {
            console.log("like removed");
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        getWallPosts();    
    }, [])

    return (
        <PostContext.Provider
            value={{
                addNewPost,
                wallPosts,
                updatePosts,
                addLike,
                removeLike,
            }}
        >
            {children}
        </PostContext.Provider>
    );
}

export default PostContextProvider;
