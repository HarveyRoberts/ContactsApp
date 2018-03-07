import React from 'react';
import { LinearGradient } from 'expo';

const HRContainerGradient = props => (
    /*
    -> PROPS:
        style = style of the hole container
        colors = An array of colors to make the gradient
        start = An array of the position of the first color
        end = An array of the position of the last color
        children = access to child components
    */
    //Used as a basic LinearGradient Component but with a flex 1 styles property
    <LinearGradient 
    style={[{ flex: 1 }, props.style]} 
    colors={props.colors}
    start={props.start}
    end={props.end}
    >
     { props.children }
    </LinearGradient>
);

export default HRContainerGradient;
