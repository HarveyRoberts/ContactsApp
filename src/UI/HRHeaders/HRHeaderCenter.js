import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HRHeaderCenter = props => (
    /*
    -> PROPS:
        bgColor = BackgroundColor style on main view
        title = Text of the title
        titleColor = Color of the main title
        titleSize = Font Size of the main title
        subtitle = Text of the subtitle
        subtitleColor = Color of the subtitle
        subtitleSize = Font Size of the subtitle
        children = access to child components
    */
    <View style={[styles.container, { backgroundColor: props.bgColor }]}>
        <Text style={[styles.title, { color: props.titleColor }]}>
            {props.title}
        </Text>
        <Text 
        style={[
            styles.subtitle, 
            { 
                color: props.subtitleColor 
            }
        ]}
        >
            {props.subtitle}
        </Text>
        {props.children}
    </View>
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

export default HRHeaderCenter;
