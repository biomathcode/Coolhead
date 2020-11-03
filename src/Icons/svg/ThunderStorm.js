
import React from 'react';

const SVG = ({
    style = {},
    fill = "none",
    stroke= "",
    width= "0%",
    className = "",
    viewBox = "0 0 239.02 204.13"
}) => (
    <svg
        width={width}
        style={style}
        height={width}
        stroke={stroke}
        stroke-width = "4px"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
    <path class="cls-1" fill={fill}
            d="M112.17,138.64c-1.55,4.82-2.55,10.82-4.55,16.82,7,5,14,7,21,12-3,11-5,21-8.17,32.17" />
    <path class="cls-2" fill={fill}
                d="M190.67,45A51.13,51.13,0,0,0,92,41.53a27.91,27.91,0,0,0-48.5,18.84c0,.93,0,1.85.13,2.76a34.32,34.32,0,1,0-4.31,68.42v0H190.24A43.28,43.28,0,0,0,190.67,45Z" />
    </svg>
)

export default SVG;

