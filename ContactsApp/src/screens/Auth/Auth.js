import React from 'react';
import { View, TextInput } from 'react-native';
import HRBtn from '../../UI/HRButtons/HRBtn';
import startTabs from '../MainTabs/startMainTabs';

class AuthScreen extends React.Component {
  state= {
    email: '',
    password: '',
  }
  render() {
    return (
        <View style={{alignItems:'center'}}>
          <TextInput 
          style={{width:'80%', height: 80}}
          onChangeText={(text) => this.setState({email: text})}
          placeholder='Email'
          value={this.state.email} 
          />
          <TextInput 
          style={{width:'80%', height: 80, marginBottom:20}}
          onChangeText={(text) => this.setState({password: text})}
          placeholder='Mot de passe'
          value={this.state.password} 
          />
          <HRBtn large onPress={startTabs}>
          Se connecter
          </HRBtn>
          
        </View> 
    );
  }
}


export default AuthScreen;