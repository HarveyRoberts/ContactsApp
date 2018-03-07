import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';

const HRHeaderCenterGradient = props => (
    <LinearGradient 
    style={[styles.container, { backgroundColor: props.bgColor }]}
    colors={props.colors}
    start={props.start}
    end={props.end}
    >
        <Text style={[styles.title, { color: props.titleColor, fontSize: props.titleSize }]}>
            {props.title}
        </Text>
        <Text
            style={[
                styles.subtitle, 
                { 
                    color: props.subtitleColor, 
                    fontSize: props.subtitleSize 
                }
            ]}
        >
            {props.subtitle}
        </Text>
    </LinearGradient>
);

const styles = StyleSheet.create({
    container: {
        margin: 0,
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    title: {
        fontSize: 25,
    },
    subtitle: {
        fontSize: 15,
    }
});

export default HRHeaderCenterGradient;
