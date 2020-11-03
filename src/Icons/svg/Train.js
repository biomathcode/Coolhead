
import React from 'react';

const SVG = ({
    style = {},
    fill = "none",
    stroke= "",
    width= "0%",
    className = "",
    viewBox = "0 0 113.61 151.47"
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
    <line fill={fill} class="cls-1" x1="24.15" y1="4.5" x2="24.15" y2="146.97" />
    <line fill={fill} class="cls-1" x1="94.02" y1="4.5" x2="94.02" y2="146.97" />
    <line fill={fill} class="cls-1" x1="4.5" y1="19.33" x2="108.09" y2="19.33" />
    <line fill={fill} class="cls-1" x1="5.52" y1="45.32" x2="109.11" y2="45.32" />
    <line fill={fill} class="cls-1" x1="5.52" y1="75.73" x2="109.11" y2="75.73" />
    <line  fill={fill}class="cls-1" x1="5.52" y1="106.15" x2="109.11" y2="106.15" />
    <line fill={fill} class="cls-1" x1="5.52" y1="132.14" x2="109.11" y2="132.14" />

    </svg>
)

export default SVG;

