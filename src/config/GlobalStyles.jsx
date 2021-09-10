import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Urbanist', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        color: #212121;
        background-color: #f5f5f5;
    }

    img {
        max-width: 100%;
        height: auto;
    }
`