/*
** BackDrop.js
**
** BackDrop.js is a component that contains the background image for the front
** page of the site...
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Get React...
import React from 'react'
// Get sc component styling...
import styled from 'styled-components'


// Cover backdrop
const coverOverlay = './assets/images/amurTiger01.jpg'


// The cover component....
const Image = styled.div`
  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${coverOverlay});
  background-size: 240%;
  background-repeat: no-repeat;
  background-position: -150px 0px; */

  z-index: 1;

  /* > img {
    width: 100%;
  } */

/* *** Targeting iPhone 5/SE 6/7/8 and plus *** */
  @media (min-width: 300px) {
    background-size: 300%;
    background-position: -100px 0px;
  }

/* *** Targeting iPhone X *** */
  @media (min-width: 360px)
    and (min-height: 675px){
      background-size: 365%;
      background-position: -220px 0px;
  }

/* *** Targeting iPhone 5/SE, 6/7/8 LandScape *** */
  @media (min-width: 560px)
    and (orientation: landscape) {
      background-size: 100%;
      background-position: 0px 0px;
  }

  @media (min-width: 560px)
    and (orientation: portrait) {

  }

/* ***** Targeting iPad ***** */
  @media (min-width: 670px)
    and (orientation: portrait) {
      background-size: 255%;
      background-position: -255px 0px;
  }

/* ***** Targeting iPad ***** */
  @media (min-width: 760px)
    and (orientation: portrait) {
      background-size: 240%;
      background-position: -240px 0px;
  }

  @media (min-width: 850px) {
    background-size: 140%;
    background-position: -180px 0px;
  }

/* *** Targeting iPad Pro portrait *** */
  @media (min-width: 1020px)
    and (orientation: portrait) {
      background-size: 230%;
      background-position: -380px 0px;
  }

  @media (min-width: 1050px) {
    background-size: 120%;
    background-position: -130px 0px;
  }

  @media (min-width: 1200px) {
    background-size: 100%;
    background-position: 0px 0px;
  }
/* *** Targeting Desktop No. 2, "1280px X 800px" *** */
  @media (min-width: 1265px)
    and (max-height: 810px)
    and (orientation: landscape) {
      background-size: 110%;
      background-position: -50px 0px;
  }

/* *** Targeting Desktop No. 4, "1280px X 1024px" *** */
  @media (min-width: 1265px)
    and (max-height: 1024px)
    and (orientation: landscape) {
      background-size: 135%;
      background-position: -260px 0px;
  }

/* *** Targeting Desktop No. 1 and above *** */
  @media (min-width: 1366px)
    and (orientation: landscape) {
      background-size: 100%;
      background-position: 0px 0px;
  }

/* *** Targeting iPad Pro Landscape *** */
  @media (min-width: 1360px)
    and (min-height: 1000px)
    and (max-height: 1050px)
    and (orientation: landscape) {
      background-size: 140%;
      background-position: -300px 0px;
  }

/* *** Targeting Desktop No. 1 and above *** */
  @media (min-width: 1440px)
    and (orientation: landscape) {
      background-size: 110%;
      background-position: -50px 0px;
  }
`

export default function BackDrop() {
  return (
    <Image/>
  )
}
