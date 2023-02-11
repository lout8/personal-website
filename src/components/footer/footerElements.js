import styled from "styled-components";
import { NavLink } from "react-router-dom";




export const FooterMain = styled.footer`
    display: flex;
    flex-direction: column;
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 999;
    background: #20262E;
   
`
export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding: 25px 150px;
    
    @media only screen and (max-width: 1200px) {
        padding: 25px 100px;
    }
    @media only screen and (max-width: 1024px) {
        padding: 25px 75px;
    }
    @media only screen and (max-width: 900px) {
        padding: 25px 50px;
    }
    @media only screen and (max-width: 768px) {
        padding: 25px 25px;
    }
    @media only screen and (max-width: 550px){
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
   
`
export const FooterCopyright = styled(NavLink)`
    display: flex;
    cursor: pointer;
    text-transform: capitalize;
    text-decoration: none;
    color: #E9E8E8;

    :hover{
      color: #D19EEB;
      -webkit-transition: 0.5s;
      -moz-transition: 0.5s;
      -o-transition: 0.5s;
      transition: 0.5s;
    }

    @media only screen and (max-width: 1200px) {
        font-size: 1.2rem;
    }
    @media only screen and (max-width: 1024px) {
        font-size: 1.1rem;
    }
    @media only screen and (max-width: 900px) {
        font-size: 1rem;
    }
    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    }
    @media only screen and (max-width: 550px){
        padding: 15px 0;
    }

    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
`
export const FooterCopyrightIcon = styled(NavLink)`
    padding-right: 5px;
    color: white;
`

export const FooterMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;

  @media only screen and (max-width: 350px){
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

`
export const FooterItem = styled.li`
  height: 100%;
`
export const FooterLinks = styled(NavLink)`
  display: flex;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0 20px;
  color: #EBEBEB;

  :hover{
    color: #D19EEB;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }
  &.active{
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
    font-size: 0.9rem;
    padding: 0 5px;
  }
  @media only screen and (max-width: 350px){
        padding: 3px 0;
    }

  -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
`

