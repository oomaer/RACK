

import React, {useState, useContext} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Image} from 'react-native';
import FormButton from '../../../components/FormButton/FormButton';
import FormInput from '../../../components/FormInput/FormInput';
import {windowWidth, bgColor, color3, pFont500 } from '../../../utils/Styles';
import NavigationButton from '../../../components/NavigationButton/NavigationButton';
import AuthContext from '../../../context/AuthContext/AuthContext';

const Register = ({navigation}) => {

  const dispatch = useDispatch();
  const name = useSelector(state => state.user.name);
  const email = useSelector(state => state.user.email);
  const password = useSelector(state => state.user.password);
  

  const [errorMsg, setErrorMsg] = useState('');  

  const handleSignUp = () => {
    if(name === ''){
      setErrorMsg('Name cannot be left empty');
    }
    else if(email === ''){
      setErrorMsg('Email cannot be left empty');
    }
    else if(password === ''){
      setErrorMsg('Password cannot be left empty');
    }
  
    else{
         
      navigation.navigate('UploadPhoto', {name, email, password});
  
    }

  }


  const onNameChange = (text) => {
    dispatch({type: "CHANGE_NAME", payload: text})
  }

  const onEmailChange = (text) => {
    dispatch({type: "CHANGE_EMAIL", payload: text})
    
  }

  const onPasswordChange = (text) => {
    dispatch({type: "CHANGE_PASSWORD", payload: text})
    
  }

  return (
    <View style = {styles.container}>
      <View style = {styles.content}>
        
        <View style = {styles.logoContainer}>
          <Image
            style={styles.logoImage}
            source={require('../../../assets/images/logo2.png')}
          />
        </View>

        <View style = {styles.navigate}>
          <NavigationButton title='Sign Up' onPress = {() => {}} active = {true}/>
          <Text style = {styles.slash}> / </Text>
          <NavigationButton title='Login' onPress = {() => {navigation.navigate('Login')}} active = {false}/>
        </View>

      
        <View style = {styles.inputContainer}>
          <Text style = {styles.label}>Name: </Text>
          <FormInput onChangeText = {onNameChange} value = {name} placeholder = 'Enter Name' />  
        </View>

        <View style = {styles.inputContainer}>
          <Text style = {styles.label}>Email: </Text>
          <FormInput onChangeText = {onEmailChange} value = {email} placeholder = 'Enter Email'/>  
        </View>

        <View style = {styles.inputContainer}>
          <Text style = {styles.label}>Password: </Text>
          <FormInput onChangeText = {onPasswordChange} value = {password} secureTextEntry placeholder = 'Enter Password' />  
        </View>

        <View style = {styles.buttonsContainer}>
          <View style = {styles.buttonContainer}>
            <FormButton title='Sign Up' onPress={handleSignUp} icon="account-plus" mode="contained"/> 
          </View>
        </View>
      
        <Text style= {styles.errorMsg}>{errorMsg}</Text> 
        
      </View>
    
    </View>

  );
}

export default Register;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: 80 * windowWidth / 100,
  },  
  navigate: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-end',
  },
  slash: {
    fontSize: 24,
    color: color3,
  },
  inputContainer: {
    padding: 10,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: color3,
    fontFamily: pFont500,
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

