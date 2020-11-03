import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }

    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }

    body {
        background: #0D0C1D;
        color: #EFFFFA;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        text-rendering: optimizeLegibility;
    }
    h1 {
        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
    }

    img {
        border-radius : 5px;
        height: auto;
        width: 10rem;
    }
    div {
        text-align: center;
    }

    small {
        display: flex
    }

    a {
        color: ${({theme}) => theme.primaryHover};
        text-decoration: none;
    }
`