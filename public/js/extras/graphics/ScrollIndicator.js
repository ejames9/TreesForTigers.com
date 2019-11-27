/*
** scrollIndicator.js
**
** scrollIndicator.js is an animated web component, that indicates that a
** user must scroll downward to see additional content....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Get React...
import React from 'react'
// Get sc component styling...
import styled from 'styled-components'
import {keyframes} from 'styled-components'
// Get react-bootstrap....
import Container from 'react-bootstrap/Container'
// Utilities...
import el from '../utils/DOM/el'
import {log, dir} from '../utils/Loggers'
import {isOffscreen} from '../utils/Is'



// Scroll indicator animation...
const scrollIndicatorAnimation = keyframes`
  0%, 100% {
    border-left: 1px solid #848484;
    border-bottom: 1px solid #848484;
    transform: scale(0.75) rotateZ(-45deg);
    /* box-shadow: 0 0 4.2em #26171e, 0 0 1.2em #26171e, 0 0 -1.2em black, 0 0 -1.2em black, 0 0 -1.2em black, 0 0 -1.2em black, 0 0 -1.2em black, 0 0 -1.2em black;*/
    box-shadow: -.2rem .2rem 0.5rem #1d1d1d;
  }
  25% {
    border-left: 5.5px solid #848484;
    border-bottom: 5.5px solid #848484;
    transform: scale(1) rotateZ(-45deg);
    opacity: 1;
  }
`

// Using a styled-components wrapper to style the whole component....
const Wrapper = styled.div`
  height: 4rem;
  width: 3rem;
  z-index: 1000;
  position: absolute;
  bottom: 9rem;
  margin: 0 auto;
  right: 0;
  left: 0;
  /* background: blue; */

  .scrollIndicator {
    line-height: 0.2;
    width: 41px;

    .top {
      top: 20px;
      z-index: 18;
      animation: ${scrollIndicatorAnimation} 3s ease-in-out infinite;
      /*-webkit-animation-delay: 0.25s;*/
    }

    .middle {
      z-index: 17;
      animation: ${scrollIndicatorAnimation} 3s ease-in-out 250ms infinite;
      /*-webkit-animation-delay: 0.25s;*/
    }

    .bottom {
      bottom: 20px;
      z-index: 16;
      animation: ${scrollIndicatorAnimation} 3s ease-in-out 500ms infinite;
      /*-webkit-animation-delay: 0.5s;*/
    }
  }

  .scrollIndicator > .chevron {
    position: relative;
    height: 40px;
    width: 40px;
    display: block;
    padding-bottom: 0px;
    border-left: 2px solid black;
    border-bottom: 2px solid black;
    border-top-left-radius: 12px;
    border-bottom-right-radius: 12px;
    transform: rotateZ(-45deg);
    opacity: 0.5;
    z-index: 15;
  }

  @media (min-width: 300px) {
    bottom: 5rem;
  }

/********* Target iPhone X ********/
  @media (min-width: 360px) and (min-height: 675px){
    bottom: 8rem;
  }

/* *** Targeting iPad *** */
  @media (min-width: 1020px)
    and (orientation: landscape) {
      bottom: 8.5rem;
  }

/* *** Targeting Desktop No. 2, "1280px X 800px" *** */
  @media (min-width: 1265px)
    and (orientation: landscape) {
      bottom: 8rem;
  }

/* *** Targeting Desktop No. 1, "1366px X 768px" *** */
  @media (min-width: 1360px)
    and (orientation: landscape) {
      bottom: 9rem;
  }
`

function ScrollIndicator({scrollerNode}) {
  let scroller = React.createRef()

// Send scroller to Mother ship...
  scrollerNode(scroller)

// Component markup...
  return (
    <Wrapper>
      <div ref={scroller} className="scrollIndicator">
        <div className="chevron top"></div>
        <div className="chevron middle"></div>
        <div className="chevron bottom"></div>
      </div>
    </Wrapper>
  )
}


export default ScrollIndicator













/*#tops::before {
  position: relative;
  top: -5px;
  left: 10px;
  content: '';
  height: 30px;
  width: 30px;
  display: block;
  padding-bottom: 0px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  opacity: 0.5;
  z-index: 15;
  -webkit-animation: scrollIndicator2 3s infinite ease-in-out;
  -webkit-animation-delay: 0s;
}*/
