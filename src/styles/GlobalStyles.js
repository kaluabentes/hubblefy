import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { COLOR_BLACK } from "./colors";

export default createGlobalStyle`
  ${normalize}

  :root {
    font-family: 'Roboto', sans-serif;
    color: ${COLOR_BLACK};
  }

  * {
    box-sizing: border-box;
  }
  
  button {
    cursor: pointer;
  }
`;
