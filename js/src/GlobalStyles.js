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
  @import url("https://fonts.googleapis.com/css?family=Covered+By+Your+Grace|Dancing+Script:400,700|Gabriela|Just+Another+Hand|Pacifico|Reem+Kufi|Sacramento|Telex&display=swap");
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
  }

  #root {
    height: auto;
  }
`

export default GlobalStyle
