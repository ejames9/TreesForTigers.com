/*
** Star.jsx
**
** Star.jsx is a star graphic for the Trees4Tigers site. It sizes itself randomly/automatically
** and positions itself within a parent container as well...
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Get React, styled-components...
import React, {Component} from 'react'
import styled from 'styled-components'
// Get utils...
import {log, dir} from '../utils/Loggers'




// Component styling...
const StarStyler = styled.div`
  position: absolute;
  border-radius: 50%;
  background: white;
`

// Component...
export default class Star extends Component {
// Ctor...
  constructor(props) {
    super(props)

// bind methods...
    this.getRandomX = this.getRandomX.bind(this)
    this.getRandomY = this.getRandomY.bind(this)
    this.getRandomSize = this.getRandomSize.bind(this)
    this.getWidth = this.getWidth.bind(this)
    this.getHeight = this.getHeight.bind(this)
    this.randomBetweeen = this.randomBetweeen.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.placeStar = this.placeStar.bind(this)
    this.starSize = this.starSize.bind(this)

// Properties...
    this.skyWidth = null
    this.skyHeight = null
    this.star = React.createRef()
  }


  componentDidMount() {
    this.skyWidth = this.getWidth()
    this.skyHeight = this.getHeight()
// Set the position of the star...
    this.placeStar()
    this.starSize()
  }


//Method for placing this star within it's parent component...
  placeStar() {
// get x coord and apply....
    this.star.current.style.left = `${
      this.getRandomX()
    }`
// get y cood and apply....
    this.star.current.style.top = `${
      this.getRandomY()
    }`
  }


// Method for randomly determining the size of the star....
  starSize() {
// get height and apply...
    this.star.current.style.height = `${
      this.getRandomSize()
    }`
// get width and apply....
    this.star.current.style.width = `${
      this.getRandomSize()
    }`
  }

// Method for returning the width of the parent component...
  getWidth() {
    return this.star.current.parentNode.offsetWidth
  }

// Method for returning the height of the parent component...
  getHeight() {
    return this.star.current.parentNode.offsetHeight
  }

// Method for returning a random value between a min and max...
  randomBetweeen(min, max) {
    return Math.random() * (max - min) + min
  }

// Method for returning a random px value between 0 and the width of the parent component...
  getRandomX() {
    return `${this.randomBetweeen(0, this.skyWidth)}px`
  }

// Method for returning a random px value between 0 and the height of the parent component...
  getRandomY() {
    return `${this.randomBetweeen(0, this.skyHeight)}px`
  }

// Method for returning a random px value between 0 and a given max...
  getRandomSize() {
    return `${this.randomBetweeen(0, 4)}px`
  }


// Component markup...
  render() {
    return (
      <StarStyler ref={this.star}/>
    )
  }
}
