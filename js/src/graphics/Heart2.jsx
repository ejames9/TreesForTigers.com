/*
** Heart2.jsx
**
** Heart2.jsx is an SVG heart graphic for the Trees4Tigers site, wrapped in
** a react component....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Get React, styled-components...
import React from 'react'
import styled from 'styled-components'
// Get utils...
import {log, dir} from '../utils/Loggers'


// Component styling...
const HeartContainer = styled.div`
  display: flex;
  max-width: 160px;
  min-height: 100px;
  margin: 0 auto;
  align-content: center;

  svg {
    position: relative;
    align-self: center;
    margin: 0 auto;
    right: 0;
    left: 0;
    top: 5px;
    width: 6rem;
    transform: scale(1);
    opacity: .7;
    transition: all .2s ease-out;
    overflow: visible;

    #donate {
      font-size: 7rem;
      font-family: "Nunito";
      font-weight: 100;
      /* text-shadow: 0 -1px 5px #000, 0 1px 5px #000, 1px 0 5px #000, -1px 0 5px #000; */
      fill: #555555;
    }
  }

  svg:hover {
    transform: scale(1.4);
    opacity: 1;
  }
  svg:active {
    transform: scale(1.6);
  }
`

// Component...
const Heart =()=> {
// Component markup...
  return (
    <HeartContainer>
      <svg
        version="1.1"
        id="heart"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 495 495"
        style={{enableBackground:'new 0 0 495 495'}}
        xmlSpace="preserve"
        >
        <g>
          <path style={{fill:'tomato'}} d="M358.55,3.91c-45.78,0-86.3,22.55-111.05,57.16v430.02l216.71-264.4
            c19.25-23.52,30.79-53.58,30.79-86.34C495,65,433.91,3.91,358.55,3.91z"/>
          <path style={{fill:'tomato'}} d="M136.45,3.91C61.09,3.91,0,65,0,140.35c0,32.76,11.54,62.82,30.79,86.34l216.71,264.4V61.07
            C222.75,26.46,182.23,3.91,136.45,3.91z"/>
          <text id='donate' x="242" y="230" textAnchor="middle">donate</text>
        </g>
      </svg>
    </HeartContainer>
  )
}



export default Heart
