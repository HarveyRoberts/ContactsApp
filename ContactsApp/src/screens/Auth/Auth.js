import React from 'react';
import { View, TextInput } from 'react-native';
import HRBtn from '../../UI/HRButtons/HRBtn';

class App extends React.Component {
  render() {
    return (
        <View >

          <HRBtn large onPress={this.addContact}>
          Se connecter
          </HRBtn>
          
        </View> 
    );
  }
}


export default App;