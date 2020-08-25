import React from 'react'
import styled, {ThemeProvider} from 'styled-components'


const theme = {
    primary: 'teal',
    secondary: 'green',
}

//styled-components
const Button = styled.button`
    font-family: sans-serif;
    font-size: 1.3rem;
    border: none;
    border-radius: 5px;
    padding: 7px 10px;
    /*background: ${(props) => (props.primary ? 'red' : 'green')};*/
    background: ${props => props.theme.secondary};
    color: #fff;
    &:hover{
        background: blue;
    }
    &:active{
        color: black;
    }
`;
function App() {
    return(
        <ThemeProvider theme={theme}>
        <div className='App'>
            <h1>styled-Components</h1>
            <form action="">
                <input type='text' />
                <Button>Submit</Button>
            </form>
        </div>
        </ThemeProvider>
    )
}

export default App;