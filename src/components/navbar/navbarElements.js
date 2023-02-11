import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { SidebarContainer } from '../sidebar/sidebarElements'


export const Nav = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  background: #20262E;
  z-index: 999;
  
  @media only screen and (max-width: 1200px) {
  height: 70px;
  }
  @media only screen and (max-width: 1024px) {
  height: 60px;
  }
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0 150px;

  @media only screen and (max-width: 1200px) {
    height: 70px;
    padding: 0 100px;
  }
  @media only screen and (max-width: 1024px) {
    height: 60px;
    padding: 0 75px;
  }
  @media only screen and (max-width: 900px) {
    padding: 0 50px;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 25px;
  }
  
`
export const NavLogo = styled(NavLink)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: #D19EEB;

  ${SidebarContainer}{
    max-height: ${({ isOpen }) => (isOpen ? '0' : '400px')};
  }
  
  :hover{
    opacity: 0.7;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 900px) {
    font-size: 1.3rem;
  }
  -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
`

export const NavSidebarButton = styled.div`  
  display: none;
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
    color: white;
    cursor: pointer;
    font-size: 1.9rem;
    color: #EBEBEB;

    :hover{
      color: #D19EEB;
      -webkit-transition: 0.5s;
      -moz-transition: 0.5s;
      -o-transition: 0.5s;
      transition: 0.5s;
    }
    display: ${({ isOpen }) => (isOpen ? 'none' : 'flex')};
  }

  -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
`
export const NavXmarkButton = styled.div`
  display: none;
  
  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
    color: white;
    cursor: pointer;
    font-size: 1.9rem;

    :hover{
      color: #D19EEB;
      -webkit-transition: 0.5s;
      -moz-transition: 0.5s;
      -o-transition: 0.5s;
      transition: 0.5s;
    }
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }

  -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  
  @media only screen and (max-width: 768px) {
    display: none;
  }

`
export const NavItem = styled.li`
  height: 100%;
`
//
//  NAVIGATION LINK
//
export const NavLinks = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0 20px;
  height: 100%;
  width: 100%;
  color: #EBEBEB;
  text-transform: capitalize;

  &:hover{
    border-bottom: 4px solid #D19EEB;
    color: #D19EEB;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }
  &.active{
    border-bottom: 4px solid #D19EEB;
    color: #D19EEB;
  }

  
 
  @media only screen and (max-width: 1200px) {
    font-size: 1.1rem;
    padding: 0 16px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
    padding: 0 12px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 1rem;
    padding: 0 8px;
  }

  -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
`
//
//  LINKS
//

export const NavMedia = styled.a `
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.7rem;
  padding: 0 10px;
  height: 100%;
  width: 100%;
  color: #EBEBEB;
  

  :hover{
    border-bottom: 4px solid #D19EEB;
    color: #D19EEB;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 900px) {
    font-size: 1.4rem;
  }

  -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */

`
