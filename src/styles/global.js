import { createGlobalStyle } from 'styled-components';
import swbg from './swbg.jpg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');


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
    background-image: linear-gradient(to bottom,rgba(16, 93, 212, 0.36),rgba(185, 21, 21, 0.24)),url(${swbg});;
    background-size: cover;
  }

  body, input, button {
    color: #FFF;
    font: 14px Roboto, sans-serif;
  }

`;
