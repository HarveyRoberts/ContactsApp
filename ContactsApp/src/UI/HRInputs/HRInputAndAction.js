import React from 'react';
import { TextInput, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HRInputAndAction = props => (
    <View style={[styles.container, { backgroundColor: props.bgColor }]}>
        <View style={styles.inputContainer}>
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
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
            />
            <Image
            style={{ 
                width: 33,
                height: 30, 
                marginLeft: 1,
                marginTop: 1, 
                alignSelf: 'flex-end', 
                opacity: 0.3, 
                backgroundColor: props.iconRightColor }}
            source={{ uri: props.iconRight }}
            />
        </View>
        <TouchableOpacity 
        style={[
            styles.actionContainer, 
            { 
                backgroundColor: props.actionBGColor 
                }
        ]}
        >
            {props.children}
        </TouchableOpacity>
    </View>     
);

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderRadius: 5,
        margin: 15,
        borderColor: '#b5b5b5',
        flexDirection: 'row'
    },
    inputContainer: {
        width: '60%',
        margin: 10,
        flexDirection: 'row'
    },
    actionContainer: {
        width: '35%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HRInputAndAction;
