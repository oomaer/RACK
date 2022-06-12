

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import FormButton from '../../../components/FormButton/FormButton';
import {windowWidth, bgColor, pFont500, color2 } from '../../../utils/Styles';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const UploadPhoto = ({route, navigation}) => {
  
  const {name, email, password} = route.params;
  console.log(name, email, password)

  const [image, setImage] = useState();
  const [imageUploading, setImageUploading] = useState(false);
  const [uploadPercentage, setUploadPercentage] = useState(0);


  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true
    })
    .then(image => {
      setImage(image.path);
    })
    .catch(err => {
      console.log(err)
    });
  }

  const onSubmitPress = async () => {
    if(image !== undefined){

      let filename = image.split('/').pop();
      
      const storageRef = storage().ref(filename);
      
      setImageUploading(true);

      const task = storageRef.putFile(image);

      task.on('state_changed', taskSnapshot => {
        setUploadPercentage(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes * 100);
      });
      
      //when the image is uploaded
      task.then(() => {
        storageRef.getDownloadURL()
        .then(response => {
          console.log(response)
          setImageUploading(false);
        })  
      });

      
    }
    else{

    }

    
    
  }

  return (

    <View style = {styles.container}>
      <View style = {styles.content}>
        
        <TouchableOpacity style = {styles.logoContainer} onPress = {uploadImage}>
          {image !== undefined ? (  
            <Image
              style={styles.logoImage}
              source={{uri: image}}
            />
          ):(
            <Image
              style={styles.logoImage}
              source={require('../../../assets/images/defaultuserimage.png')}
            />
          )}
          
        </TouchableOpacity>

        {imageUploading ? (
          <View style = {styles.imageUploading}>
            <Image
              style={styles.loadingImage}
              source={require('../../../assets/images/rolling_color1.gif')}
            />
            <View>
                <Text style={styles.uploadText}>{uploadPercentage}</Text>
            </View>
          </View>
        ):(
          <View style = {styles.buttonsContainer}>
            <View style = {styles.buttonContainer}>
              <FormButton title = 'Submit' icon="login" mode="contained" onPress={onSubmitPress} />
            </View>
          </View>
        )}
        

      </View>
    </View>

  );
}

export default UploadPhoto;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'center',
    flex: 1,
    width: 80 * windowWidth / 100,
  },  
 
  
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 16,
  },
  
  buttonContainer: {
    width: '100%',
    margin: 4
  },


  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoImage: {
    width: 70 * windowWidth / 100,
    height: 70 * windowWidth / 100,
  },

  loadingImage: {
    width: 70,
    height: 70 
  },

  imageUploading: {
    alignItems: 'center',
    marginTop: 16,
  },

  uploadText: {
    fontSize: pFont500,
    color: color2,
    marginTop: 8,
    fontSize: 18,
  }

});
