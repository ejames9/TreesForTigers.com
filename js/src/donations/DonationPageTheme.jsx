/*
** DonationPageBackDrop.jsx
**
** DonationPageBackDrop.jsx is a component that creates the backdrop for the
** t4t donation page backdrop....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Get react...
import React, {Component} from 'react'
// Get react-bootstrap lib...
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// Get styled-components...
import styled, {createGlobalStyle} from 'styled-components'
// Get tweening...
import TWEEN from '@tweenjs/tween.js'

import Star from '../graphics/Star'
import Fireworks from '../graphics/Fireworks'

import {log, dir} from '../utils/Loggers'
import {times, isMobile} from '../utils/utils'



// Cover backdrop
const coverOverlay = '/images/svg/landscapes/branches.svg'
const coverOverlayPortrait = '/images/tigerSkin02.jpg'
const tigerPNG = '/images/stalkingTiger0.png'
const moon = '/images/moon.png'



const Moon = styled.img.attrs({
  src: moon
})`
  &.moon {
    display: block;
    position: absolute;
    top: -35%;
    left: 5%;
    width: 170px !important;
    height: 170px;
    transition: top 1s;
    display: none;
    z-index: 1002;
  }

  @media (min-width: 813px) {
    &.moon {
      display: block;
    }
  }
`

const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  width: 100%;
  height: 60%;
  overflow: hidden;
  pointer-events: none;
  z-index: 999;
`

const Twinkling = styled.div`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60%;
  background: transparent url(/images/twinkler.png) repeat top center;
  z-index: 1000;
  pointer-events: none;
  animation: move-twinkler 200s linear infinite;

  @keyframes move-twinkler {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }
`


const Clouds = styled.div`
  position: absolute;
  display: block;
  top: -10%;
  left: 0;
  right: 0;
  width: 100%;
  height: 75%;
  opacity: .8;
  background: transparent url(/images/clouds.png) repeat top center;
  z-index: 1004;
  animation: move-clouds 350s linear forwards;
  transition: opacity 3s ease;
  pointer-events: none;
  display: none;

  @keyframes move-clouds {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 0;
    }
  }

  @media (min-width: 813px) and (orientation: landscape) {
    display: block;
    height: 60%;
  }
`

//The cover component....
const Sky = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  min-height: 35rem;
  min-width:100%;
  padding: 0;
  margin: 0;
  background: linear-gradient(to bottom,  #6b219d 60%, #ffd111 100%);
  transition: background 2s;
  pointer-events: none;
  /* pointer-events: none; */

  img#brush {
    position: fixed;
    width: 100%;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    /* bottom: 0; */
    pointer-events: none;
    display: none;
    z-index: 1005;
  }

  @media (min-width: 660px) {
    height: auto;
    ${isMobile()&&
      `bottom: 0;`
    }

    img#brush {
      display: block;
      ${isMobile()&&
        `height: 100%;\n
         width: auto;`
      }
    }
  }

  @media (min-width: 768px) and (orientation: portrait) {
    height: ${screen.height}px;

    img#brush {
      height: 50%;
      width: 100%;
      top: auto;
      bottom: 0;
    }
  }

  @media (min-width: 992px) {
    height: 100vh;
    padding: 0;

  }
`

const Tiger = styled.img.attrs({
  src: tigerPNG
})`
  position: absolute;
  width: 40rem;
  bottom: 0;
  right: -35%;
  display: none;
  z-index: 1004;

  @media (min-width: 813px) {
    display: block;
  }
