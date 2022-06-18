
import React, { useContext, useState, useEffect } from "react";
import PostContext from "./PostContext";
import firestore from '@react-native-firebase/firestore';



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

    useEffect(() => {
        getWallPosts();    
    }, [])

    return (
        <PostContext.Provider
            value={{
                addNewPost,
                wallPosts,
            }}
        >
            {children}
        </PostContext.Provider>
    );
}

export default PostContextProvider;
