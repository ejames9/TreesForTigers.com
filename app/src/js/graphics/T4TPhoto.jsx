/*
** T4TPhoto.js
**
** T4TPhoto.js is an SVG Photo for the Trees4Tigers site, wrapped in
** a react component....
**
** Eric James Foster, Fostware LLC, MIT License.
***/

import React from 'react'
import styled from 'styled-components'
import {log, dir} from '../utils/Loggers'

// image url...
const overlay = '/images/treesfortigers/t4t.jpg'

// Component styling...
const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${overlay});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  border: .5rem solid #2d2d2d;
  height: 100%;
  width: 100%;
  max-height: 25rem;
  max-width: 25rem;

  @media (min-width: 1100px) {
    max-height: 32rem;
    max-width: 32rem;
  }

`


const T4TPhoto =()=> {
// Markup...
  return (
    <Photo/>
  )
}



export default T4TPhoto
