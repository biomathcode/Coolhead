import React,{useState, useRef} from 'react'

import {ThemeProvider} from 'styled-components'
import {useOnClickOutside} from './hooks'
import {GlobalStyles} from './globalStyles'
import {theme} from './theme'
import {Burger, Menu} from './UI';
import FocusLock from 'react-focus-lock';
import Timer from './Timer'
import QuoteMachine from './components/Quote_machine'
import AudioGrid from './AudioGrid'
import Notification from './components/notifications/notification'


import Navbar from './UI/TopNav/index'
//Media file

function App(){

    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";

    useOnClickOutside(node, () => setOpen(false));
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
        <Navbar/>
          <GlobalStyles />
          <div ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
        <Notification/>
        <QuoteMachine/>
        <Timer/>
        <AudioGrid/>
     
        
      </React.Fragment>

      </ThemeProvider>
      
      
)}
export default App



