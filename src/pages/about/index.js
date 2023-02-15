import React from 'react'
import { About, AboutH, AboutContainer, GetToKnowContainer, GetToKnowP, 
        SkillsContainer, SkillsH, SkillsP, SkillsContainerP } from './aboutElements'

const AboutPage = ({data}) => {
  return (
    <About>
        <AboutH>About me</AboutH>
        <AboutContainer>
            <GetToKnowContainer>
                {data.about&&data.about.map(({id, paragraph}) =>{
                    return(
                        <GetToKnowP key={id}>{paragraph}</GetToKnowP>
                    );
                })}
            </GetToKnowContainer>
            
            <SkillsContainer>
                <SkillsH>My Skills</SkillsH>
                <SkillsContainerP>
                    {data.about&&data.skill.map(({id, skillName}) =>{
                        return(
                            <SkillsP key={id}>{skillName}</SkillsP>
                        );
                    })}
                </SkillsContainerP>
            </SkillsContainer>
        </AboutContainer>
    </About>
  )
}

export default AboutPage