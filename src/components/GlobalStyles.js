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
  }
`
export default globalStyles
