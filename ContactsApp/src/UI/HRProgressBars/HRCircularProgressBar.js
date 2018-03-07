import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg } from 'expo';

const HRCircularProgressBar = ({
    percentage = 100,
    barEmptyColor = '#178788', 
    barColor = '#09F4B8',
    fill = 'white',
    fillRadius = 46,
    width = 170,
    height = 170,
    children
}) => (
    <View style={{ height, width }}>
            <Svg width={width} height={height} viewBox="0 0 100 100" preserveAspectRatio="none">
                <Svg.Circle cx="50" cy="50" r="50" fill={barEmptyColor} />
                <Svg.Path 
                    d={`M50 50 L50 0 ${createProgressBar(percentage)} Z`}
                    fill={barColor}
                />
                {<Svg.Circle cx="50" cy="50" r={fillRadius} fill={fill} />}
            </Svg>
            <View style={styles.textView}>
                {children}
            </View>
    </View>
);

function createProgressBar(percentage) {
    let perc = percentage;
    if (perc >= 100) { 
        perc = 99.999; 
    }
    // the angle depends on the percentage
    const angle = perc * 2 * (Math.PI / 100);
    const circleRadius = 50;
    const xRadius = circleRadius;
    const yRadius = circleRadius;
    const xRotation = 0;
    let largeArcFlag = 1;
    const sweepFlag = 1;
    const x = circleRadius + (circleRadius * Math.sin(angle));
    const y = circleRadius - (circleRadius * Math.cos(angle));
    if (perc <= 50) {
        largeArcFlag = 0;
    } else {
        largeArcFlag = 1;
    }
    return `A${xRadius} ${yRadius} ${xRotation} ${largeArcFlag} ${sweepFlag} ${x} ${y}`;
}

const styles = StyleSheet.create({
    textView: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HRCircularProgressBar;
