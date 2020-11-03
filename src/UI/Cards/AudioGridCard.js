import React from 'react'

import styled from 'styled-components'



const CardData = [
    {
        id: 1,
        name: "",
        image: "",
        audioURL: "",
    },
    {
        id: 2,
        name: "",
        image: "",
        audioURL: "",
    },
    {
        id: 3,
        name: "",
        image: "",
        audioURL: ""
    }

]

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0, 0.2);
  max-width: 400px;
  margin: auto;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const Titled = styled.h1`
  color: grey;
  font-size: 18px;  
`;
const Image = styled.img`

`;
const Button = styled.button`
  
`;
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    column-gap: 10px;
    row-gap: 15px;
    border: 1px solid yellow;

`
const AudioElement = styled.div`
    width: 50px;
    background: yellow;
`

const AudioCard = (props) => {
    return ( 
        <div>
            <Container>
                <AudioElement>
                </AudioElement>
                <AudioElement>
                </AudioElement>
                <AudioElement>
                </AudioElement>
                <AudioElement>
                </AudioElement>
            </Container>
        </div>
     );
}
 
export default AudioCard;