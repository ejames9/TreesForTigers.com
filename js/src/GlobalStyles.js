/*
** GlobalStyles.js
**
** GlobalStyles.js holds the global styles for the T4T.com website...
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Imports ...
import React from 'react'
// Get styled-components...
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'


// Global styles....
const GlobalStyle = createGlobalStyle`
// Google fonts...
  @import url("https://fonts.googleapis.com/css?family=Covered+By+Your+Grace|Nunito|Varela+Round|Dancing+Script:400,700|Gabriela|Just+Another+Hand|Pacifico|Reem+Kufi|Sacramento|Telex&display=swap");
// Styles ...
  html {
    padding: 0;
    margin: 0;
    background: #555555;
  }

  body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: nunito;
  }

  a.anchor {
    display: block;
    width: 100%;
    height: 1px;
    background: white;
  }

  a.blackLine {
    background: #161616;
  }

  // #root {
  //   height: auto;
  //   background: #555555;
  // }

  .donate {
    font-family: telex;
    font-size: 5rem;
  }

  #trees {
    margin-bottom: 2rem;
  }

  #vision {
    margin-bottom: 3.5rem;
  }

  .hide {
    display: none;
  }

// Get coder font for foStware logo....
  @font-face {
    font-family: coder;
    src: url('/fonts/coder.otf');
  }
`

export default GlobalStyle
