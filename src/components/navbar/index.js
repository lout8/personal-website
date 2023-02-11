import React from 'react'
import {Nav, NavContainer, NavLogo, NavSidebarButton, NavXmarkButton, NavMenu, NavItem, NavLinks, NavMedia} from './navbarElements'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiBars3, HiXMark } from "react-icons/hi2";

const Navbar = ({toggle, isOpen}) => {
  return (
        <Nav>
            <NavContainer>
                <>{!isOpen ? <NavLogo to="/">Elissaios Loutos</NavLogo> : <NavLogo isOpen={isOpen} onClick={toggle} to="/">Elissaios Loutos</NavLogo>}</>
                <NavSidebarButton isOpen={isOpen} onClick={toggle}><HiBars3/></NavSidebarButton>
                <NavXmarkButton isOpen={isOpen} onClick={toggle}><HiXMark/></NavXmarkButton>
                <NavMenu>
                    <NavItem><NavLinks to="about" >about</NavLinks></NavItem>
                    <NavItem><NavLinks to="projects">projects</NavLinks></NavItem>
                    <NavItem><NavLinks to="blog">blog</NavLinks></NavItem>
                    <NavItem><NavLinks to="contact">contact</NavLinks></NavItem>
                </NavMenu>
                <NavMenu>
                    <NavItem><NavMedia href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin/></NavMedia></NavItem>
                    <NavItem><NavMedia href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub/></NavMedia></NavItem>
                </NavMenu>
            </NavContainer>
        </Nav>
  )
}

export default Navbar
