import React from 'react';
import { View, TextInput } from 'react-native';
import HRBtn from '../../UI/HRButtons/HRBtn';
import startTabs from '../MainTabs/startMainTabs';

class AuthScreen extends React.Component {
  render() {
    return (
        <View >

          <HRBtn large onPress={startTabs}>
          Se connecter
          </HRBtn>
          
        </View> 
    );
  }
}


export default AuthScreen;