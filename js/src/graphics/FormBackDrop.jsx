/*
** FormBackDrop.jsx
**
** FormBackDrop.jsx is a grapical component, displaying a tiger's eye in the
** t4t donation page donation form....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Get react...
import React, {Component} from 'react'
// Get react-bootstrap lib...
// Get styled-components...
import styled from 'styled-components'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Modal from 'react-bootstrap/Modal'

import TreeHands from './TreeHands'
import {log, dir} from '../utils/Loggers'
import {isSafari} from '../utils/utils'
import {pub} from '../utils/environmentals'

// Tiger eye photo url ...
const treeHands = `${pub}/images/svg/landscapes/treeHands.svg`

// Component Styling....
const FormBackDropStyler = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 12rem;
  width: 29rem;
  background: black;
  z-index: 0;

  ${isSafari()&& `
    .sash2 {
      position: absolute;
      left: -8.5rem;
      top: 25rem;
      height: 30rem;
      width: 70rem;
      background: #161616;
      transform: rotate(-22deg);
      pointer-events: none;
      overflow: hidden;
      z-index: -1;
    }
  `}
`

// Component .....
export default function FormBackDrop() {
  return (
    <FormBackDropStyler>
      <TreeHands/>
      {isSafari()&&
        <div className="sash2"></div>
      }
    </FormBackDropStyler>
  )
}
