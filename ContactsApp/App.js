import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import HRBtn from './src/UI/HRButtons/HRBtn';
import HRListItem from './src/UI/HRLists/HRListItems/HRListItem';

export default class App extends React.Component {
  state= {
    contactNameTextInput: '',
    contacts: ['hi','there']
  }
  //Quand on utilise cette syntax pour déclarer une fonction
  //la variable this fait référence à la class App
  contactNameTextChange = (text) => {
    this.setState({contactNameTextInput: text});
  }
  addContact = () => {
    if(this.state.contactNameTextInput === ''){
      return;
    }
    this.setState({
      contactNameTextInput: '', 
      contacts: [...this.state.contacts,this.state.contactNameTextInput]
    });
    
  }
  removeContact = (contact) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter((aContact,i) => {
          return i !==contact;
        })
      }
    })
  }
  render() {
    return (
      <ScrollView style={{flex:1}}>
        <View style={styles.container}>
          <TextInput 
          style={{width:'80%'}}
          onChangeText={this.contactNameTextChange}
          value={this.state.contactNameTextInput} 
          />
          <HRBtn large onPress={this.addContact}>
          Ajouter
          </HRBtn>
          <Text>Appuiez pour supprimer</Text>
          {this.state.contacts.map((contact, i) => {
            return (
              <HRListItem key={i} onPress={() => this.removeContact(i)} title={contact} />
            );
          })}
        </View>   
      </ScrollView>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
});
