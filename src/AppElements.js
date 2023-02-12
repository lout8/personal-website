import styled, { createGlobalStyle, injectGlobal } from "styled-components"


export const GlobalMainBody = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        /* font-family: monospace; */
        font-family: 'Courier New', Courier, monospace;
        
    }
    body{
        overflow: ${({ isOpen }) => (isOpen ? 'hidden' : 'scroll')};
        background: #232930;
    }
   
    /* ::selection{
    background-color:  #1e1e1e;
    color: white;
    }  */
    
`