`


export default class BackDrop extends Component {
// Ctor ...
  constructor() {
    super()
// Bind methods...
    this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.dayBreaker = this.dayBreaker.bind(this)
    this.eveDropper = this.eveDropper.bind(this)
    this.dawner = this.dawner.bind(this)
    this.dawnSkipper = this.dawnSkipper.bind(this)
    this.looper = this.looper.bind(this)
    this.grabControls = this.grabControls.bind(this)
    this.fireworksShow = this.fireworksShow.bind(this)
    this.getNumberOfStars = this.getNumberOfStars.bind(this)

// Creat a ref for the background component...
    this.sky = React.createRef()
/// Creat a ref for the Moon component...
    this.moon = React.createRef()
// Creat a ref for the stars component...
    this.stars = React.createRef()
// Creat a ref for the twinkling component...
    this.twinkle = React.createRef()
/// Creat a ref for the clouds component...
    this.clouds = React.createRef()
/// Creat a ref for the tiger component...
    this.tiger = React.createRef()

// These properties will hold the stop/ start functions for the fireworks...
    this.startFireworks = null
    this.stopFireworks = null

// Set a listener on the window to track pointer coordinates...
    window.onpointermove =e=> {
      this.dayBreaker(e.y)
    }
  }

// Post mount ops...
  componentDidMount() {
// Send clouds ref...
    this.props.data({
      ref: {
        clouds: this.clouds.current
      }
    })

    // this.dawner()
  }


// Method for scooping start from a child component....
  grabControls(start, stop) {
// Assign the funcs....
    this.startFireworks = start
    this.stopFireworks = stop
  }


// A method for changing the background blend percentage, based on the y coordinate's
// percentage of the total screen height...
  dayBreaker(y) {
    if (!this.props.stillNight) {
      let percent = (y / screen.height) * 100
      this.sky.current.style.background = `linear-gradient(to bottom, #6b209d ${percent}%, #ffd111 100%)`

      if (percent <= 80) {
        this.stars.current.style.maxHeight = `${percent}%`
        this.twinkle.current.style.maxHeight = `${percent}%`
        this.twinkle.current.style.background = `transparent url(/images/twinkler.png) repeat top center`
        this.moon.current.style.top = `-35%`

      } else {
        this.eveDropper()
      }
    }
  }


// Method for changing aesthetic from day to night....
  eveDropper() {
    this.sky.current.style.background = `linear-gradient(to bottom, #151515 55%, #6b209d 100%)`
    this.twinkle.current.style.background = `transparent url(/images/twinkler000.png) repeat top center`
    this.stars.current.style.maxHeight = `55%`
    this.twinkle.current.style.maxHeight = `55%`
    this.moon.current.style.top = `20%`
  }


// Method for kicking off the animation loop...
  looper() {
// Setup the animation loop.
    function animate(time) {
      requestAnimationFrame(animate);
      TWEEN.update(time);
    }
    requestAnimationFrame(animate);
  }


// An animation for those who have successfully completed a donation payment...
  dawner() {
    let sky = this.sky.current,
    twinkle = this.twinkle.current,
    stars = this.stars.current,
    moon = this.moon.current,
    clouds = this.clouds.current,
    tiger = this.tiger.current,
    obj0 = {x: 85},
    obj1 = {x: 55},
    obj2 = {x: 100},
    obj3 = {x: -35},
    obj4 = {
      r1: 107, g1: 32, b1: 157,
      r2: 255, g2: 209, b2: 17
    }

    this.looper()

// Create new tween
    const stalkingTiger = new TWEEN.Tween(obj3)

// Define the tween....
    stalkingTiger
      .to({x: 85}, 10000)
      .easing(TWEEN.Easing.Linear.None)
      .onStart(()=> {
        tiger.style.transform = ''
      })
      .onUpdate(()=> {
        tiger.style.right = `${obj3.x}%`
      })

// Create new tween
    const tigerReturn = new TWEEN.Tween(obj0)

// Define the tween....
    tigerReturn
      .to({x: -35}, 10000)
      .easing(TWEEN.Easing.Linear.None)
      .onStart(()=> {
        tiger.style.transform = 'scaleX(-1)'
      })
      .onUpdate(()=> {
        tiger.style.right = `${obj0.x}%`
      })

      stalkingTiger.chain(tigerReturn)
      tigerReturn.chain(stalkingTiger)

/// Create new tween
    const darkMorning = new TWEEN.Tween(obj1)

// Define the tween....
    darkMorning
      .to( {x: 0}, 500)
      .easing(TWEEN.Easing.Exponential.Out)
      .onStart(()=> {
// kill twinkling....
        twinkle.style.display = 'none'
        twinkle.style.animation = 'paused'
      })
      .onUpdate(()=> {
        sky.style.background = `linear-gradient(to bottom, #151515 ${obj1.x}%, #6b209d 100%)`
        moon.style.top = `-25%`
      })



///Create new tween
    const dawn = new TWEEN.Tween(obj2)

// Define the tween....
    dawn
      .to( {x: 0}, 2000)
      .easing(TWEEN.Easing.Bounce.In)
      .onStart(()=> {
        this.stopFireworks()
      })
      .onUpdate(()=> {
        sky.style.background = `linear-gradient(to bottom, #151515 0%, rgb(107, 32, 157) ${obj2.x}%, rgb(255, 209, 17) 100%)`

        if (obj2.x <= 80) {
          stars.style.maxHeight = `${obj2.x}%`
          twinkle.style.maxHeight = `${obj2.x}%`
          twinkle.style.background = `transparent url(/images/twinkler.png) repeat top center`
        }
      })

//Create new tween
    const day = new TWEEN.Tween(obj4)

// Define the tween....
    day
      .to({
        r1: 64, g1: 115, b1: 255,
        r2: 186, g2: 220, b2: 220
      }, 5000)
      .easing(TWEEN.Easing.Quintic.In)
      .onStart(()=> {
        setTimeout(()=> {
          stalkingTiger
            .start()
        }, 2000)
      })
      .onUpdate(()=> {
        sky.style.background = `linear-gradient(
          to bottom,
          rgb(${obj4.r1}, ${obj4.g1}, ${obj4.b1}) 0%,
          rgb(${obj4.r2}, ${obj4.g2}, ${obj4.b2}) 100%
        )`
      })

// Chain animations, and start....
  darkMorning
    .chain(
      dawn.
        chain(
          day
        )
    )
    .delay(2000)
    .start()
  }


