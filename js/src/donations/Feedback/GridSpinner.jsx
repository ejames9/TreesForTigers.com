/*
** GridSpinner.jsx
**
** GridSpinner.jsx is an svg spinner for the asynchronous call to confirmCardPayment,
** in the Donation payment process for the t4t site.....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Get react...
import React, {Component} from 'react'
// Get react-bootstrap lib...
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// Get styled-components...
import styled, {createGlobalStyle} from 'styled-components'
import {log, dir} from '../../utils/Loggers'
// Get utils...
import el from '../../utils/DOM/el'
import {
  addClass,
  removeClass
} from '../../utils/DOM/classList'

// Grid color....
const color = '#4073ff'


// Fader styles....
const DarthFader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0;
  transition: opacity .35s ease-in-out;
  z-index: 999;
`

// Spinner styles...
const SpinnerStyler = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: transparent;
  opacity: 0;
  transition: opacity .35s ease-in-out;
  /* height: 12rem;
  width: 12rem; */
  z-index: 9999;
`

// The Component...
function Spinner() {
  return (
    <svg width="105" height="105" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg" fill={color}>
      <circle cx="12.5" cy="12.5" r="12.5">
          <animate attributeName="fill-opacity"
           begin="0s" dur="1s"
           values="1;.2;1" calcMode="linear"
           repeatCount="indefinite" />
      </circle>
      <circle cx="12.5" cy="52.5" r="12.5" fillOpacity=".5">
          <animate attributeName="fill-opacity"
           begin="100ms" dur="1s"
           values="1;.2;1" calcMode="linear"
           repeatCount="indefinite" />
      </circle>
      <circle cx="52.5" cy="12.5" r="12.5">
          <animate attributeName="fill-opacity"
           begin="300ms" dur="1s"
           values="1;.2;1" calcMode="linear"
           repeatCount="indefinite" />
      </circle>
      <circle cx="52.5" cy="52.5" r="12.5">
          <animate attributeName="fill-opacity"
           begin="600ms" dur="1s"
           values="1;.2;1" calcMode="linear"
           repeatCount="indefinite" />
      </circle>
      <circle cx="92.5" cy="12.5" r="12.5">
          <animate attributeName="fill-opacity"
           begin="800ms" dur="1s"
           values="1;.2;1" calcMode="linear"
           repeatCount="indefinite" />
      </circle>
      <circle cx="92.5" cy="52.5" r="12.5">
          <animate attributeName="fill-opacity"
           begin="400ms" dur="1s"
           values="1;.2;1" calcMode="linear"
           repeatCount="indefinite" />
      </circle>
      <circle cx="12.5" cy="92.5" r="12.5">
          <animate attributeName="fill-opacity"
           begin="700ms" dur="1s"
           values="1;.2;1" calcMode="linear"
           repeatCount="indefinite" />
      </circle>
      <circle cx="52.5" cy="92.5" r="12.5">
          <animate attributeName="fill-opacity"
           begin="500ms" dur="1s"
           values="1;.2;1" calcMode="linear"
           repeatCount="indefinite" />
      </circle>
      <circle cx="92.5" cy="92.5" r="12.5">
          <animate attributeName="fill-opacity"
           begin="200ms" dur="1s"
           values="1;.2;1" calcMode="linear"
           repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export default class GridSpinner extends Component {
// Ctor ...
  constructor(props) {
    super(props)

    this.fader = React.createRef()
    this.spinner = React.createRef()



    this.componentDidMount = this.componentDidMount.bind(this)
    this.componentWillMount = this.componentWillMount.bind(this)

    this.state = {
      faderClass: ''
    }


  }

  componentWillMount() {
  }

  componentDidMount(props) {
    // addClass(el('.fader'), 'fade')
    log('fader', 'red')
    dir(this.fader.current)
// Add class asynchronously, so transition will be added....
    setTimeout(()=> {
      addClass(this.fader.current, 'fader')
      addClass(this.spinner.current, 'fader')
    }, 1)
  }

  render() {
    log('faderClass')
    dir(this.state)
    return (
      <React.Fragment>
        <DarthFader ref={this.fader} className='darth'/>
        <SpinnerStyler ref={this.spinner}>
          <Spinner />
        </SpinnerStyler>
      </React.Fragment>
    )
  }
}
