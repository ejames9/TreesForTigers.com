/*
** trees4Tigers.js
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
//: fIXME [x] Mover scroller...
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
// import T4TLogo from './T4TLogo'
import NavBar from './NavBar'
// import LevelTwo from './BigDiv'
// import ScrollIndicator from './ScrollIndicator'
import Landing from './Landing'
import BottomLanding from './BottomLanding'
import GlobalStyle from './GlobalStyles'
import Challenge from './Challenge'
import Vision from './Vision'
import Trees4Tigers from './Trees4Tigers'
import Cast from './Cast'
import About from './About'
import Trees from './Trees'

// Utilities...
import el from './utils/DOM/el'
import {log, dir} from './utils/Loggers'
import {
  isOffscreen,
  isBottom,
  isSafari
} from './utils/Is'
import mergeData from './utils/mergeData'
import {addClass, removeClass} from './utils/DOM/classList'



// The app....
class App extends React.Component {
// Ctor ...
  constructor() {
    super()
// Bind onscroll method...
    this.onScroll = this.onScroll.bind(this)
  }

/* This method is the app's scroll handler. Places one listener on window,
and reacts to various conditions...*/
  onScroll(e) {
    let classMod = isSafari() ? 'safari-fixed' : 'fixed'

    window.onscroll =e=> {
// Once the user has scrolled down 45 pixels, add fixed class to navbar...
      if (window.pageYOffset > 45) {
        addClass(el('.navbar'), classMod)
      } else {
        removeClass(el('.navbar'), classMod)
      }
    }
  }

// On resize adjustments...
  onResize() {
    document.body.onresize=e=> {

    }
  }

// Orientation change adjustments...
  onOrientationChange() {
// Reload on o-change....
    window.onorientationchange=e=> {
      location.reload()
    }
  }

// Post mount component adjustments ....
  componentDidMount() {
/*
Event Listeners.....>>>
*/
// Scroll associated operations....
    this.onScroll()
  }

// Component markup ...
  render() {
    return (
      <React.Fragment>
        <GlobalStyle/>
        <Landing/>
        <NavBar/>
        <Challenge/>
        <About/>
        <Trees/>
        <Vision/>
        <Trees4Tigers/>
        <BottomLanding/>
      </React.Fragment>
    )
  }
}

// Application rendering....
function render() {
// React rendering...
  return reactDOM.render(<App/>, el('#root'))
}

// Render when dom is ready....
document.addEventListener('DOMContentLoaded', ()=> {
  render()
})


//
// {
//   this.state.navbarHeight&&
//     <LevelTwo divHeight={this.state.screenHeight - this.state.navbarHeight}/>
// }
