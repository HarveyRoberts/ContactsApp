import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const HRHeaderBasic = props => (
    /* Set container styles by default but can be overridden */
   <View style={[styles.container, props.style]} >
        {/* This is an optional icon that can be used */}
        <Image
          style={{ width: 54, height: 50, margin: 5, marginRight: 0, marginTop: 4 }}
          /* The icon prop will specify the uri of the image */
          source={{ uri: props.icon }}
        />
        {/* Added margin so the icon is not touching the start of the text */}
        <View style={{ marginLeft: 10 }}>
        {/* Main text (title prop) */}
            <Text style={{ fontSize: 24, fontWeight: '700', color: props.titleColor }}>
                {props.title}
            </Text>
            {/* Secondary Text (subtitile prop) */}
            <Text style={{ fontSize: 18, color: props.subtitleColor }}>
                {props.subtitle}
            </Text>
        </View>
   </View>
);

const styles = StyleSheet.create({
    /* Container style */
    container: {
        flexDirection: 'row',
        margin: 10,
        paddingRight: 80
    }

});

export default HRHeaderBasic;

