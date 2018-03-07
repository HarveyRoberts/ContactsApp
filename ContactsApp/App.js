import React from 'react';
import { StyleSheet, Text, View, FlatList,ScrollView, TextInput } from 'react-native';
import HRBtn from './src/UI/HRButtons/HRBtn';
import ContactDetail from './src/Screens/ContactDetail';
import HRListItemWithImg from './src/UI/HRLists/HRListItems/HRListItemWithImg';

export default class App extends React.Component {
  state= {
    contactNameTextInput: '',
    contacts: [{name:'Fred', image:'http://www.math.uni-frankfurt.de/~person/_4170854.jpg'},{name:'Bill', image:'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person-279x300.jpg'}],
    selectedContact: {},
    showContactDetail: false
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
      contacts: [...this.state.contacts,{name: this.state.contactNameTextInput, image: 'http://www.math.uni-frankfurt.de/~person/_4170854.jpg'}]
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
          <Text>Appuiez pour voir les détails</Text>
          <FlatList
          style={{flex:1}}
            data={this.state.contacts}
            renderItem={(info) => (
              <HRListItemWithImg 
              rightBtn 
              onRightBtnPress={() => this.removeContact(info.index)} 
              rightBtnText='Supprimer' 
              imgSrc={{uri:info.item.image}} 
              key={info.index} 
              onPress={() => this.setState({selectedContact: info.item, showContactDetail: true})} 
              title={info.item.name} />
            )}
          />

        </View>
        <ContactDetail 
        visible={this.state.showContactDetail} 
        onCloseBtn={() => this.setState({showContactDetail: false})}
        img={{uri: this.state.selectedContact.image}}
        textContent={this.state.selectedContact.name}
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
