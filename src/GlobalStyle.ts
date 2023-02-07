import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    html {
        box-sizing: border-box;
        word-break: break-word;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }
    
    body {
        background-color: ${({ theme }) => theme.colors.mercury};
        font-family: 'Inter';
        transition: 0.3s;
    }
`;
