
import React from 'react';

const SVG = ({
    style = {},
    fill = "none",
    stroke= "",
    width= "0%",
    className = "",
    viewBox = "0 0 81.29 139.97"
}) => (
    <svg
        width={width}
        style={style}
        height={width}
        stroke={stroke}
        stroke-width = "4px"
        fill={fill}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path fill={fill} class="cls-1" d="M40.64,6.47s83.58,130,0,130S40.64,6.47,40.64,6.47Z" />
        <path fill={fill} class="cls-1" d="M45.3,123.19c-1.28.1-2.62.14-4,.14-20.54,0-22.76-14.17-22.76-24.29" />
        
    </svg>
)

export default SVG;

