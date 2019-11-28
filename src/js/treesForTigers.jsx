/*
** trees4Tigers.js
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
// Get react bootstrap components...
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
// Get modules/components ....
// import T4TLogo from './T4TLogo'
import NavBar from './sections/head/NavBar'
// import LevelTwo from './BigDiv'
// import ScrollIndicator from './ScrollIndicator'
import Landing from './sections/head/Landing'
import BottomLanding from './sections/foot/BottomLanding'
import GlobalStyle from './GlobalStyles'
import Challenge from './sections/Challenge'
import Vision from './sections/Vision'
import T4T from './sections/T4T'
import Cast from './sections/Cast'
import About from './sections/About'
import Trees from './sections/Trees'
import Foot from './sections/foot/Foot'

// Utilities...
import el from './utils/DOM/el'
import {log, dir} from './utils/Loggers'
import {
  isSafari
} from './utils/Is'
import mergeData from './utils/mergeData'
import {addClass, removeClass} from './utils/DOM/classList'



// The app....
class App extends React.Component {
// Ctor ...
  constructor() {
    super()
// Bind methods...
    this.onScroll = this.onScroll.bind(this)
    this.onOrientationChange = this.onOrientationChange.bind(this)
  }

/* This method is the app's scroll handler. Places one listener on window,
and reacts to various conditions...*/
  onScroll(e) {
    let classMod = isSafari() ? 'safari-fixed' : 'fixed'

    window.onscroll =e=> {
// Once the user has scrolled down 45 pixels, add fixed class to navbar...
      if (window.pageYOffset > 10) {
        addClass(el('.navbar'), classMod)
      } else {
        removeClass(el('.navbar'), classMod)
      }
    }
  }

// On resize adjustments...
  onResize() {
    document.body.onresize=e=> {
      reloadCSS()
    }
  }

// Orientation change adjustments...
  onOrientationChange() {
// CSS reloading function ...
    function reloadCSS() {
      let links = el('link')
      console.dir(links)
      for (let link in links) {
        if (link.rel == 'stylesheet') {
          link.href += ''
        }
      }
    }
// Reload on o-change....
    window.onorientationchange=e=> {
      reloadCSS()
    }
  }

// Post mount component adjustments ....
  componentDidMount() {
/*
Event Listeners.....>>>
*/
// Scroll associated operations....
    this.onScroll()
// Orientation associated ops...
    // this.onOrientationChange()
  }

// Component markup ...
  render() {
    return (
      <React.Fragment>
        <GlobalStyle/>
        <Landing/>
        <NavBar/>
        <a id='challenge' className='anchor blackLine'/>
        <Challenge/>
        <a id='about' className='anchor'/>
        <About/>
        <a id='trees' className='anchor'/>
        <Trees/>
        <a id='vision' className='anchor blackLine'/>
        <Vision/>
        <a id='cast' className='anchor'/>
        <Cast/>
        <a id='values' className='anchor'/>
        <T4T/>
        <a id='contact' className='anchor'/>
        <BottomLanding/>
        <Foot/>
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
