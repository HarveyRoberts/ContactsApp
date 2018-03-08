import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';

Navigation.registerComponent("ContactsApp.AuthScreen", () => AuthScreen)


Navigation.startSingleScreenApp({
  screen: {
    screen: 'ContactsApp.AuthScreen', // unique ID registered with Navigation.registerScreen
    title: 'Login', // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  }
});









/*import React from 'react';
import { StyleSheet, Text, View, FlatList,ScrollView, TextInput } from 'react-native';
import {connect} from 'react-redux';
import HRBtn from './src/UI/HRButtons/HRBtn';
import ContactDetail from './src/main/ContactDetail';
import HRListItemWithImg from './src/UI/HRLists/HRListItems/HRListItemWithImg';
import {addContact, selectContact, deleteContact, deselectContact} from './src/store/actions';

class App extends React.Component {
  state= {
    contactNameTextInput: ''
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
    this.setState({contactNameTextInput: ''})
    this.props.onAddContact(this.state.contactNameTextInput);
    
  }
  removeContact = () => {
    this.props.onDeleteContact();
  }
  selectContact = (contact) => {
    this.props.onSelectContact(contact);
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
          <Text>Appuiez pour voir les détails</Text>
          <FlatList
          style={{flex:1}}
            data={this.props.contacts}
            renderItem={(info) => (
              <HRListItemWithImg 
              imgSrc={{uri:info.item.image}} 
              rightBtn
              rightBtnText='Voir'
              onRightBtnPress={() => this.props.onSelectContact(info.item)}
              key={info.index} 
              onPress={() => this.props.onSelectContact(info.item)}
              title={info.item.name} />
            )}
          />

        </View>
        <ContactDetail 
        visible={this.props.selectedContact !== null} 
        onCloseBtn={() => this.props.onDeselectContact()}
        img={{uri: this.props.selectedContact ? this.props.selectedContact.image : null}}
        textContent={this.props.selectedContact ? this.props.selectedContact.name : null}
        onDeleteBtnPress={() => this.props.onDeleteContact()}
        />
      </ScrollView>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
});

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts,
    selectedContact: state.contacts.selectedContact
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: (name) => dispatch(addContact(name)),
    onDeleteContact: () => dispatch(deleteContact()),
    onSelectContact: (contact) => dispatch(selectContact(contact)),
    onDeselectContact: () => dispatch(deselectContact())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App); */
