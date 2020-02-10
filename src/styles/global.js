import { createGlobalStyle } from 'styled-components';
import swbg2 from './swbg2.jpg';

export default createGlobalStyle`

 /* Evita quebra de layout  */
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

 /*  ocupar a altura padrão da página, ao invés de ocupar só a altura do elemento*/
  html, body, #root {
    min-height: 100%;
  }


  body {
    background: no-repeat center fixed ;
    background-image: url(${swbg2});
    background-size: cover;
  }

  body, input, button {
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
  }

`;
