import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 75px;
  background: ${({theme}) => theme.primaryDark}
`;

const Playbar = ({}) => {
    return {
        <Container>
        {children}
        </Container>

    }
}

export default Playbar;