import React from 'react';
import { StyleSheet, Text, View, FlatList,ScrollView, TextInput } from 'react-native';
import {connect} from 'react-redux';
import HRBtn from '../../UI/HRButtons/HRBtn';
import HRListItemWithImg from '../../UI/HRLists/HRListItems/HRListItemWithImg';
import {addContact} from '../../store/actions';

class ContactsScreen extends React.Component {
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
  onSelectContact = (contact) => {
    this.props.navigator.push({
        screen: 'ContactsApp.ContactDetailScreen', 
        passProps: contact
      });
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
              rightBtnText='>'
              rightBtnTextColor='black'
              rightBtnBgColor='transparent'
              onRightBtnPress={() => this.onSelectContact(info.item)}
              key={info.index} 
              onPress={() => this.onSelectContact(info.item)}
              title={info.item.name} />
            )}
          />

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

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: (name) => dispatch(addContact(name))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactsScreen);
