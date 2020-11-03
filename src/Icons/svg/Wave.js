
import React from 'react';

const SVG = ({
    style = {},
    fill = "none",
    stroke= "",
    width= "0%",
    className = "",
    viewBox = "0 0 143.79 78.31"
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
        <path fill={fill} class="cls-1" d="M3.5,3.5c4.74,18.38,40,17.87,45.6,0" />
        <path  fill={fill}class="cls-1" d="M49.1,3.5c4.74,18.38,40,17.87,45.59,0" />
        <path  fill={fill}class="cls-1" d="M94.69,3.5c4.74,18.38,40,17.87,45.6,0" />
        <path fill={fill} class="cls-1" d="M3.5,32.36c4.74,18.38,40,17.87,45.6,0" />
        <path fill={fill} class="cls-1" d="M49.1,32.36c4.74,18.38,40,17.87,45.59,0" />
        <path fill={fill} class="cls-1" d="M94.69,32.36c4.74,18.38,40,17.87,45.6,0" />
        <path  fill={fill}class="cls-1" d="M3.5,61.22c4.74,18.38,40,17.87,45.6,0" />
        <path fill={fill} class="cls-1" d="M49.1,61.22c4.74,18.38,40,17.87,45.59,0" />
        <path fill={fill} class="cls-1" d="M94.69,61.22c4.74,18.38,40,17.87,45.6,0" />
    </svg>
)

export default SVG;

