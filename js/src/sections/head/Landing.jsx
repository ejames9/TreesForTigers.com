/*
** Landing.js
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
import Heart from '../../graphics/Heart'
// get text...
import * as text from '../../textContent'


// Cover backdrop
const coverOverlay = '/images/T4TLanding.jpg'
const coverOverlay2 = '/images/T4TLandingPort.jpg'


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
  border: none;

  .container {
    display: flex;
    align-items: center;
    height: 100% !important;
    position: relative;
    top: 7%;

    .title-container {
      position: relative;
      bottom: 8rem;
      margin-right: auto !important;
      margin-left: auto !important;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title {
        font-family: bebas neue, rubik mono one, bowlby one, Staatliches, Varela Round;
        font-size: 3.5rem;
        line-height: 3.5rem;
        letter-spacing: 0.3rem;
        /* background: -webkit-linear-gradient(rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0)); */
        margin: 0 auto !important;
        padding-bottom: 1rem;

        span {
          background: url(/images/amurFur9.jpg);
          /* background-repeat: no-repeat;
          background-size: cover; */
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
         /* -webkit-text-stroke-width: 2px;
         -webkit-text-stroke-color: #161616; */
        }
      }

      .collaborate {
        max-width: 20rem;
        font-size: 1rem;
        font-family: 'Nunito';
        color: #dedede;
        letter-spacing: 0.0625em;
        margin: .5rem auto 3rem !important;
        /* margin-bottom: -2rem; */
      }

      a {
        right: 0;
        left: 0;
        margin: 0 auto;
        align-self: center;

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
    }
  }

  @media (min-width: 768px) and (orientation: portrait) {
    .container {
      .title-container {
        top: 6rem;

        .title {
          font-size: 5.5rem;
          line-height: 5.5rem;
        }
      }
    }
  }

  @media (min-width: 992px) and (orientation: landscape) {
    height: 100vh;
    padding: 0;

    .container {
      .title-container {
        top: 3rem;

        .title {
          font-size: 6.5rem;
          line-height: 6.5rem;
          /* letter-spacing: 0.8rem; */
        }
        .collaborate {
          max-width: 30rem;
          font-size: 1.25rem;
        }
      }
    }
  }

  @media (min-width: 992px) and (orientation: portrait) {
    height: 100vh;
    padding: 0;

    .container {
      .title-container {
        top: -1rem;

        .title {
          font-size: 6.5rem;
          line-height: 6.5rem;
          /* letter-spacing: 0.8rem; */
        }
        .collaborate {
          max-width: 30rem;
          font-size: 1.5rem;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .container {
      .title-container {
        .title {
          position: relative;
          left: 2%;
          font-size: 9rem;
          line-height: 9rem;
          letter-spacing: .1rem;
        }

        .collaborate {
        }
      }
    }
  }

  @media (min-width: 1500px) {
    .container {
      .title-container {
        .title {
          font-size: 9.5rem;
          line-height: 9.5rem;
          letter-spacing: .2rem;
        }
      }
    }
  }
`

export default function Landing() {
  return (
    <Image className='masthead'>
      <div className='container'>
        <div className='title-container text-center'>
          <h1 className='title'>
            <span>TREES </span>
            <span>FOR </span>
            <span>TIGERS</span>
          </h1>
          <h2 className='collaborate'>{text.trees4Tigers}</h2>
          <a href="/donate#donation-widget">
            <Heart/>
          </a>
        </div>
      </div>
    </Image>
  )
}