// This method skips the dawn animation, and goes straight to day, for mobile....
  dawnSkipper() {
    let obj = {
      r2: 107, g2: 32, b2: 157,
      r1: 21, g1: 21, b1: 21,
      p: 55
    },
    sky = this.sky.current,
    twinkle = this.twinkle.current,
    stars = this.stars.current

// Start the animation frame.....
    this.looper()

//Create new tween
    const day = new TWEEN.Tween(obj)

// Define the tween....
    day
      .to({
        r1: 64, g1: 115, b1: 255,
        r2: 186, g2: 220, b2: 220,
        p: 0
      }, 3000)
      .easing(TWEEN.Easing.Quintic.In)
      .onStart(()=> {
// Kill fireworks...
        this.stopFireworks()

// kill twinkling....
        twinkle.style.display = 'none'
        twinkle.style.animation = 'paused'
// Kill the stars...
        stars.style.display = `none`
      })
      .onUpdate(()=> {
        sky.style.background = `linear-gradient(
          to bottom,
          rgb(${obj.r1}, ${obj.g1}, ${obj.b1}) ${obj.p}%,
          rgb(${obj.r2}, ${obj.g2}, ${obj.b2}) 100%
        )`
      })

    day.start()
    log('START SKIPPING', 'orange')
  }


// Do not re-render this component ....
  shouldComponentUpdate(props, state) {
    if (
      (this.props.night === false &&
      props.night === true) ||
      (this.props.dawn === false &&
      props.dawn === true)
    ) {
      log('UPDATING', 'red')
      return true
    } else {
      return false
    }
  }


// Method creates the evening fireworks show scene...
  fireworksShow() {
//// Delete when finished ......
    this.clouds.current.style.animationPlayState = 'paused'
    this.clouds.current.style.opacity = '0'

// Start off with evening scene...
    this.eveDropper()

// Start the fireworks...
    this.startFireworks()
  }


// Method for determining how many stars to use for a given screen size...
  getNumberOfStars() {
    let squareHundreds = (screen.height * screen.width) / 100,
    starsPerSH = 14

    log('STARS', 'red')
    log(Math.floor(squareHundreds / starsPerSH))

    return Math.floor(squareHundreds / starsPerSH)
  }


// component markup...
  render() {
    if (this.props.night) {
      this.fireworksShow()
    }

    if (this.props.dawn) {
      if (screen.width >= 768) {
        this.dawner()
      } else {
        log('DAWNSKIPPER', 'tomato')
        this.dawnSkipper()
      }
    }

    return (
      <Sky className='sky' ref={this.sky}>
        <Stars ref={this.stars}>
          { times(this.getNumberOfStars(), Star)  }
        </Stars>
        <Twinkling ref={this.twinkle}/>
        <Moon ref={this.moon} update={false} className='moon'/>
        <Fireworks grabber={this.grabControls}/>
        <Clouds ref={this.clouds}/>
        <Tiger ref={this.tiger}/>
        <img id='brush' src={coverOverlay}/>
      </Sky>
    )
  }
}
