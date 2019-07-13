/*
** BackDrop.js
**
** BackDrop.js is a component that contains the background image for the front
** page of the site...
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Get React.....
import React from 'react'
// Get sc component styling...
import styled from 'styled-components'
// get Heart svg..
import Heart from './Heart2'
// get text...
import * as text from './textContent'


// Cover backdrop
const coverOverlay = './assets/images/T4TLanding.jpg'
const coverOverlay2 = './assets/images/T4TLandingPort.jpg'


// The cover component....
const Image = styled.header`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 35rem;
  padding: 15rem 0;
  background: linear-gradient(to bottom, rgba(22, 22, 22, 0.3) 0%, rgba(22, 22, 22, 0.7) 75%, #161616 100%), url(${coverOverlay});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    position: relative;
    top: 7%;
  }

  & .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & h1 {
    font-family: Varela Round;
    font-size: 2.5rem;
    line-height: 2.5rem;
    letter-spacing: 0.8rem;
    background: -webkit-linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    padding-bottom: 1rem;
  }

  & h2 {
    max-width: 20rem;
    font-size: 1rem;
    font-family: 'Nunito';
    letter-spacing: 0.0625em;
    margin-bottom: -2rem;
  }

  & a {
    right: 0;
    left: 0;
    margin: 0 auto;
    align-self: center;
    transition: opacity .1s ease-in;
    opacity: .7;

    img {
      height: 5rem;
      width: 5rem;
      transform: scale(1);
      transition: transform .3s ease-out;
    }
    img:hover {
      transform: scale(1.6);
    }
  }

  & a:hover {
    opacity: 1;
  }


  @media (min-width: 992px) {
    height: 100vh;
    padding: 0;

    & h1 {
      font-size: 4.5rem;
      line-height: 4.5rem;
      letter-spacing: 0.8rem;
    }
    & h2 {
      max-width: 30rem;
      font-size: 1.25rem;
    }
  }

  @media (min-width: 1200px) {
    & h1 {
      position: relative;
      left: 2%;
      font-size: 5.5rem;
      line-height: 5.5rem;
      letter-spacing: 0.9rem;
    }
    & h2 {
      max-width: 30rem;
      font-size: 1.3rem;
    }
  }
`

export default function Landing() {
  return (
    <Image className='masthead'>
      <div className='container d-flex h-100 align-items-center'>
        <div className='text mx-auto text-center'>
          <h1 className='mx-auto my-0 text-uppercase'>Trees For Tigers</h1>
          <h2 className='text-white-50 mx-auto mt-2 mb-5'>{text.trees4Tigers}</h2>
          <a href="">
            <Heart/>
          </a>
        </div>
      </div>
    </Image>
  )
}
