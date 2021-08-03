import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  select{
    height: 40px;
    font-size: 16px;
  }
  
  body{
    line-height: 1.2;
    &.menuIsOpen {
      overflow-y: hidden;
    }
  }
  strong{
    font-weight: bold;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 20px 0;
  }
  h1{
    font-size: 3em;
  }
  h2{
    font-size: 2.5em;
  }
  h3{
    font-size: 2em;
  }
  h4{
    font-size: 1.5em;
  }
  h5{
    font-size: 1em;
  }
  h6{
    font-size: 0.75em;
  }
  ul{
    >li{
      list-style: none;
    }
  }
`;
