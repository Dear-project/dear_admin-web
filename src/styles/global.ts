"use client";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

 const GlobalStyle = createGlobalStyle`
      ${reset}
    * {
      margin: 0;
      padding: 0;
      color:black;
      font-family: Pretendard;

    }
    a {
      text-decoration: none;
    }
`;
export default GlobalStyle