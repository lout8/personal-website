import React, {useState} from 'react'
import { Project, ProjectContainerTitle, ProjectTitle, ProjectBody, ProjectMenuContainer, ProjectMenuTitle, ProjectMenuListContainer, 
  ProjectMenuDesciptionContainer, 
  ProjectMenuList,
  ProjectMenuListLinksButton,
  ProjectMenulistIconDown,
ProjectMenulistIconUp } from './projectElements'

import { FaLinkedin, FaGithub } from "react-icons/fa";

  const ProjectPage = () => {


  const[isProjectOpen, setIsProjectOpen] = useState(false)

  const projectToggle = () => {
    setIsProjectOpen(!isProjectOpen)
  }

  return (
    <Project>
      <ProjectContainerTitle>
        <ProjectTitle>Projects</ProjectTitle>
        <ProjectBody>A list of projects I've worked on</ProjectBody>
      </ProjectContainerTitle>
        <ProjectMenuContainer>
          <ProjectMenuTitle>
            <ProjectMenuList className='yearTitle'>Year</ProjectMenuList>
            <ProjectMenuList className='titleTitle'>Title</ProjectMenuList>
            <ProjectMenuList className='toolsTitle'>Built with</ProjectMenuList>
            <ProjectMenuList className='icon'></ProjectMenuList>
          </ProjectMenuTitle>
          <ProjectMenuListContainer isProjectOpen={isProjectOpen} onClick={projectToggle}>
            <ProjectMenuList className='year'>2023</ProjectMenuList>
            <ProjectMenuList className='title'>Personal Website of this icon and this</ProjectMenuList>
            <ProjectMenuList className='tools'>React CSS HTML</ProjectMenuList>
            <>{!isProjectOpen
              ?<ProjectMenuList className='icon' ><ProjectMenulistIconDown></ProjectMenulistIconDown></ProjectMenuList> 
              :<ProjectMenuList className='icon' ><ProjectMenulistIconUp></ProjectMenulistIconUp></ProjectMenuList>
            }</>
          </ProjectMenuListContainer>
          <ProjectMenuDesciptionContainer isProjectOpen={isProjectOpen}>
              <ProjectMenuList className='description'>This is a description of the project that i have made. This app does this and this and this and so on on. At the end does this and this shit fuck me</ProjectMenuList>
              <ProjectMenuList className='toolsDescripton'>React CSS HTML</ProjectMenuList>
              <ProjectMenuList className='link'>
                <ProjectMenuListLinksButton href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaGithub/></ProjectMenuListLinksButton>
                <ProjectMenuListLinksButton href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin/></ProjectMenuListLinksButton>
              </ProjectMenuList>
          </ProjectMenuDesciptionContainer>
        </ProjectMenuContainer>
    </Project>
  )
}

export default ProjectPage