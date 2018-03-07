import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const HRMessage = props => (
    <View style={[styles.container, { backgroundColor: props.bgColor }]}>
        <Image
          style={{ 
              width: 30, 
              height: 30, 
              alignSelf: 'flex-end'
            }}
          source={{ uri: props.icon }}
        />
        <Text style={[styles.text, { color: props.textColor }]}>
            {props.message}
        </Text>
    </View>     
);

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        padding: 15,
        margin: 15,
        borderColor: '#b5b5b5',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5
    },
    text: {
        fontSize: 18,
        marginLeft: 10
    }
});

export default HRMessage;
