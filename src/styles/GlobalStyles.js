import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default createGlobalStyle`
  ${normalize}

  :root {
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
  
  button {
    cursor: pointer;
  }
`;
