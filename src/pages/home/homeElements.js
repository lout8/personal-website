import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Home = styled.div`
    display: flex;
    min-width: 100%;
    min-height: 70vh;
    padding: 0 150px;

    @media only screen and (max-width: 1200px) {
        padding: 0 100px;
    }
    @media only screen and (max-width: 1024px) {
        padding: 0 75px;
    }
    @media only screen and (max-width: 900px) {
        padding: 0 50px;
    }
    @media only screen and (max-width: 768px) {
        padding: 0 25px;
    }
`
export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70vh;
`
export const HomeH = styled.h1`
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
export const HomeP = styled.p`
    display: flex;
    text-align: center;
    color: #B5B5B5;
    font-size: 1.4rem;
    padding: 25px 250px 45px 250px;

    @media only screen and (max-width: 1200px) {
        padding: 25px 200px;
    }
    @media only screen and (max-width: 1024px) {
        font-size: 1.3rem;
        padding: 25px 150px;
    }
    @media only screen and (max-width: 900px) {
        font-size: 1.2rem;
        padding: 25px 150px;
    }
    @media only screen and (max-width: 768px) {
        font-size: 1rem;
        padding: 25px 75px;
    }
    @media only screen and (max-width: 550px) {
        font-size: 1rem;
        padding: 25px 0;
    }
`
export const HomeBtn = styled(NavLink)`
    display: flex;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid #D19EEB;
    border-radius: 2%;
    color: #D19EEB;
    padding: 15px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;


    :hover{
        opacity: 0.5;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }
    @media only screen and (max-width: 900px) {
        font-size: 0.9rem;
        padding: 10px;
    }
    @media only screen and (max-width: 768px) {
        font-size: 0.8rem;
    }

    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */

`