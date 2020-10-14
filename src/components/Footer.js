import React from 'react';
import styled from 'styled-components'

const Footer = styled.footer `
    position: fixed;
    bottom: 0px;
    left: 0;
    height: 60px;
    width: 100%;
    background-color: #000;
    color: white;
    text-align: center;
    padding-top: 20px;
`
const footer = () => {
    const trademark = "@Coolhead"
    const year = new Date();
    return (
        <Footer>
        {trademark + year.getFullYear()} 
        </Footer>
    )

}


export default footer;