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
    <svg width="57" height="57" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke={color}>
      <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
              <circle cx="5" cy="50" r="5">
                  <animate attributeName="cy"
                       begin="0s" dur="2.2s"
                       values="50;5;50;50"
                       calcMode="linear"
                       repeatCount="indefinite" />
                  <animate attributeName="cx"
                       begin="0s" dur="2.2s"
                       values="5;27;49;5"
                       calcMode="linear"
                       repeatCount="indefinite" />
              </circle>
              <circle cx="27" cy="5" r="5">
                  <animate attributeName="cy"
                       begin="0s" dur="2.2s"
                       from="5" to="5"
                       values="5;50;50;5"
                       calcMode="linear"
                       repeatCount="indefinite" />
                  <animate attributeName="cx"
                       begin="0s" dur="2.2s"
                       from="27" to="27"
                       values="27;49;5;27"
                       calcMode="linear"
                       repeatCount="indefinite" />
              </circle>
              <circle cx="49" cy="50" r="5">
                  <animate attributeName="cy"
                       begin="0s" dur="2.2s"
                       values="50;50;5;50"
                       calcMode="linear"
                       repeatCount="indefinite" />
                  <animate attributeName="cx"
                       from="49" to="49"
                       begin="0s" dur="2.2s"
                       values="49;5;27;49"
                       calcMode="linear"
                       repeatCount="indefinite" />
              </circle>
          </g>
      </g>
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
