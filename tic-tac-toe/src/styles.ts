import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`@font-face {
    font-family: 'Poppins';
    font-weight: 400;
    font-style: normal;
    src:
         url('https://cdn.jsdelivr.net/gh/webfontworld/Poppins/Poppins-Regular.woff') format('woff'),
    font-display: swap;
} `;

export default GlobalStyle;
