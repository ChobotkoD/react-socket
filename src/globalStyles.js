import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html{
--light-red: #e64900;
--light-green: #00b33c;
}

body {
  user-select: none;
  background-color: #414044;
}

`;
