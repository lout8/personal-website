import styled, { createGlobalStyle } from "styled-components"


export const GlobalMainBody = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Courier New', Courier, monospace;
        
    }
    body{
        overflow: ${({ isOpen }) => (isOpen ? 'hidden' : 'scroll')};
        background: #232930;
    }   
`