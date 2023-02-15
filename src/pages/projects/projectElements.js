import styled from "styled-components";


export const Project = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 100%;
    min-height: 80vh;
    padding: 150px 150px;

  @media only screen and (max-width: 1200px) {
    padding: 100px 100px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 100px 75px;
  }
  @media only screen and (max-width: 900px) {
    padding: 75px 50px;
  }
  @media only screen and (max-width: 768px) {
    padding: 75px 25px;
  }
`
export const ProjectContainerH = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
`
export const ProjectH = styled.h1`
  display: flex;
  color: #EBEBEB;
  font-size: 3.5rem;

  @media only screen and (max-width: 1024px) {
  font-size: 3rem;
  }
  @media only screen and (max-width: 900px) {
    font-size: 2.5rem;
  }
`
export const ProjectP = styled.p`
  display: flex;
  color: #B5B5B5;
  font-size: 1.4rem;
  padding: 25px 0 150px 5px;

  @media only screen and (max-width: 1200px) {
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 1.3rem;
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 1.2rem;
    padding-bottom: 75px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    padding-bottom: 75px;
  }
`
export const ProjectMenuContainer = styled.div`
    display: flex;  
    flex-direction: column;
    width: 100%;
    height: auto;
`
export const ProjectMenuTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    width: 100%;
    opacity: 0.8;
    font-size: 1.1rem;
    background: #20262E;
    border-radius: 5px;
`
export const ProjectMenuListMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ProjectMenuListContainer = styled.div`
    display: flex;
    order: 0;
    flex-direction: row;
    align-items: center;
    height: 60px;
    width: 100%;
    cursor: pointer;
    background: ${({isProjectOpen, id, ProjectID}) => (isProjectOpen&& id == ProjectID  ? 'rgba(0, 0, 0, 0.2)' : 'none')};

    &:hover{
        background-color: rgba(0, 0, 0, 0.2);
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }
`
export const ProjectMenuDesciptionContainer = styled.div`
  position: sticky;
  order: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: auto;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  max-height: ${({ isProjectOpen, id, ProjectID }) => (isProjectOpen && id == ProjectID ? '400px' : '0')};

  -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
`
export const ProjectMenuList = styled.div`
  &.yearTitle{
    flex: 100px 0 1;
    height: auto;
    padding: 0 20px;
    color: #E9E8E8; 
    font-size: 1.15rem;
  }
  &.titleTitle{
    flex: 600px 0 1;
    min-width: 100px;
    height: auto;
    padding: 0 20px;
    color: #E9E8E8; 
    font-size: 1.15rem;
  }
  &.toolsTitle{
    flex: 500px 0 1;
    height: auto;
    min-width: 100px;
    padding: 0 20px;
    color: #E9E8E8; 
    font-size: 1.15rem;
  }
  &.iconTitle{
    flex: auto 1 1;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;
    color: #20262E;
    font-size: 2rem;
    @media only screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  &.year{
    flex: 100px 0 1;
    height: auto;
    padding: 0 20px;
    font-size: 1.2rem;
    color: #D19EEB;
  }
  &.title{
    flex: 600px 0 1;
    min-width: 100px;
    height: auto;
    padding: 0 20px;
    font-size: 1.2rem;
    color: #EBEBEB;
  }
  &.tools{
    flex: 500px 0 1;
    display: flex;
    height: auto;
    min-width: 70px;
    padding: 0 20px;
    font-size: 1rem;
    color: #B5B5B5;
  }
  &.description{
    display: flex;
    width: 100%;
    font-size: 1.1rem;
    color: #B5B5B5;
    padding: 20px 100px;
  }
  &.toolsDescripton{
    display: none;
    height: auto;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0 100px 20px 100px;
    font-size: 1rem;
    color: #D19EEB;
  }
  &.link{
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 0 100px 20px 100px;
    color: #EBEBEB;
  }
  &.iconUp{
    flex: auto 1 1;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;
    color: #B5B5B5;
    font-size: 2rem;
    @media only screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
    display: ${({ isProjectOpen }) => (isProjectOpen ? 'flex' : 'none')};
  }
  &.iconDown{
    flex: auto 1 1;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;
    color: #B5B5B5;
    font-size: 2rem;
    @media only screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
    display: ${({ isProjectOpen }) => (isProjectOpen ? 'none' : 'flex')};
  }
  @media only screen and (max-width: 750px){
    &.description{
      padding: 20px 20px;
      font-size: 0.9rem;
    }
  }
  @media only screen and (max-width: 550px) {
    &.yearTitle{
      font-size: 0.9rem;
      padding: 0 10px;
    }
    &.titleTitle{
      font-size: 0.9rem;
      padding: 0 10px;
    }
    &.toolsTitle{
      font-size: 0.9rem;
      padding: 0 10px;
    }
    &.year{
      font-size: 1rem;
      padding: 0 10px;
    }
    &.title{
      font-size: 1rem;
      padding: 0 10px;
    }
    &.tools{
      display: none;
      font-size: 0.8rem;
      padding: 0 10px;
    }
    &.description{
      padding: 20px 20px;
      font-size: 0.9rem;
    }
    &.toolsTitle{
      display: none;
    }
    &.toolsDescripton{
      display: flex;
    }
  }
`
export const ProjectMenuListLinksButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0 5px;
  color: #EBEBEB;
  z-index: 997;
  :hover{
    color: #D19EEB;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }
  @media only screen and (max-width: 768px) {
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
