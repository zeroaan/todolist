import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const globalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    background-color: rgb(240, 240, 240);
    font-family: "Ubuntu", sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
    padding-bottom: 70px;

    
    &::-webkit-scrollbar {
      width: 11px;
      height: 11px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 175, 175, 0.7);
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background-color: rgb(218, 219, 226);
      border-radius: 10px;
    }
  }
`
export default globalStyles
