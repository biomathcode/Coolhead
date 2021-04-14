import React from 'react'

import {ThemeProvider} from 'styled-components'
import {GlobalStyles} from './globalStyles'
import {theme} from './theme'
//import Navbar from './UI/TopNav/index'
//import Navbar from './UI/Navbar/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import Layout from './Pages/Layout'
import FloatingButton from './UI/FAB/FloatingButton'

function App(){
    return (
      <>
        
        <ThemeProvider theme={theme}>
          <GlobalStyles />
        <Router>
         <Layout/>
        <FloatingButton/>       
        </Router>     

        </ThemeProvider>
    </>
      
)}
export default App



