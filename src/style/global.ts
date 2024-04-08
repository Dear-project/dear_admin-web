"use client";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

 const GlobalStyle = createGlobalStyle`
      ${reset}
    * {
      margin: 0;
      padding: 0;
    }
    a {
      text-decoration: none;
    }
`;
export default GlobalStyle