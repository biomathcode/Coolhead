
import React from 'react';

const SVG = ({
    style = {},
    fill = "",
    width= "0%",
    stroke = "",
    className = "",
    viewBox = "0 0 164.8 126.2"
}) => (
    <svg
        width={width}
        style={style}
        stroke={stroke}
        stroke-width= "4px"
        height={width}
        viewBox={viewBox}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path  fill={fill} class="st0" d="M65.5,23.7v-1"/>
		<path  fill={fill} class="st0" d="M65.3,22.6C66.1,11.3,76,2.7,87.3,3.6s19.8,10.6,19,21.9c-0.8,10.7-9.7,19.1-20.5,19.1"/>
		<line class="st0" x1="87.5" y1="44.7" x2="3.5" y2="44.7"/>
		<path  fill={fill} class="st0" d="M120.2,42.5c0-11.3,9.2-20.5,20.5-20.5s20.5,9.2,20.5,20.5s-9.2,20.5-20.5,20.5l0,0"/>
		<line class="st0" x1="142.5" y1="62.7" x2="3.5" y2="62.7"/>
		<path fill={fill}  class="st0" d="M85.1,102.2c0,11.3,9.2,20.5,20.5,20.5c11.3,0,20.5-9.2,20.5-20.5c0-10.6-8.1-19.4-18.6-20.4"/>
		<line class="st0" x1="107.5" y1="81.7" x2="3.5" y2="81.7"/>
       
    </svg>
)

export default SVG;