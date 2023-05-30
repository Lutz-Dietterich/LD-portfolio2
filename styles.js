import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;

  }

  :root {

  --color-primary: #e2e6f2;
  --color-secondary: #a6806a;

  --color-text: #252326;
  --color-text-light: #e2e5f2;

  --color-button: #c4c4c4;

  }


  body {
    margin: 0;
    font-family: system-ui;
    overflow-x: hidden;
    overflow-y: scroll;

  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: system-ui;
    color: --color-text;
  }

  p {
    color: --color-text;
  }
`;
