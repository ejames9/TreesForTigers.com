/*
** BottomLanding.js
**
** BottomLanding.js is a component that contains the background image for the front
** page of the site...
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Get React...
import React from 'react'
// Get sc component styling...
import styled from 'styled-components'
// get Heart svg..
// import Cast from './Cast'
import Contact from './Contact'


// Cover backdrop
const bottomOverlay = '/images/bottomOverlay.jpg'


// The cover component....
const Image = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 35rem;
  padding: 6.5rem 0 5rem;
  background: linear-gradient(to bottom, rgba(22, 22, 22, 0.3) 0%, rgba(22, 22, 22, 0.7) 75%, #161616 100%), url(${bottomOverlay});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default function BottomLanding() {
  return (
    <Image>
      <Contact/>
    </Image>
  )
}
