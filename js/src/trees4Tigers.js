/*
** tress4Tigers.js
**
** tress4Tigers.js is the index file for the Trees4Tigers.com nonprofit
** information and donation web site....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Imports ...
import React from 'react'
// Get reactDOM...
import reactDOM from 'react-dom'
// Get styled-components...
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
// Get react bootstrap components...
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
// Get modules/components ....
import T4TLogo from './T4TLogo'
import NavBar from './NavBar'
import LevelTwo from './BigDiv'
import ScrollIndicator from './ScrollIndicator'
// Utilities...
import el from './utils/DOM/el'
import { log, dir } from './utils/Loggers'
import { isOffscreen as isOff } from './utils/Is'

window.isOffscreen = isOff


// Cover backdrop
const coverOverlay = './assets/images/amurTiger01.jpg'
// Global styles....
const GlobalStyle = createGlobalStyle`
// Google fonts...
  @import url("https://fonts.googleapis.com/css?family=Covered+By+Your+Grace|Dancing+Script:400,700|Gabriela|Just+Another+Hand|Pacifico|Reem+Kufi|Sacramento|Telex&display=swap");
// Styles ...
  html {
    padding: 0;
    margin: 0;
    background: black;
  }

  body {
    padding: 0;
    margin: 0;
    background: black;
  }
`

// The cover component....
const Cover = styled.img.attrs({
  src: coverOverlay
})`
  height: 100%;
  width: 100%;
  z-index: -1;
`

const CarouselCubs =()=>
  <React.Fragment>
    <Carousel id='carousel'>
      <Carousel.Item >
        <img
          src="/assets/images/amurTigerCubs01.jpg"
        />
        <Carousel.Caption>
          <h3>Our Vision</h3>
          <p>Tiger cubs running free!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/assets/images/amurTigerCub01.jpg"
        />
        <Carousel.Caption>
          <h3>Our Vision</h3>
          <p>Tiger cubs running free!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/assets/images/amurTigerCub03.jpg"
        />
        <Carousel.Caption>
          <h3>Our Vision</h3>
          <p>Tiger cubs running free!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/assets/images/tigerAndCub01.jpg"
        />
        <Carousel.Caption>
          <h3>Our Vision</h3>
          <p>Tiger cubs running free!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </React.Fragment>


// The app....
class App extends React.Component {
// Ctor ...
  constructor() {
    super()
    this.state = {
      screenHeight: null,
      screenWidth: null,
      navBarHeight: null
    }
  }

// Post mount component adjustments ....
  componentDidMount() {
// Go ahead and set the sreen dimensions...
    this.setState({
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth,
      navBarHeight: el('.navbar').clientHeight
    })
  }

// Component markup ...
  render() {
    return (
      <React.Fragment>
        <GlobalStyle/>
        <NavBar/>
        <Cover/>
        <ScrollIndicator/>
        <T4TLogo/>
        <LevelTwo height={this.state.screenHeight - (this.state.navBarHeight + 1)}/>
      </React.Fragment>
    )
  }
}

// Application rendering....
reactDOM.render(
  <App/>, document.getElementById('root')
)
