import React from 'react';
import { TouchableOpacity, Dimensions, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const HRBtn = props => (
    /* See HRBtn for details */
    <TouchableOpacity onPress={props.onPress} >
    {/* Replaced View with LinearGradient from Expo */}
        <LinearGradient 
            style={[
                styles.ButtonContainer, 
                styles.ButtonMedium,
                props.xl && styles.ButtonXL, 
                props.large && styles.ButtonBig, 
                props.small && styles.ButtonSmall, 
                props.medium && styles.ButtonMedium,
                { 
                    alignSelf: props.alignSelf, 
                    borderRadius: props.roundness || 500,
                    width: props.width || (SCREEN_WIDTH * 0.5)
                }
            ]}
            /* Passed the colors of the gradient through props */
            colors={props.colors || ['#22D9FF', '#039DEF']}
            /* Passed the start point through props */
            start={props.start || [1, 0]}
            /* Passed the end point through props */
            end={props.end || [0, 1]}
        >
            <Text 
                style={[
                    styles.TextMedium,
                    props.xl && styles.TextXL,
                    props.large && styles.TextBig, 
                    props.small && styles.TextSmall, 
                    props.medium && styles.TextMedium, 
                    { color: props.textColor || 'white' }
                ]}
            >
                {props.children || 'Button'}
            </Text>
        </LinearGradient>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    /* Container styles */
    ButtonContainer: {
        margin: '3%',
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    /* XL prop styles */
    ButtonXL: {
        height: SCREEN_HEIGHT * 0.1
    },
    TextXL: {
        fontSize: SCREEN_HEIGHT * 0.04,
        marginLeft: '14%',
        marginRight: '14%'
    },
    /* Large prop styles */
    ButtonBig: {
        height: SCREEN_HEIGHT * 0.09
    },
    TextBig: {
        fontSize: SCREEN_HEIGHT * 0.036,
        marginLeft: '11%',
        marginRight: '11%'
    },
    /* Medium prop styles (set by default) */
    ButtonMedium: {
        height: SCREEN_HEIGHT * 0.075
    },
    TextMedium: {
        fontSize: SCREEN_HEIGHT * 0.032,
        marginLeft: '8%',
        marginRight: '8%'
    },
    /* Small prop styles */
    ButtonSmall: {
        height: SCREEN_HEIGHT * 0.070
    },
    TextSmall: {
        fontSize: SCREEN_HEIGHT * 0.030,
        marginLeft: '5%',
        marginRight: '5%'
    }
});


export default HRBtn;

