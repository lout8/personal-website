import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


export const SidebarContainer = styled.aside`
    position: absolute;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    height: auto;
    z-index: 999;
    background: #232930;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;

    max-height: ${({ isOpen }) => (isOpen ? '400px' : '0')};

    @media only screen and (min-width: 768px){
        display: none;
    }    

`
export const SidebarBackgroundContainer = styled.aside`
    position: absolute;
    display: flex;
    top: -100%;
    width: 100%;
    height: 100%;
    z-index: 998;
    background: #232930;
    opacity: 0.8;

    opacity: ${({ isOpen }) => (isOpen ? '0.8' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

    @media only screen and (min-width: 768px){
        display: none;
    }    


    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
`
export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
`
export const SidebarLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1.2rem;
    color: #EBEBEB;
    width: 100%;
    height: 100%;
    padding: 20px 0;
    text-transform: capitalize;

    &.active{
        color: #D19EEB;
    }


    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */

`
export const SidebarItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    
    border-bottom: 1px solid #3c3c3c;
    cursor: pointer;

    &:hover ${SidebarLink} {
        color: #D19EEB;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }
`
export const SidebarItemMedia = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #3c3c3c;
`


export const SidebarMedia = styled.a `
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.8rem;
  margin: 0 10px;
  color: #EBEBEB;

:hover{
    color: #D19EEB;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
}

-webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
`