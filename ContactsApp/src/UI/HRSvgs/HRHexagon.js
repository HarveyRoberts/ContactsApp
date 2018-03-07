import React from 'react';
import { Svg } from 'expo';

const HRHexagon = (props) => (
    /**PROPS:
     * width: width of the hexagon
     * height: height of the hexagon
     * color: color of the hexagon
     * style: style of the hexagon
     * children: child components 
     */
    <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 100 100" 
    preserveAspectRatio="none"
    style={props.style}
    >
        <Svg.Polygon 
        points="0,25 50,0 100,25 100,75 50,100 0,75"
        fill={props.color} 
        />
        {props.children}
    </Svg>
);

export default HRHexagon;
