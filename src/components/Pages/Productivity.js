import React from 'react';
import styled from 'styled-components'
import AudioGridCard from '../../UI/Cards/AudioGridCard'
const Title = styled.h1`
  font-size: 1rem;
  color: ${({theme}) => theme.primaryLight}
`;

const Container = styled.div`
  display: flexbox;
  flex-direction: column;
  justify-content: space-between;
`;

const Productivity = () => {
    return ( 
    <>
        <Title>Productivity</Title>
        <Container>
          
        </Container>
    </>    
     );
}
 
export default Productivity;