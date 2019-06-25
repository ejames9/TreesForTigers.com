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
    height: 67%;
    width: 67%;

    #chopsticks {
      border: .8rem solid #dd3d32;
    }
    #ban {
      top: -7rem;
      width: 12rem;
      height: 1.1rem;
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

/* *** Targeting iPad and iPad Air actual portrait *** */
  @media (min-width: 670px)
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
        width: 19rem;
        height: 1.3rem;
      }
  }

/* *** Target iPhone 6/7/8 plus LandScape *** */
  @media (min-width: 735px)
    and (orientation: landscape) {
      transform: scale(1);

      #chopsticks {
        border: 1rem solid #dd3d32;
      }
      #ban {
        top: -9.2rem;
        width: 17.5rem;
        height: 1.1rem;
      }
  }
/*
  @media (min-width: 756px) {
    #ban {
      top: -5.6rem;
      width: 10rem;
    }
  } */

  @media (min-width: 790px) {
    #ban {
      top: -5.8rem;
      width: 10.7rem;
    }
  }

/* *** Target iPhone X LandScape *** */
  @media (min-width: 800px)
    and (orientation: landscape) {
      transform: scale(.85);

      #chopsticks {
        border: 1.2rem solid #dd3d32;
      }
      #ban {
        top: -11rem;
        width: 18.5rem;
        height: 1.5rem;
      }
  }

  @media (min-width: 860px) {
    #ban {
        top: -11.5rem;
        width: 20rem;
      }
  }

  @media (min-width: 910px) {
    #ban {
      top: -12rem;
      width: 21rem;
    }
  }

  @media (min-width: 950px) {
    #ban {
      top: -13rem;
      width: 22rem;
    }
  }

/* *** Targeting iPad Pro portrait *** */
  @media (min-width: 992px)
    and (orientation: portrait) {
      position: relative;
      left: 1rem;
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

/* *** Targeting iPad landscape *** */
  @media (min-width: 992px)
    and (orientation: landscape) {
      height: 110%;
      width: 110%;

      #chopsticks {
      border: 1.3rem solid #dd3d32;
      }
      #ban {
        top: -11.6rem;
        width: 20.4rem;
        height: 1.5rem;
      }
  }


/* *** Targeting Desktops No. 2 & 4, "1280px X 800px & 1024px" *** */
  @media (min-width: 1265px)
    and (max-height: 1040px)
    and (orientation: landscape) {
      transform: scale(.85);
      margin-bottom: 1rem;

      #chopsticks {
      border: 1.4rem solid #dd3d32;
      }
      #ban {
        top: -14rem;
        width: 25rem;
        height: 1.6rem;
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

/* *** Targeting Desktop No. 1, "1366px X 768px" *** */
  @media (min-width: 1360px)
    and (orientation: landscape) {
      transform: scale(.7);
      margin-bottom: -3.5rem;
      margin-right: 2rem;

      #ban {
        top: -14.3rem;
        width: 24.6rem;
        height: 1.6rem;
      }
  }

/* *** Targeting iPad Pro landscape, "1366px X 1024px" *** */
  @media (min-width: 1360px)
    and (min-height: 1000px)
    and (orientation: landscape) {
      transform: scale(.7);
      margin-bottom: -5rem;

      #ban {
        top: -14.3rem;
        width: 24rem;
        height: 1.6rem;
      }
  }

/* *** Targeting Desktop No. 5, "1440px X 900px" *** */
  @media (min-width: 1440px)
    and (orientation: landscape) {
      transform: scale(.77);
      margin-bottom: -8rem;
  }
`


// The component...
const NoChopsticks =()=>
  <Container>
    <Card.Img id='chopsticks' variant="top" src="./assets/images/chopsticks02.jpg" />
    <div id="ban"></div>
  </Container>


export default NoChopsticks
