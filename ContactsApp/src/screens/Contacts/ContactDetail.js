import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight, FlatList,ScrollView, Image, TextInput } from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {deleteContact} from '../../store/actions';
import HRBtn from '../../UI/HRButtons/HRBtn';


class ContactDetail extends React.Component {
  onDeleteContact = () => {
    this.props.onDeleteContact(this.props.id);
    this.props.navigator.pop({
      animated: true, // does the pop have transition animation or does it happen immediately (optional)
      animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
    });
  }
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
                onPress={() => this.onDeleteContact()}
              >
                Supprimer Le Contact
              </HRBtn>
          </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: (id) => dispatch(deleteContact(id))
  }
}

export default connect(null,mapDispatchToProps)(ContactDetail);
