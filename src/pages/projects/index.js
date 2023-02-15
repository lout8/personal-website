import React, {useState} from 'react'
import { Project, ProjectContainerH, ProjectH, ProjectP, ProjectMenuListMainContainer, ProjectMenuContainer, ProjectMenuTitle, ProjectMenuListContainer, 
  ProjectMenuDesciptionContainer, 
  ProjectMenuList,
  ProjectMenuListLinksButton, OK} from './projectElements'

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const ProjectPage = ({data}) => {

  const ProjectComponents = ({ id, year, title, built, description, link}) =>{

    const[dropDown, setDropDown] = useState(false)
    const[isProjectOpen, setIsProjectOpen] = useState(false)

    const[projectID, setProjectID] = useState(id)
    const[projectYear, setProjectYear] = useState(year)
    const[projectTitle, setProjectTitle] = useState(title)
    const[projectBuilt, setProjectBuilt] = useState(built)
    const[projectDescription, setProjectDescription] = useState(description)
    const[projectLink, setProjectLink] = useState(link)

    //icons
    const[githubIcon, setgithubIcon] = useState(FaGithub)
    const[externalLink, setexternalLink] = useState(FaExternalLinkAlt)

    return(
      <ProjectMenuListMainContainer key={projectID}>
      <ProjectMenuListContainer isProjectOpen={isProjectOpen} onClick={() => setIsProjectOpen(!isProjectOpen)}>
        <ProjectMenuList className='year'>{projectYear}</ProjectMenuList>
        <ProjectMenuList className='title'>{projectTitle}</ProjectMenuList>
        <ProjectMenuList className='tools'>{projectBuilt}</ProjectMenuList>
        <ProjectMenuList className='iconUp' isProjectOpen={isProjectOpen}><IoMdArrowDropup/></ProjectMenuList> 
        <ProjectMenuList className='iconDown' isProjectOpen={isProjectOpen}><IoMdArrowDropdown/></ProjectMenuList>
      </ProjectMenuListContainer>
      <ProjectMenuDesciptionContainer isProjectOpen={isProjectOpen}>
        <ProjectMenuList className='description'>{projectDescription}</ProjectMenuList>
        <ProjectMenuList className='toolsDescripton'>{projectBuilt}</ProjectMenuList>
        <ProjectMenuList className='link'>
        {projectLink.map(({linkid, linkURL}) =>{
          return(
            <ProjectMenuListLinksButton key={linkid} href={linkURL} target="_blank" rel="noopener noreferrer">{ linkid == 1 ? externalLink : githubIcon}</ProjectMenuListLinksButton>
          );
          })} 
          </ProjectMenuList>
      </ProjectMenuDesciptionContainer>
      </ProjectMenuListMainContainer>
    );

    
  }
  return (
    <Project>
      <ProjectContainerH>
        <ProjectH>Projects</ProjectH>
        <ProjectP>A list of projects I've worked on</ProjectP>
      </ProjectContainerH>
        <ProjectMenuContainer>
          <ProjectMenuTitle>
            <ProjectMenuList className='yearTitle'>Year</ProjectMenuList>
            <ProjectMenuList className='titleTitle'>Title</ProjectMenuList>
            <ProjectMenuList className='toolsTitle'>Built with</ProjectMenuList>
            <ProjectMenuList className='iconTitle'><IoMdArrowDropup/></ProjectMenuList>
          </ProjectMenuTitle>
        </ProjectMenuContainer>
        {data.project&&data.project.map(({id, year, title, built, description, link}) =>{
            return(
              <ProjectComponents key={id} id={id} year={year} title={title} built={built} description={description} link={link} />
            );
        })}
    </Project>
  )
}

export default ProjectPage