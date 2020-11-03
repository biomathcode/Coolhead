
import React from 'react';

const SVG = ({
    style = {},
    fill = "none",
    stroke= "",
    width= "0%",
    className = "",
    viewBox = "0 0 212.38 224.42"
}) => (
    <svg
        width={width}
        style={style}
        height={width}
        stroke={stroke}
        fill={fill}
        stroke-width = "4px"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path class="cls-1" fill={fill}  d="M182.71,93.54H4.5" />
        <path class="cls-1" fill={fill}  d="M4.5,93.54c0,169,178.21,168,178.21,0" />
        <path class="cls-1"  fill={fill} d="M181,124.24c46,.51,28.09,55.65-16.85,55.65" />
        <path class="cls-1"  fill={fill} d="M85.34,4.5l-5.88,15a15,15,0,0,0,6.73,18.58h0a15,15,0,0,1,6.75,18.55L87.87,69.7" />
        <path class="cls-1" fill={fill} 
            d="M45.34,18.82l-7.12,13c-3.32,6.1.17,13,8.16,16.16h0c8,3.15,11.48,10,8.18,16.13L48.41,75.51" />
        <path class="cls-1" fill={fill} 
            d="M127.33,18.82l-7.13,13c-3.32,6.1.17,13,8.16,16.16h0c8,3.15,11.48,10,8.18,16.13l-6.15,11.36" />
    </svg>
)

export default SVG;

