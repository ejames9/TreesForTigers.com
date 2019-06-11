/*
** Carousel.js
**
** Carousel.js is an instance of react-bootstrap's Carousel component....
**
** Eric James Foster, Fostware LLC, MIT License.
***/

// Get React...
import React from 'react'
// Get sc component styling...
import styled from 'styled-components'
// Get react-bootstrap....
import Carousel from 'react-bootstrap/Carousel'



const Carousel =()=>
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


export default Carousel 
