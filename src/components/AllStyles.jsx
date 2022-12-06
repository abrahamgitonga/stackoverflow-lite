import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Roboto+Slab:wght@300;400;700&display=swap');
 body{
      background:#2d2d2d;
      //background:#BCC2C2;
      color:#fff;
      font-family: Patrick Hand&family;
      font-weight: 200px

  }
  b,strong{
    font-weght: 700;

  }
  a{
    color: #fff;
  }
  p{
    margin: 10px 0;
    line-height: 1.5rem;
  }
  h1,h2{
    margin-top: 10px;
    margin-bottom: 20px;
  }
  h1{
    font-size: 2rem;
  }
  h2{
    font-size: 1.6rem;
  } 
 

  blockquote{
    background-color: rgba(0,0,0,.1);
    padding: 15px;
  }
 


`;

export default GlobalStyles;