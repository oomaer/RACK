

import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import { colorPrimary, color2, } from '../../../utils/utils';

const shadowStyle = {
    elevation: 33,
    shadowColor: "#000000",
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
        height: 1,
        width: 0
    }
    }
const ActionButtonComponent = () => {

    const [image, setImage] = useState();

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

    const takePhoto = () => {
        ImagePicker.openCamera({
          width: 1200,
          height: 780,
          cropping: true,
        }).then((image) => {
          console.log(image);
          const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
          setImage(imageUri);
        })
        .catch(err => console.log(err));
    };

    
    return(
        <ActionButton buttonColor={colorPrimary}
            shadowStyle={shadowStyle}
        >
            <ActionButton.Item  buttonColor={color2} title="Gallery" onPress={uploadImage}>
            <Icon name="images-outline" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item  buttonColor={color2} title="Camera" onPress={takePhoto}>
            <Icon name="camera-outline" style={styles.actionButtonIcon} />
            </ActionButton.Item>
        </ActionButton>
    )
}

export default ActionButtonComponent;

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 24,
        color: 'white',
      }
});    