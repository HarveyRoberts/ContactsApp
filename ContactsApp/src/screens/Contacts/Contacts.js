import React from 'react';
import { StyleSheet, Text, View, FlatList,ScrollView, TextInput } from 'react-native';
import {connect} from 'react-redux';
import HRBtn from '../../UI/HRButtons/HRBtn';
import HRListItemWithImg from '../../UI/HRLists/HRListItems/HRListItemWithImg';
import {addContact} from '../../store/actions';

class ContactsScreen extends React.Component {
  state= {
    searchContactName: ''
  }
  searchContactNameTextChange = (text) => {
    this.setState({searchContactName: text});
  }
  navToAddContact = () => {
    this.props.navigator.push({
        screen: 'ContactsApp.AddContactScreen',
        title: 'Créer un contact'
      });
  }
  onSelectContact = (contact) => {
    this.props.navigator.push({
        screen: 'ContactsApp.ContactDetailScreen', 
        passProps: contact
      });
  }
  render() {
    return (
        <View style={styles.container}>
        <HRBtn large onPress={this.navToAddContact}>
          +
          </HRBtn>
          <TextInput 
          style={{width:'80%'}}
          onChangeText={this.searchContactNameTextChange}
          placeholder='Rechercher'
          value={this.state.searchContactName} 
          />
          <Text style={{marginBottom:20}}>Appuiez pour voir les détails</Text>
          <ScrollView style={{flex:1}}>
          <FlatList
          style={{flex:1}}
            data={this.props.contacts}
            renderItem={(info) => (
              <HRListItemWithImg 
              imgSrc={{uri:info.item.images[0] || 'http://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png'}} 
              rightBtn
              key={info.item.id}
              rightBtnText='>'
              rightBtnTextColor='black'
              rightBtnBgColor='transparent'
              onRightBtnPress={() => this.onSelectContact(info.item)} 
              onPress={() => this.onSelectContact(info.item)}
              title={info.item.firstname + ' ' + info.item.surname} />
            )}
          />
          </ScrollView>

        </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex:1
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
