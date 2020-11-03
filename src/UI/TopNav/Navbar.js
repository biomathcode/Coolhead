import React from 'react';
import styled from 'styled-components'
import logo from '../../Media/Images/Logo.svg'
const MainNavigation = styled.nav`
  align-items: center;
  background-color: #0D0C1D;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  --webkit-font-smoothing: antialiased;
  height: 56px;
  padding: 0 30px;
  @media (max-width:560px){
      flex-flow: column;
      border-bottom: 1px solid yellow;
  }
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
    @media (max-width:560px){
        img {
            max-width: 100px;
            padding: 0px;
            margin: 0px;
            
        }
    }
`
const SubNav = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-left: 20px;
    gap: 20px;
    a {
        color: ${({theme}) => theme.primaryLight};
        text-decoration: none;
        &:hover{
            color: ${({theme}) => theme.primaryHover};
        }
        &:active{
            color: ${({theme}) => theme.secondaryDark};
        }
    }
    
`;
const Navbar = () => {
    return (
        <MainNavigation>
            <MainNavigationLogoLink>
                <img src={logo} alt="logo"/>
            </MainNavigationLogoLink>
            <SubNav>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Community</a>
            </SubNav>
                
            
        
        </MainNavigation>
    );
}

export default Navbar;