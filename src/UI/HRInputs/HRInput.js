import React from 'react';
import { TextInput, View, StyleSheet, Image } from 'react-native';

const HRInput = props => (
    <View style={[styles.container, { backgroundColor: props.bgColor }]}>
        <Image
          style={{ 
              width: 33,
              height: 30, 
              marginTop: 1, 
              marginRight: 10, 
              opacity: 0.3, 
              backgroundColor: props.iconLeftColor }}
          source={{ uri: props.iconLeft }}
        />
        <TextInput
        style={{ fontSize: 20, flex: 1, color: props.textColor }}
        underlineColorAndroid='transparent'
        {...props}
        />
        <Image
          style={{ 
              width: 33, 
              height: 30, 
              marginTop: 1, 
              marginLeft: 10, 
              alignSelf: 'flex-end', 
              opacity: 0.3, 
              backgroundColor: props.iconRightColor }}
          source={{ uri: props.iconRight }}
        />
    </View>     
);

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        padding: 15,
        margin: 15,
        borderColor: '#b5b5b5',
        flexDirection: 'row'
    }
});

export default HRInput;
