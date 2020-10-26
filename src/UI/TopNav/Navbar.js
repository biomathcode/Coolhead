import React from 'react';
import styled from 'styled-components'
import logo from '../../Media/Images/Logo.svg'
const MainNavigation = styled.nav`
  align-items: center;
  background-color: #0D0C1D;
  display: flex;
  flex-flow: row nowrap;
  --webkit-font-smoothing: antialiased;
  height: 56px;
  padding: 0 30px;
`;

const MainNavigationLogoLink = styled.a.attrs({
    href: "#", onClick: evt => {
        evt.preventDefault();
    }
})`
    display: flex;
    height: 100%;
    margin-right: 20px;
    transition: opacity 0.2 ease;
    > img {
        margin: auto;
    }
    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`
const Navbar = () => {
    return (
        <MainNavigation>
            <MainNavigationLogoLink>
                <img src={logo} alt="logo"/>
            </MainNavigationLogoLink>
        </MainNavigation>
    );
}

export default Navbar;