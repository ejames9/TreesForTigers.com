/*
** NoChopsticks.js
**
** NoChopsticks.js is an image component, that has a thick red border, and
** and a thick red line across it at 45deg angle, to emulate a ban symbol
** This bit of code has been separated into it's own component, for it's
** intricate need for media queries....
**
** Eric James Foster, Fostware LLC, MIT License.
***/



// Get React...
import React from 'react'
// Get sc component styling...
import styled from 'styled-components'
// Get react-bootstrap....
import Card from 'react-bootstrap/Card'



// Component styles...
const Container = styled.div`
  #chopsticks {
    border-radius: 50%;
    border: .9rem solid #dd3d32;
    box-shadow: 0px 0px 0px .12rem black;
  }

  #ban {
    position: relative;
    top: -7.5rem;
    right: 0;
    left: 0;
    margin: 0 auto;
    height: .9rem;
    width: 12.4rem;
    background: #dd3d32;
    transform: rotate(45deg);
  }

/********* Target iPhone 6/7/8 ********/
  @media (min-width: 360px) {
    #ban {
      width: 14.5rem;
      height: 1.2rem;
      top: -8.7rem;
    }
  }

/********* Target iPhone 6/7/8 ********/
  @media (min-width: 410px) {
    #ban {
      top: -9.5rem;
      width: 17.3rem;
    }
  }

  @media (min-width: 520px) {
    #ban {
      width: 22rem;
    }
  }

  @media (min-width: 533px) {
    #ban {
      top: -13rem;
    }
  }

  @media (min-width: 550px) {
    #ban {
      top: -14rem;
      width: 22.5rem
    }
  }
/* *** Targeting iPhone 5/SE Landscape *** */
  @media (min-width: 560px) and (max-height: 350px) {
    height: 55%;
    width: 55%;

    #ban {
      top: -6.5rem;
      width: 10.8rem;
    }
  }

  @media (min-width: 576px) {
    #chopsticks {
      border: .5rem solid #dd3d32;
    }
    #ban {
      top: -4.0rem;
      left: 0rem;
      height: .5rem;
      width: 7.5rem;
    }
  }

  @media (min-width: 600px) {
    #chopsticks {
      border: .5rem solid #dd3d32;
    }
    #ban {
      top: -4.3rem;
      height: .5rem;
      width: 7.6rem;
    }
  }

  @media (min-width: 628px) {
    #chopsticks {
      border: .5rem solid #dd3d32;
    }
    #ban {
      top: -4.7rem;
      height: .5rem;
      width: 8rem;
    }
  }

/* *** Target iPhone 6/7/8 LandScape *** */
  @media (min-width: 660px)
    and (orientation: landscape) {
      position: relative;
      bottom: 3rem;
      height: 40%;
      width: 40%;

      #chopsticks {
        border: .8rem solid #dd3d32;
      }
      #ban {
        top: -7.4rem;
        height: .9rem;
        width: 13.8rem;
      }
  }

  @media (min-width: 665px)
    and (orientation: portrait) {
    #ban {
      top: -5rem;
      width: 8.7rem;
    }
  }

  @media (min-width: 708px) {
    #ban {
      top: -5.3rem;
      width: 8.9rem;
    }
  }

  @media (min-width: 718px) {
    #chopsticks {
      border: .7rem solid #dd3d32;
    }
    #ban {
      top: -5.3rem;
      width: 9.5rem;
      height: .7rem;
    }
  }

/* *** Target iPhone 6/7/8 plus LandScape *** */
  @media (min-width: 735px)
    and (orientation: landscape) {
      #chopsticks {
        border: .7rem solid #dd3d32;
      }
      #ban {
        top: -6.7rem;
        width: 12.5rem;
        height: .9rem;
      }
  }

  @media (min-width: 756px) {
    #ban {
      top: -5.6rem;
      width: 10rem;
    }
  }

/* *** Targeting iPad *** */
  @media (min-width: 760px)
    and (orientation: portrait) {
      position: relative;
      bottom: 4rem;
      height: 70%;
      width: 70%;

      #chopsticks {
        border: 1.1rem solid #dd3d32;
      }
      #ban {
        top: -10rem;
        width: 18rem;
        height: 1.3rem;
      }
  }

  @media (min-width: 790px) {
    #ban {
      top: -5.8rem;
      width: 10.7rem;
    }
  }

  @media (min-width: 835px) {
    #ban {
      top: -6.2rem;
      width: 11.5rem;
    }
  }

  @media (min-width: 889px) {
    #ban {
      top: -6.6rem;
      width: 12.5rem;
    }
  }

  @media (min-width: 943px) {
    #ban {
      top: -7rem;
      width: 13.5rem;
    }
  }

  @media (min-width: 1007px) {
    #chopsticks {
      border: .9rem solid #dd3d32;
    }
    #ban {
      top: -7.5rem;
      width: 14.4rem;
      height: .9rem;
    }
  }

/* *** Targeting iPad *** */
  @media (min-width: 1020px)
    and (orientation: landscape) {
      height: 90%;
      width: 90%;

      #chopsticks {
      border: 1rem solid #dd3d32;
      }
      #ban {
        top: -9.5rem;
        width: 16.5rem;
        height: 1.2rem;
      }
  }

  @media (min-width: 1076px) {
    #ban {
      top: -8rem;
      width: 15.4rem;
    }
  }

  @media (min-width: 1141px) {
    #chopsticks {
      border: 1.2rem solid #dd3d32;
    }
    #ban {
      top: -8.7rem;
      width: 16.3rem;
      height: 1.2rem;
    }
  }

  @media (min-width: 1227px) {
    #ban {
      top: -9.6rem;
      width: 17.7rem;
    }
  }

  @media (min-width: 1325px) {
    #chopsticks {
      border: 1.4rem solid #dd3d32;
    }
    #ban {
      top: -10.7rem;
      width: 18.9rem;
      height: 1.6rem;
    }
  }

  @media (min-width: 1425px) {
    #ban {
      top: -11.2rem;
      width: 19.5rem;
    }
  }
`


// The component...
const NoChopsticks =()=>
  <Container>
    <Card.Img id='chopsticks' variant="top" src="./assets/images/chopsticks02.jpg" />
    <div id="ban"></div>
  </Container>


export default NoChopsticks
