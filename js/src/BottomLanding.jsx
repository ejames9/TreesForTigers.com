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
import Heart from './Heart'


// Cover backdrop
const bottomOverlay = './assets/images/bottomOverlay.jpg'


// The cover component....
const Image = styled.header`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 35rem;
  padding: 15rem 0;
  background: linear-gradient(to bottom, rgba(22, 22, 22, 0.3) 0%, rgba(22, 22, 22, 0.7) 75%, #161616 100%), url(${bottomOverlay});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

`

export default function BottomLanding() {
  return (
    <Image/>
  )
}
