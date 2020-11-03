import React from 'react'
import {formatTime} from '../helpers';
import styled from 'styled-components'


const Container = styled.div`
  position: relative;
  svg {
      max-width: 300px;
  }
  circle {
    transition: stroke-dashoffset 1s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  };
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -32%);
    text-align: center;
  }
  div>h1{
      font-size: 52px;
      font-weight: normal;
      color: blue;
      letter-spacing: 2px;
      margin: 0;
  }
  div>p {
      font-size: 14px;
      text-transform: uppercase;
      color: white;
      letter-spacing: 3px;
      margin: 18px 0 0;
  }

`;




const TimeDisplay = ({time, status, progress }) => {
    document.title = `(${formatTime(time)}) CoolHead`;

    const radius = 150;
    const stroke = 5;
    const normalizedRadius = radius - stroke *2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress/ 100) * circumference;

    return (
        <Container>
            <svg width="100%" viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
                <circle 
                    stroke="#add"
                    fill="#0D0C1D"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    stroke= '#002BFF'
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{strokeDashoffset}}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>
            <div>
                <h1>{formatTime(time)}</h1>
                <p>{status}</p>
            </div>
        </Container>
            
        
    )
};

export default TimeDisplay;