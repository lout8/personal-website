import styled from "styled-components";


export const About = styled.div`
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
export const AboutH = styled.h1`
    display: flex;
    color: #EBEBEB;
    font-size: 3.5rem;
    padding-bottom: 25px;

    @media only screen and (max-width: 1024px) {
        font-size: 3rem;
    }
    @media only screen and (max-width: 900px) {
        font-size: 2.5rem;
    }
`
export const AboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }
`
export const GetToKnowContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 400px;
    width: 100%;
    height: auto;
    
`
export const GetToKnowP = styled.p`
    display: flex;
    text-align: center;
    padding: 0 50px 25px 0;
    color: #B5B5B5;
    font-size: 1.2rem;
    text-align: left;

    @media only screen and (max-width: 1024px) {
        font-size: 1.1rem;
    }
    @media only screen and (max-width: 900px) {
        font-size: 1rem;
    }
`
export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    min-width: 400px;
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 900px) {
        padding-left: 0;
        padding-top: 50px;
    }
`
export const SkillsH = styled.h1`
    display: flex;
    color: #EBEBEB;
    padding-bottom: 25px;
    font-size: 1.8rem;

    @media only screen and (max-width: 1024px) {
        font-size: 1.5rem;
    }
    @media only screen and (max-width: 900px) {
        font-size: 1.4rem;
    }
`
export const SkillsContainerP = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media only screen and (max-width: 900px) {
        padding-right: 300px;
    }
    @media only screen and (max-width: 768px) {
        padding-right: 150px;
    }
    @media only screen and (max-width: 550px) {
        padding-right: 0;
    }
`
export const SkillsP = styled.p`
    display: flex;
    padding: 15px;
    margin: 15px 15px 15px 0;
    color: #EBEBEB;
    font-size: 1rem;
    border-radius: 10%;
    background: rgba(0, 0, 0, 0.2);

    @media only screen and (max-width: 1024px) {
        font-size: 0.9rem;
    }
`