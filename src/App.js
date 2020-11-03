import React from 'react'

import {ThemeProvider} from 'styled-components'
import {GlobalStyles} from './globalStyles'
import {theme} from './theme'
import Navbar from './UI/TopNav/index'
import {BrowserRouter as Router} from 'react-router-dom'
import Layout from './Pages/Layout'

function App(){
    return (
      <ThemeProvider theme={theme}>
        <Navbar/>
          <GlobalStyles />
        <Router>
          <Layout/>
        </Router>        
      </ThemeProvider>
      
      
)}
export default App



