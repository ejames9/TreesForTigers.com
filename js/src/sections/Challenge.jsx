/*
** Challenge.js
**
** Challenge.js is the second tier section of the T4T.com site. It deals
** with the challenge facing Siberian tigers...
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
// Utilities...
import el from '../utils/DOM/el'
import {log, dir} from '../utils/Loggers'


// My components...
import {
  Chopsticks,
  challengeToSurvive
} from '../textContent'

const imageOverlay = 'images/amurTiger01.jpg'
const imageOverlayPortrait = 'images/amurTiger01Portrait.jpg'

// Component styles...
const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  background: linear-gradient(to bottom, #161616 0%, rgba(22, 22, 22, 0.9) 75%, rgba(22, 22, 22, 0.8) 100%);
  color: white;
  overflow: hidden;
  bottom: 2px;

  .container {
    width: 100%;
  }

  .card {
    background: transparent;
    border: none;

    .card-body {
      .card-text {
        color: #909090;
      }
    }

    &.survive {
      padding-top: 10rem;

      > div.tiger {
        width: 70%;
        height: 30rem;
        background: url(${imageOverlayPortrait});
        box-shadow: inset 0px 0px 50px 20px #191919;
        background-position: -50px 0;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 2rem;
        margin: 0 auto;
      }
    }

    &.disposable-chops {
      align-self: center;
    }
  }

  .chopsticks {
    display: flex;
    flex-direction: row;
    padding-top: 4rem;
    width: 100%;
    align-self: center;
    margin-left: 0;

    .chops-img {
      display: none;
    }

    .chops-text {
      display: flex;
      justify-content: center;

      .disposable-chops {
        .card-body {
          text-align: center;

          .card-subtitle {
            font-size: 1.45rem;
            color: #676767;
          }
        }
      }
    }
  }

  @media (min-width: 350px) {
    .card.survive {
      div.tiger {
        background-position: center;
      }
    }
  }

  @media (min-width: 500px) {
    .card.survive {
      div.tiger {
        width: 70%;
        height: 30rem;
        background: url(${imageOverlay});
        box-shadow: inset 0px 0px 100px 50px #191919;
        background-position: -360px 0;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 2rem;
        margin: 0 auto;
      }
    }
  }

  @media (min-width: 760px) {
    .card.survive {
      div.tiger {
        background-position: -225px 0;
      }
    }

    .chopsticks {
      padding-top: 5rem;

      .chops-img {
        display: block;
        padding-right: 0;
        margin-right: -3rem;

        img {
          width: 30rem;
          position: absolute;
          bottom: 0;
        }
      }

      .chops-text {

        .disposable-chops {
          .card-body {
            text-align: left;

            .card-subtitle {
            }
          }
        }
      }
    }
  }

  @media (min-width: 1000px) {
    .card.survive {
      div.tiger {
        background-position: center;
      }
    }

    .chopsticks .chops-text {
      padding-left: 0;
      margin-left: -1.5rem;
    }
  }

  @media (min-width: 1100px) {
    .chopsticks .chops-text {
      margin-left: -3rem;
    }
  }
`

// Component markup ....
export default function Challenge(props) {
// Component markup...
  return (
    <Section>
      <Container>
        <Row>
          <Col>
            <Card className='survive text-center'>
              <div className='tiger'></div>
              <Card.Body>
                <h1 className='card-title'>The Challenge to Survive.</h1>
                <Card.Text>
                  {challengeToSurvive}
                </Card.Text>
                <Button variant="dark" disabled>Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='chopsticks'>
          <Col className='chops-img' xs='0' md='6'>
            <img className='hand' src='images/handChopsticks2.png'/>
          </Col>
          <Col className='chops-text' xs='12' md='6'>
            <Card className='disposable-chops text-center'>
              <Card.Body>
                <h1 className='card-title'>Disposable Chopsticks!</h1>
                <Card.Subtitle>
                  The Biggest Threat to Tigers in Eastern Russia....
                </Card.Subtitle>
                <Chopsticks/>
              </Card.Body>
              <Card.Img src='images/chopsticks04.png'/>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
