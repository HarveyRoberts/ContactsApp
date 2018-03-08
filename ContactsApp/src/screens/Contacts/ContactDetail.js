import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight, FlatList,ScrollView, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HRBtn from '../../UI/HRButtons/HRBtn';


export default class ContactDetail extends React.Component {
  render() {
    return (
        <View style={{marginTop: 22}}>
          <View style={{alignItems:'center'}}>
              <Image style={{height:150,width:150}} source={{uri:this.props.image}}/>
              <Text style={{fontSize: 25,marginTop:15}}>{this.props.name}</Text>
              <HRBtn 
                large  
                bgColor='#ff4444' 
                width={'80%'} 
                onPress={this.props.onDeleteBtnPress}
              >
                Supprimer Le Contact
              </HRBtn>
          </View>
      </View>
    );
  }
}
