import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }
    
    body {
        background: #E5E5E5;
        font-family: 'Inter';
    }
`;
