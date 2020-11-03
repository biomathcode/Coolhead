import React,{useState} from 'react';
import styled from 'styled-components'

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import {Link} from 'react-router-dom'
import {SidebarData} from './SidebarData'

import './Sidebar.css';

const Navbar = styled.div`
  background-color: ${({theme}) => theme.primaryDark};
  display: flex;
  justify-content: start;
  align-items: center;
`;

function Sidebar() {
    const [sidebar, setsidebar] = useState(false)

    const showSidebar = () => setsidebar(!sidebar);
    return (
    <>
        <Navbar>
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>

        </Navbar>
            
        <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <ul className="nav-menu-itmes" onClick={showSidebar} >
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        
    </>
    )
}

export default Sidebar;
