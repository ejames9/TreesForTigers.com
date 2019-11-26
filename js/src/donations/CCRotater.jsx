/*
** CCRotater.jsx
**
** CCRotater is a simple react component that alternates between 3 different credit
** card icons and rerenders.
**
** Eric J. Foster, MIT License
*/

// Get React...
import React, {Component} from 'react'
// Get styled-components...
import styled from 'styled-components'

// for quickly setting default image paths...
import {pub} from '../utils/environmentals'



//
export default class CCIcons extends Component {
// image address list ....
  imageAddresses = [
    "007-discover", "004-diners-club", "005-jcb"
  ]

// Ctor ...
  constructor(props) {
    super(props)

// State obj...
    this.state = {
      currentIndex: 0,
      currentImage: `${pub}/images/svg/credit-cards/007-discover.svg`

    }

// Bind methods...
    this.rotateImage = this.rotateImage.bind(this)

// Set the timer for rotateImage... Grab the Interval ID...
    this.intervalID = setInterval(this.rotateImage, 3000)
  }


// Method for rotating the address of the 4th cc image....
  rotateImage() {
    let idx = this.state.currentIndex === 2 ? 0 : this.state.currentIndex += 1
    this.setState({
      currentIndex: idx,
      currentImage: `${pub}/images/svg/credit-cards/${this.imageAddresses[idx]}.svg`
    })
  }


// Clear the interval upon unmounting of the component....
  componentWillUnmount() {
//
    clearInterval(this.intervalID)
  }


// Component markup....
  render() {
    // log('this.state.currentImage')
    // log(this.currentImage)
    return (
      <React.Fragment>
        <img src={`${pub}/images/svg/credit-cards/003-mastercard-1.svg`} className="mastercard"/>
        <img src={`${pub}/images/svg/credit-cards/002-visa.svg`} className="visa"/>
        <img src={`${pub}/images/svg/credit-cards/001-amex.svg`} className="amex"/>
        <img src={this.state.currentImage} className="rotater"/>
      </React.Fragment>
    )
  }
}
