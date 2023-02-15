import React from 'react'
import { SidebarContainer, SidebarBackgroundContainer, SidebarMenu, SidebarItem, SidebarLink, SidebarMedia, SidebarItemMedia} from './sidebarElements'
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Sidebar = ({toggle, isOpen}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SidebarMenu onClick={toggle}>
          <SidebarItem><SidebarLink to="/about">about</SidebarLink></SidebarItem>
          <SidebarItem><SidebarLink to="/projects">projects</SidebarLink></SidebarItem>
          <SidebarItem><SidebarLink to="/contact">contact</SidebarLink></SidebarItem>
          <SidebarItemMedia>
            <SidebarMedia href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin/></SidebarMedia>
            <SidebarMedia href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub/></SidebarMedia>
          </SidebarItemMedia>
        </SidebarMenu>     
      </SidebarContainer>
      <SidebarBackgroundContainer isOpen={isOpen} onClick={toggle}></SidebarBackgroundContainer>
    </>
  )
}

export default Sidebar