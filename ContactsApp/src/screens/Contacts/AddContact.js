import React from 'react';
import { StyleSheet, Text, View, FlatList,ScrollView, TextInput } from 'react-native';
import {connect} from 'react-redux';
import HRBtn from '../../UI/HRButtons/HRBtn';
import HRListItemWithImg from '../../UI/HRLists/HRListItems/HRListItemWithImg';
import {addContact} from '../../store/actions';

class ContactsScreen extends React.Component {
  state= {
    surname: '',
    firstname: '',
    address: '',
    mobilePhone: '',
    homePhone: '',
    email: '',
    dateOfBirth: '',

  }
  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  addContact = () => {
    if
    (
        this.state.surname === '' ||
        this.state.firstname === '' ||
        this.state.address === '' ||
        this.state.mobilePhone === '' ||
        this.state.homePhone === '' ||
        this.state.email === '' ||
        this.state.dateOfBirth === ''
    )
    {
      alert("Vous n'avez pas remplis tous les champs")
      return;
    }
    this.setState({
        surname: '',
        firstname: '',
        address: '',
        mobilePhone: '',
        homePhone: '',
        email: '',
        dateOfBirth: '',

    })
    const contact = this.state;
    contact.id = this.makeid();
    contact.images = []
    this.props.onAddContact(this.state);
  }
  render() {
    return (
      <ScrollView style={{flex:1}}>
        <View style={styles.container}>
          <TextInput 
          style={{width:'80%'}}
          onChangeText={(text) => this.setState({surname: text})}
          placeholder='Nom'
          value={this.state.surname} 
          />
          <TextInput 
          style={{width:'80%'}}
          onChangeText={(text) => this.setState({firstname: text})}
          placeholder='Prénom'
          value={this.state.firstname} 
          />
          <TextInput 
          style={{width:'80%'}}
          onChangeText={(text) => this.setState({address: text})}
          placeholder='Adresse'
          value={this.state.address} 
          />
          <TextInput 
          style={{width:'80%'}}
          onChangeText={(text) => this.setState({mobilePhone: text})}
          placeholder='Téléphone portable'
          value={this.state.mobilePhone} 
          />
          <TextInput 
          style={{width:'80%'}}
          onChangeText={(text) => this.setState({homePhone: text})}
          placeholder='Téléphone fixe'
          value={this.state.homePhone} 
          />
          <TextInput 
          style={{width:'80%'}}
          onChangeText={(text) => this.setState({email: text})}
          placeholder='Email'
          value={this.state.email} 
          />
          <TextInput 
          style={{width:'80%'}}
          onChangeText={(text) => this.setState({dateOfBirth: text})}
          placeholder='Date de naissance'
          value={this.state.dateOfBirth} 
          />
            <HRBtn onPress={() => {}}>
          Ajouter une photo
          </HRBtn>
          <HRBtn large onPress={this.addContact}>
          Ajouter
          </HRBtn>
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
