import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const globalStyles = createGlobalStyle`
  ${reset}

  body {
    background-color: rgb(240, 240, 240);
    font-family: "Ubuntu", sans-serif;
  }
`
export default globalStyles
