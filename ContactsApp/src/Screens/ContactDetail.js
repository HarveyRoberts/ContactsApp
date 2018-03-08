import React from 'react';
import { StyleSheet, Modal, Text, View,TouchableHighlight, FlatList,ScrollView, Image, TextInput } from 'react-native';
import HRBtn from '../UI/HRButtons/HRBtn';

export default class ContactDetail extends React.Component {
  render() {
    return (
        <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.visible}
          onRequestClose={() => {}}>
          <View style={{padding: 20, flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableHighlight
                onPress={this.props.onCloseBtn}>
                <Text style={{fontSize:25}}>X</Text>
              </TouchableHighlight>
          </View>
          <View style={{alignItems:'center'}}>
              <Image style={{height:150,width:150}} source={this.props.img}/>
              <Text style={{fontSize: 25,marginTop:15}}>{this.props.textContent}</Text>
              <HRBtn 
                large  
                bgColor='#ff4444' 
                width={'80%'} 
                onPress={this.props.onDeleteBtnPress}
              >
                Supprimer Le Contact
              </HRBtn>
          </View>
        </Modal>
      </View>
    );
  }
}
