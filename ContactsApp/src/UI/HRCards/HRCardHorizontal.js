import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const HRCard = props => (
    /**PROPS:
     * style: style of the container
     * bgImage: source of the image
     * colors: colors of the gradient container
     * start: position of the first color of the grdient container
     * end: position of the last color of the grdient container
     * iconStyle: style of the icon
     * iconName: name of the icon
     * iconSize: size of the icon
     * iconColor: color of the icon
     * text: text content of the text
     */
    <LinearGradient 
        style={[styles.container, props.style]}
        colors={props.colors}
        start={props.start}
        end={props.end}
    >
            {props.children} 
            <View style={styles.bgCircle} />
            <View style={styles.circle}>
                <Icon 
                style={[styles.icon, props.iconStyle]} 
                name={props.iconName || 'dumbbell'}
                size={props.iconSize || SCREEN_WIDTH * 0.16}
                color={props.iconColor || 'white'}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <Image
            style={styles.bgImage}
            source={props.bgImage}
            />
        </LinearGradient>
);

const styles = StyleSheet.create({
    container: {
        marginTop: SCREEN_HEIGHT * 0.04,
        width: SCREEN_WIDTH * 0.63,
        alignSelf: 'center',
        justifyContent: 'space-between',
        height: SCREEN_HEIGHT * 0.45,
        elevation: 11,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 9,
        shadowOffset: { width: 0, height: 4 },
        borderRadius: 10
    },
    bgImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        borderRadius: 10,
        opacity: 0.08
    },
    bgCircle: {
        backgroundColor: 'black',
        opacity: 0.05,
        borderRadius: 500,
        alignSelf: 'center',
        width: SCREEN_WIDTH * 0.28,
        height: SCREEN_WIDTH * 0.28,
        marginTop: SCREEN_HEIGHT * 0.065,
        position: 'absolute'
    },
    circle: {
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 500,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: SCREEN_HEIGHT * 0.08,
        width: SCREEN_WIDTH * 0.23,
        height: SCREEN_WIDTH * 0.23,
    },
    icon: {
        alignSelf: 'center',
    },
    textContainer: {
        justifyContent: 'center',
        width: '70%',
        height: SCREEN_HEIGHT * 0.12,
        marginBottom: SCREEN_HEIGHT * 0.08,
        alignSelf: 'center',
    },
    text: {
        fontSize: SCREEN_WIDTH * 0.070,
        textAlign: 'center',
        color: 'white',
        //fontFamily: 'sans-serif'
    }
});

export default HRCard;
