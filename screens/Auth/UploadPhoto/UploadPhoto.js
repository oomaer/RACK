

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import FormButton from '../../../components/FormButton/FormButton';
import {windowWidth, bgColor, color3, pFont500, pFont600, pFont700 } from '../../../utils/Styles';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

const UploadPhoto = ({navigation}) => {
  
  const [image, setImage] = useState();
  const [errorMsg, setErrorMsg] = useState();

 


  const uploadImage = () => {
    console.log('here');
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
    console.log(image);
    let filename = image.split('/').pop();
    const reference = storage().ref(filename);
  }

  return (

    <View style = {styles.container}>
      <View style = {styles.content}>
        
        {/* <View style = {styles.logoContainer}>
          <Image
            style={styles.logoImage}
            source={require('../../../assets/images/logo2.png')}
          />
        </View> */}


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

        <View style = {styles.buttonsContainer}>
          <View style = {styles.buttonContainer}>
            <FormButton title = 'Upload' icon="login" mode="contained" onPress={onSubmitPress} />
          </View>
        </View>

        <Text style= {styles.errorMsg}>{errorMsg}</Text> 

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

  errorMsg: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },

  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoImage: {
    width: 70 * windowWidth / 100,
    height: 70 * windowWidth / 100,
  }

});
