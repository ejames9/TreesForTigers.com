/*
** tress4Tigers.js
**
** tress4Tigers.js is the index file for the Trees4Tigers.com nonprofit
** information and donation web site....
**
** Eric James Foster, Fostware LLC, MIT License.
***/



//: fIXME [x] Get background image under control, responsively...
//: fIXME [x] Fix right border....
//: fIXME [x] Fix Logo sizing, responsively....
//: fIXME [x] Fix Navbar
//: fIXME [x] Chopsticks ban...
//: fIXME [] Mover scroller...
//: fIXME [x] Adjust 2nd Level start for collapsed state ...
//: fIXME [x] fix bottom sensor....


// Imports ...
import React from 'react'
// Get reactDOM...
import reactDOM from 'react-dom'
// Get styled-components...
import styled from 'styled-components'
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
import BackDrop from './BackDrop'
import GlobalStyle from './GlobalStyles'
// Utilities...
import el from './utils/DOM/el'
import {log, dir} from './utils/Loggers'
import {isOffscreen, isBottom} from './utils/Is'
import mergeData from './utils/mergeData'
import {addClass, removeClass} from './utils/DOM/classList'




// The app....
class App extends React.Component {
// Ctor ...
  constructor(props) {
    super(props)
// An internal state object that will not trigger a render cycle...
    this._state = {
      scroller: null,
      logo: null,
      atScrollBottom: false
    }

// Component state object...
    this.state = {
      scrollerPaused: false,
      screenHeight: null,
      screenWidth: null,
      navBar: null
    }

// Create ref for navbar...
    this.navbar = React.createRef()

// Bind Methods...
    this.getScrollerNode = this.getScrollerNode.bind(this)
    this.getLogoNode = this.getLogoNode.bind(this)
    this.onScroll = this.onScroll.bind(this)
  }

// Method for grabbing a reference to the scroller node....
  getScrollerNode(node) {
// Store the node....
    this._state.scroller = node
  }

/// Method for grabbing a reference to the scroller node....
  getLogoNode(node) {
// Store the node....
    this._state.logo = node
  }

/* This method is the app's scroll handler. Places one listener on window,
and reacts to various conditions...*/
  onScroll(e) {
    window.onscroll =e=> {
// Check if scroller is offscreen, if so, disable animation
      if (isOffscreen(this._state.scroller.current)) {
        for (let child of this._state.scroller.current.childNodes) {
          child.style.animationPlayState = 'paused'
          log('Offscreen', ['red', 'black'])
        }
// Otherwise, make sure the animation is running...
      } else {
        for (let child of this._state.scroller.current.childNodes) {
          child.style.animationPlayState = 'running'
          log('Onscreen', ['red', 'blue'])
        }
      }

// Check to see if we've hit bottom...
      if (isBottom()) {
        log('Bottom!!!', ['red', 'blue'])
        addClass(
          this._state.logo.current,
          'bottom'
        )
      } else {
        log('NO bottom!!!', ['red', 'purple'])
        removeClass(
          this._state.logo.current,
          'bottom'
        )
      }
    }
  }

// On resize adjustments...
  onResize() {
    window.onresize=e=> {
      if (this.state.screenWidth > 992) {
        el('#levelTwo').style.height = this.state.screenHeight - this.state.navbarHeight
      }
    }
  }

// Post mount component adjustments ....
  componentDidMount() {
// Scroll associated operations....
    this.onScroll()
// Resize ops...
    this.onResize()

// Get display dimensions, and height of navbar and store in state obj.....
    this.setState({
// Go ahead and set the sreen dimensions...
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth,
      navbarHeight: this.navbar.current._reactInternalFiber.nextEffect.stateNode.parentNode.previousElementSibling.clientHeight
    })
  }

// Component markup ...
  render() {
    return (
      <React.Fragment>
        <GlobalStyle/>
        <BackDrop/>
        <NavBar id='nav' ref={this.navbar}/>
        <ScrollIndicator scrollerNode={this.getScrollerNode}/>
        <T4TLogo logoNode={this.getLogoNode}/>
        {
          this.state.navbarHeight&&
            <LevelTwo divHeight={this.state.screenHeight - this.state.navbarHeight}/>
        }
      </React.Fragment>
    )
  }
}

// Application rendering....
reactDOM.render(
  <App/>, el('#root')
)
