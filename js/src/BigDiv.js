/*
** BigDiv.js
**
** BigDiv.js is a React component that wraps bootstrap components for the purpose
** of styling them with styled-components...
**
** Eric James Foster, Fostware LLC, MIT License.
***/

// Get React...
import React from 'react'
// Get sc component styling...
import styled from 'styled-components'
// Get react-bootstrap....
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
// My components...
import NoChopsticks from './NoChopsticks'


// Component for holding level two layout...
const BigDiv = styled.div`
  position: absolute;
  top: 100%;
  height: auto;
  width: 100%;
  background: #797979;
  overflow: hidden;

  div {
    background: #797979;
  }

  .card {
    height: 100%;
    width: 75%;
    border: none;
  }

  .card .card-mid {
    width: 100%;
  }

  .container-fluid .row .left {
    padding-left: 1.5rem;
    padding-right: 2rem;

    .card-body {
      padding-top: 2rem;

      .card-subtitle {
        font-size: 1.2rem;
        font-weight: 400;
        color: #a1a1a1;
      }
    }

    #cub {
      border-radius: 5%;
      border: .7rem solid #a1a1a1;
    }
  }

  .container-fluid .row .middle {
    padding-left: 1.5rem;
    padding-right: 2rem;

    .card-body {
      position: relative;
      top: -3.5rem;
      padding-top: 0;

      .card-subtitle {
        font-size: 1.4rem;
        font-weight: 400;
        color: #a1a1a1;
      }
    }

    #logo {
      visibility: visible;
    }
  }

  .container-fluid .row .right {
    padding-right: 1.5rem;
    padding-left: 2rem;

    .card-body {
      position: relative;
      top: -.5rem;
      padding-top: 0;
      margin-top: 1.3rem;

      .card-subtitle {
        font-size: 1.2rem;
        font-weight: 400;
        color: #a1a1a1;
      }
    }
  }

  .container-fluid .row .left,
  .container-fluid .row .right {
    div.card {
      margin: 0 auto;
    }
  }

  .container-fluid .row .left,
  .container-fluid .row .right,
  .container-fluid .row .middle {
    background: #797979;
    padding: 5rem 1rem 0;

    .card-body {
      font-family: telex, -apple-system;
    }
  }

/* *** Changing order of Cards for proper story telling order
resumes after 992px breakpoint for cover animation... *** */
  @media (min-width: 300px)
    and (max-width: 992px) {
      .container-fluid .row .left {
        order: 1;
      }
      .container-fluid .row .middle {
        order: 3;
      }
      .container-fluid .row .right {
        order: 2;
      }
  }

/********* Target iphone5/SE portrait ********/
  @media (min-width: 300px)
    and (orientation: portrait) {
    .container-fluid .row .left,
    .container-fluid .row .right,
    .container-fluid .row .middle {
      div.card {
        position: relative;
        right: 0;
        left: 0;
        margin: 0 auto;
        transform: scale(.9)
      }

      .card-body {
        width: 130%;
      }
    }

    .container-fluid .row .right {
      padding-top: 0;

      .card-body {
        margin-top: .5rem;
      }
    }

    .container-fluid .row .middle {
      padding-top: 0;

      div.card {
        #logo {
          width: 120%;
          position: relative;
          right: 2rem;
        }
        .card-body {
          margin-top: 3rem;
          position: relative;
          right: 2rem;

          .card-title {
            font-size: 1.7rem;
          }
          .card-subtitle {
            font-size: 1rem;
          }
        }
      }

    }
  }

/********* Target iPhone 6/7/8 portrait ********/
  @media (min-width: 360px) {
    .container-fluid .row .left,
    .container-fluid .row .right,
    .container-fluid .row .middle {
      div.card {
        transform: scale(1)
      }

      .card-body {
        width: 100%;
      }
    }
    .container-fluid .row .middle {
      div.card {
        margin: 0 auto;
        .card-body {
          margin-top: 2.5rem;
          left: .2rem;
        }
      }
    }
    .container-fluid .row .right {
      padding-top: 5rem;

      div.card {
        position: relative;
        bottom: 3rem;
      }
    }
  }

/********* Target iPhone X ********/
  @media (min-width: 360px) and (min-height: 675px){
    .container-fluid .row .left,
    .container-fluid .row .right,
    .container-fluid .row .middle {
      height: 100%
    }
    .container-fluid .row .left {
      margin-bottom: 4rem;
    }
    .container-fluid .row .middle {
      .card-body {
        margin-top: 3rem;
      }
    }
  }

/********* Target iPhone 6/7/8 plus portrait ********/
  @media (min-width: 410px)
    and (orientation: portrait) {
    .container-fluid .row .left {
      padding-top: 5rem;
      bottom: 1rem;
    }
    .container-fluid .row .right {
      margin-top: 5rem;
      bottom: 3.3rem;
    }
    .container-fluid .row .middle {
      bottom: 2.3rem;
    }
  }

/* *** Target iPhone SE LandScape *** */
  @media (min-width: 560px)
    and (orientation: landscape) {
    .container-fluid .row .left,
    .container-fluid .row .middle,
    .container-fluid .row .right {
      height: 100%;
      width: 100%;

      div.card {
        width: 100%;
        margin: 0 .5rem;
        padding-top: 1rem;
        padding-right: 0;
        margin-right: 0;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;

        .card-body {
          flex: 1 1 2;
        }
        p.card-text {
          margin-bottom: .5rem;
        }
      }
    }
    .container-fluid .row .left {
      div.card {
        #cub {
          height: 40%;
          width: 40%;
          flex: 1;
        }
      }
    }
    .container-fluid .row .middle {
      padding-top: 0;

      #logo {
        position: relative;
        bottom: 2.7rem;
        height: 50%;
        width: 50%;
        flex: 1;
      }
      .card-body {
        max-width: 50%;

        .card-title {
          font-size: 2rem;
        }
      }
    }
    .container-fluid .row .right {
      .card-body {
        margin-left: 1.2rem;
      }
    }
  }

/* Media Queries */
  @media (min-width: 576px) {
    .container-fluid .row .left,
    .container-fluid .row .middle,
    .container-fluid .row .right {
      padding-top: 7rem;

      .card-body {
        padding: 0;
      }
      .card-title {
        font-size: 1.5rem;
      }
    }

    .container-fluid .row .middle {
      padding-top: 14rem;

      /* #logo {
        visibility: hidden;
      } */
      .card-body {
        .card-subtitle {
          font-size: 1.1rem;
        }
      }
    }

    .container-fluid .row .left {
      .card-body {
        padding-top: 2rem;
      }
    }
  }

/* *** Target iPhone 6/7/8 LandScape *** */
@media (min-width: 660px)
  and (orientation: landscape) {
      .container-fluid .row .left {
        padding-top: 5rem;

        div.card {
          #cub {
            order: 2;
            margin-right: 1rem;
          }
          .card-body {
            order: 1;
            max-width: 70%;
          }
        }
      }
      .container-fluid .row .right {
        padding-top: 10rem;

        div.card {
          .card-body {
            left: 1rem;
          }
        }
      }
      .container-fluid .row .middle {
        padding-top: 0;

        div.card {
          left: -1rem;

          #logo {
            order: 2;
          }
          .card-body {
            order: 1;
            margin-left: 1.5rem;
            top: -1.5rem;
          }
        }
      }
  }

  @media (min-width: 735px) {
    /** Noting Yet **/
  }

/* *** Target iPhone 6/7/8 plus LandScape *** */
  @media (min-width: 735px)
    and (orientation: landscape) {
    .container-fluid .row .left,
    .container-fluid .row .right {
      padding-top: 5.7rem;
    }
    .container-fluid .row .middle {
      margin-top: 4.3rem;

      div.card {
        #logo {
          bottom: 7rem;
        }
        .card-body {
          top: -5rem;
        }
      }
    }
    .container-fluid .row .right {
      padding-top: 10rem;

      div.card {
        margin-left: 1.5rem;

        .card-body {
          max-width: 50%;
          margin-left: 1.5rem;
        }
      }
    }
  }

/* *** Targeting iPad portrait *** */
  @media (min-width: 670px)
    and (orientation: portrait) {
      .container-fluid .row .left,
      .container-fluid .row .middle,
      .container-fluid .row .right {
        background: transparent;
        height: 100%;
        width: 100%;

        div.card {
          width: 100%;
          margin: 0 .5rem;
          padding-top: 1rem;
          padding-right: 0;
          margin-right: 0;
          display: flex;
          flex-wrap: nowrap;
          flex-direction: row;

          .card-body {
            flex: 1 1 2;
          }
          /* p.card-text {
            margin-bottom: .5rem;
          } */
        }
      }
      .container-fluid .row .left {
        div.card {
          #cub {
            height: 40%;
            width: 40%;
            margin-bottom: 5rem;
            margin-right: 1.5rem;
            flex: 1;
            order: 2;
          }
          .card-body {
            margin-left: 2rem;
            align-self: center;
            order: 1;
          }
        }
      }
      .container-fluid .row .middle {
        margin-top: 2rem;
        padding-top: 2rem;

        div.card {
          margin-top: -6rem;
          #logo {
            position: relative;
            bottom: 4.3rem;
            height: 50%;
            width: 50%;
            flex: 1;
            order: 2;
            visibility: visible;
          }
          .card-body {
            max-width: 50%;
            margin-top: 5rem;
            margin-right: 1.5rem;
            flex: 1;
            order: 1;
          }
        }
      }
      .container-fluid .row .right {
        padding-top: 0;

        div.card {
          .card-body {
            margin-left: 1.2rem;
          }
        }

      }

    }
  }

/* *** Target iPhone X LandScape *** */
  @media (min-width: 800px)
    and (orientation: landscape) {
      .container-fluid .row .left {
        div.card {
          #cub {
            height: 30%;
            width: 30%;
          }
        }
      }
      .container-fluid .row .middle {
        div.card {
          position: relative;
          top: -6rem;
          z-index: 4;

          #logo {
            transform: scale(.8);
          }
          .card-body {
            top: -1rem;
          }
        }
      }
      .container-fluid .row .right {
        div.card {
          z-index: 3;

          .card-body {
            margin-left: 0rem;
            top: 1rem;
          }
        }
      }
  }

  /* @media (min-width: 800px) {
    .container-fluid .row .middle {
      .card-body {
        top: -6.5rem;
      }
    }
  }

  @media (min-width: 910px) {
    .container-fluid .row .middle {
      .card-body {
        top: -5.5rem;
      }
    }
  }

  @media (min-width: 950px) {
    .container-fluid .row .middle {
      .card-body {
        top: -6.5rem;
      }
    }
  } */

/* Change to single row level two */
  @media (min-width: 992px) {
    height: ${props=> props.divHeight}px;

    .container-fluid .row .middle {
      div.card {
        top: 4.5rem;

        .card-body {
          top: -7.5rem;
        }
      }
    }
  }

/* *** Targeting iPad Pro portrait *** */
  @media (min-width: 992px)
    and (orientation: portrait) {
      .container-fluid .row .left,
      .container-fluid .row .middle,
      .container-fluid .row .right {
        height: 100%;
        background: transparent;

        div.card {
          position: relative;
          display: block;

          .card-body {
            max-width: 80%;

            .card-title {
              font-size: 2rem;
            }
          }
        }
      }
      .container-fluid .row .left {
        width: 75%;
        padding-top: 6rem;

        div.card {
          top: 5rem;

          #cub {
            width: 90%;
            margin-bottom: -.5rem;
          }
          .card-body {
          }
        }
      }
      .container-fluid .row .right {
        width: 75%;
        padding-top: 5rem;

        div.card {
          position: relative;
          top: 7.5rem;

          .card-body {
            margin-top: -3rem;
            max-width: 90%;
          }
        }
      }
      .container-fluid .row .middle {
        width: 100%;
        padding-top: 2rem;

        div.card {
          top: 1.5rem;
          #logo {
            position: relative;
            width: 150%;
            right: 5.5rem;
            visibility: hidden;
          }
          .card-body {
            margin-top: 9.5rem;
            min-width: 100%;
          }
        }
      }
  }

/* *** Targeting iPad LandScape *** */
  @media (min-width: 992px)
    and (orientation: landscape) {
      .container-fluid .row .left,
      .container-fluid .row .middle,
      .container-fluid .row .right {
        height: 100%;
        background: transparent;

        div.card {
          display: block;

          .card-body {
            .card-title {
              font-size: 2.1rem;
            }
          }
        }
      }
      .container-fluid .row .left {
        width: 75%;
        padding-top: 3.3rem;

        div.card {
          top: 2rem;

          #cub {
            width: 90%;
          }
          .card-body {
            max-width: 100%;

          }
        }
      }
      .container-fluid .row .right {
        width: 75%;

        div.card {
          position: relative;
          top: -4rem;
          right: 0;
          left: 0;
          margin: 0 auto;

          #noChopsticks {
            position: relative;
            right: 1rem;
            margin-right: 2rem;
          }
          .card-body {
            margin-top: -4.9rem;
            max-width: 90%;
          }
        }
      }
      .container-fluid .row .middle {
        width: 100%;
        padding-top: 2rem;

        div.card {
          position: relative;
          bottom: 1.5rem;
          #logo {
            position: relative;
            width: 150%;
            right: 5.5rem;
            visibility: hidden;
          }
          .card-body {
            position: relative;
            margin-top: -9.5rem;
            min-width: 100%;
          }
        }
      }
  }

  @media (min-width: 1075px) {
    .container-fluid .row .middle {
      .card-body {
        top: -8.5rem;
      }
    }
  }

  @media (min-width: 1130px) {
    .container-fluid .row .middle {
      .card-body {
        top: -10rem;
      }
    }
  }

  @media (min-width: 1215px) {
    .container-fluid .row .middle {
      .card-body {
        top: -11rem;
      }
    }
  }

/* *** Targeting Desktops No. 2 & 4, "1280px X 800px & 1024px" *** */
  @media (min-width: 1265px)
    and (max-height: 1040px)
    and (orientation: landscape) {
      max-width: 1265px;
      right: 0;
      left: 0;
      margin: 0 auto;

      .container-fluid .row .left,
      .container-fluid .row .middle,
      .container-fluid .row .right {
        .card-title {
          font-size: 2rem;
        }
        .card-body {
          .card-subtitle {
            font-size: 1.5rem;
          }
        }
      }
      .container-fluid .row .left,
      .container-fluid .row .right {
        div.card {
          top: 3rem;
        }
      }
      .container-fluid .row .middle {
        div.card {
          #logo {
            margin-bottom: -1rem;
          }
        }
      }
      .container-fluid .row .right {
        div.card {
          top: -3rem;
          left: -1rem;

          .card-body {
            top: -1rem;
          }
        }
      }
  }

  @media (min-width: 1300px) {
    .container-fluid .row .left,
    .container-fluid .row .middle,
    .container-fluid .row .right {
      .card-title {
        font-size: 2rem;
      }
      .card-body {
        .card-subtitle {
          font-size: 1.5rem;
        }
      }
    }
    .container-fluid .row .left,
    .container-fluid .row .right {
      padding-top: 3.7rem;
    }
    .container-fluid .row .middle {
      .card-body {
        top: -11.8rem;
      }
    }
  }

  @media (min-width: 1330px) {
    .container-fluid .row .middle {
      .card-body {
        top: -12.5rem;
      }
    }
  }

  @media (min-width: 1360px) {
    .container-fluid .row .middle {
      .card-body {
        top: -13.5rem;
      }
    }
  }

/* *** Targeting iPad Pro LandScape, "1366px X 1024px" *** */
  @media (min-width: 1360px)
    and (orientation: landscape)
    and (min-height: 1000px) {
      max-width: 1265px;
      right: 0;
      left: 0;
      margin: 0 auto;

      .container-fluid .row .left,
      .container-fluid .row .right,
      .container-fluid .row .middle {
        .card-body {
          .card-title {
            margin-bottom:.3rem;
          }
        }
      }
      .container-fluid .row .right,
      .container-fluid .row .left {
        div.card {
          top: 5.5rem;
          .card-body {

          }
        }
      }
      .container-fluid .row .left {
        div.card {
          position: relative;
          left: 2rem;
          top: 8.5rem;

          #cub {
            position: relative;
            width: 70%;
          }
          .card-body {
            max-width: 80%;
            padding-top: 1.5rem;
          }
        }
      }
      .container-fluid .row .middle {
        div.card {
          .card-body {
            margin-top: -8rem;
          }
        }
      }
      .container-fluid .row .right {
        div.card {
        }
      }
    }
  }

/* *** Targeting Desktop No. 1, "1366px X 768px" *** */
  @media (min-width: 1360px)
    and (orientation: landscape)
    and (max-height: 800px) {
      .container-fluid .row .left,
      .container-fluid .row .right,
      .container-fluid .row .middle {
        .card-body {
          .card-title {
            margin-bottom:.3rem;
          }
        }
      }
      .container-fluid .row .right,
      .container-fluid .row .left {
        div.card {
          top: 4rem;
        }
      }
      .container-fluid .row .left {
        div.card {
          position: relative;
          left: 3rem;
          top: 5rem;

          #cub {
            position: relative;
            width: 70%;
          }
          .card-body {
            max-width: 80%;
            padding-top: 1.5rem;
          }
        }
      }
      .container-fluid .row .middle {
        div.card {
          #logo {
            margin-bottom: -3rem;
          }

        }
      }
      .container-fluid .row .right {
        div.card {
          position: relative;
          top: 3rem;
          left: -1.5rem;
          margin-right: 6rem;

          .card-body {
            position: relative;
            left: 4rem;
            margin-top: -6rem;
            max-width: 85%;
          }
        }
      }
    }
  }

/* *** Targeting Desktop No. 5, "1440px X 900px" *** */
  @media (min-width: 1440px)
    and (orientation: landscape) {
      .container-fluid .row .left {
        div.card {
          position: relative;
          left: 1.5rem;
          padding-top: 3rem;

          #cub {
            width: 82%;
          }
          .card-body {
            max-width: 90%;
          }
        }
      }
      .container-fluid .row .right {
        div.card {
          position: relative;
          left: -2rem;
          padding-top: 8.5rem;

          .card-body {
            position: relative;
            left: 3rem;
            top: 2.5rem;
          }
        }
      }
      .container-fluid .row .middle {
        #logo {
          margin-bottom: -1rem;
        }
      }
  }

/* *** Targeting Desktop No. 6 and above, "1680px X 1050px" *** */
  @media (min-width: 1665px)
    and (orientation: landscape) {
      .container-fluid .row .left,
      .container-fluid .row .right,
      .container-fluid .row .middle {
        .card-body {
          .card-title {
            font-size: 2.2rem;
          }
          .card-subtitle {
            font-size: 1.6rem;
          }
          .card-text {
            font-size: 1.15rem;
          }
        }
      }
      .container-fluid .row .left {
        div.card {
          padding-top: 1rem;
          left: 1.5rem;
        }
      }
      .container-fluid .row .right {
        div.card {
          position: relative;
          left: -1rem;
          padding-top: 3rem;

          .card-body {
            position: relative;
            left: 3rem;
            margin-top: -1rem;
          }
        }
      }
      .container-fluid .row .middle {
        #logo {
          margin-bottom: 1rem;
        }
      }
  }
`

// Level two markup....
const LevelTwo =({divHeight})=>
  <React.Fragment>
    <BigDiv id='levelTwo' divHeight={divHeight}>
      <Container fluid>
        <Row id='row'>
          <Col className='left' lg='4'>
            <Card>
              <Card.Img id='cub' variant="top" src="./assets/images/amurTigerCub01Round.jpg" />
              <Card.Body>
                <h3 className='card-title'>Our Vision</h3>
                <Card.Subtitle>Tiger Cubs Running Free!</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
              the card's content.
                </Card.Text>
                <Button variant="primary">Vision</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='middle' lg='4'>
            <Card className='card-mid'>
              <Card.Img id='logo' variant="top" src="./assets/images/trees4TigersLogo.svg" />
              <Card.Body>
                <h1 className='card-title'>Trees for Tigers</h1>
                <Card.Subtitle>Join our Solution!</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="success">Solution</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='right' lg='4'>
          <Card>
            <NoChopsticks id='noChopsticks'/>
            <Card.Body>
              <h3 className='card-title'>The Challenge</h3>
              <Card.Subtitle>Disposable Chopsticks!</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant='danger' style={{background: '#dd3d32'}}>Challenge</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </BigDiv>
  </React.Fragment>


export default LevelTwo
