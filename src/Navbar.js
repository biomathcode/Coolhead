import React from 'react';
import {ThemeProvider} from 'styled-components';

import GlobalStyles from './globalStyles.js'

import {theme} from './theme'

function App() {
    return (
        <ThemeProvider theme={theme}>
          <>
           <GlobalStyles />
           <div>
            <h1> This is the first page of UI</h1>
            <small>This is the small property</small>
        </div>
        </>
        </ThemeProvider>
    )
}