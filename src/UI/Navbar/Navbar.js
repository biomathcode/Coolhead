import React,{useState, useRef, useEffect} from 'react';
import {ReactComponent as BellIcon } from './icons/bell.svg'
import {ReactComponent as ArrowIcon} from './icons/arrow.svg'
import {ReactComponent as BoltIcon} from './icons/bolt.svg'
import {ReactComponent as CaretIcon} from './icons/caret.svg'
import {ReactComponent as ChevronIcon} from './icons/chevron.svg'
import {ReactComponent as CogIcon} from './icons/cog.svg'
import {ReactComponent as MessengerIcon} from './icons/messenger.svg'
import {ReactComponent as PlusIcon} from './icons/plus.svg'
import {CSSTransition} from 'react-transition-group';

import './global.css'

function NavbarApp() {
    
    return (
        <Navbar>
            <NavbarItem icon={<PlusIcon/>} />
            <NavbarItem icon={<BellIcon/>} />
            <NavbarItem icon={<MessengerIcon/>}/>
            <NavbarItem icon={<CaretIcon/>}>
                <DropdownMenu/>

            </NavbarItem>
        </Navbar>
    )
}

function Navbar(props){
    return (
        <nav className="navbar">
          <ul className="navbar-nav">{props.children}</ul>
        </nav>
    )
}

function NavbarItem(props) {
    const [open, setOpen] = useState(false);
    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={()=> setOpen(!open)}>
             {props.icon}
            </a>
            { open && props.children}
        </li>
    )

}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');  //the active menu 
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current && dropdownRef.current.firstChild.offsetHeight)
    }, [])
    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }
    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.leftIcon}</span>
                {props.children}
            <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }
    return(
        <div className="dropdown" style={{height: menuHeight}} ref={dropdownRef}>
            <CSSTransition
             in={activeMenu === "main"} 
             unmountOnExit
             timeout={500}
             classNames="menu-primary"
             onEnter={calcHeight}
             >
             <div className="menu">

                <DropdownItem>My profile</DropdownItem>
                <DropdownItem leftIcon={<CogIcon/>}
            rightIcon={<ChevronIcon/>}
            goToMenu="settings"
            >Settings</DropdownItem>
            </div>
            </CSSTransition>
            <CSSTransition
             in={activeMenu === "settings"} 
             unmountOnExit
             timeout={500}
             classNames="menu-secondary"
             >
             <div className="menu">
                <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main"/>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
            </div>
            </CSSTransition>
            
        </div>
    )
}
export default NavbarApp;


