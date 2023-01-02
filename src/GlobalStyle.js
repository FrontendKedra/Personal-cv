import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        word-break: break-word;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }
    
    body {
        background: ${({theme}) => theme.colors.mercury};
        font-family: 'Inter';
    }
`;
