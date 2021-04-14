import React,{useState} from 'react';
import styled from 'styled-components'


const Button = styled.button`
  z-index: 3;
  position: fixed;
  border-radius: 50%;
  font-size: 3rem;
`;

const MultipleButton = () => {
    const ToggleMenu = useState(false);


    return (
        <Button>+</Button>

      );
}
 
export default MultipleButton;