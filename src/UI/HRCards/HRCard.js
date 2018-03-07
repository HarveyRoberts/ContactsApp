import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo';

const HRCard = props => (
    /**PROPS:
     * onPress: on press event of the container
     * style: style of the container
     * colors: colors of the gradient container
     * start: position of the first color of the grdient container
     * end: position of the last color of the grdient container
     * iconStyle: style of the icon
     * iconName: name of the icon
     * iconSize: size of the icon
     * iconColor: color of the icon
     * text: text content of the text
     */
    <TouchableOpacity onPress={props.onPress}>
        <LinearGradient 
                style={[styles.container, props.style]}
                colors={props.colors}
                start={props.start}
                end={props.end}
        >
                <View style={styles.innerCircle}>
                    <Icon 
                    style={[styles.icon, props.iconStyle]} 
                    name={props.iconName || 'dumbbell'}
                    size={props.iconSize || 55}
                    color={props.iconColor || 'white'}
                    />
                </View>
                <Text style={styles.text}>{props.text}</Text>
            </LinearGradient>
    </TouchableOpacity>  
);

const styles = StyleSheet.create({
    container: {
        margin: '5%',
        marginTop: '2.5%',
        marginBottom: '2.5%',
        padding: '5%',
        paddingTop: '6%',
        paddingBottom: '6%',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 7,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        borderRadius: 5
    },
    text: {
        fontSize: 20,
        width: '45%',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
        //fontFamily: 'sans-serif'
    },
    innerCircle: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        width: 75,
        height: 75,
    },
    icon: {
        alignSelf: 'center'
    }
});

export default HRCard;
