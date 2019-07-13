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

// My components...
import  * as text from './textContent'

const imageOverlay = 'assets/images/amurTiger01-2.jpg'

// Component styles...
const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  background: linear-gradient(to bottom, #161616 0%, rgba(22, 22, 22, 0.9) 75%, rgba(22, 22, 22, 0.8) 100%);
  color: white;
  overflow: hidden;

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
        background: url(${imageOverlay});
        box-shadow: inset 0px 0px 100px 50px #191919;
        background-position: center;
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
    padding-top: 5rem;
    width: 100%;

    .chops-img {
      padding-right: 0;
      margin-right: -3rem;

      img {
        width: 30rem;
      }
    }

    .chops-text {
      display: flex;
      justify-content: center;
      padding-left: 0;
      margin-left: -3rem;

      .disposable-chops {
        .card-body {
          text-align: left;

          .card-subtitle {
            font-size: 1.45rem;
            color: #676767;
          }
        }
      }
    }
  }
`

// Component markup ....
export default function Challenge() {
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
                  {text.challengeToSurvive}
                </Card.Text>
                <Button variant="dark">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='chopsticks'>
          <Col className='chops-img' xs='8' md='6'>
            <img src='./assets/images/handChopsticks2.png'/>
          </Col>
          <Col className='chops-text' xs='12' md='6'>
            <Card className='disposable-chops text-center'>
              <Card.Body>
                <h1 className='card-title'>Disposable Chopsticks!</h1>
                <Card.Subtitle>
                  The Biggest Threat to Tigers in Eastern Russia....
                </Card.Subtitle>
                <Card.Text>
                  {text.disposableChopsticks}
                </Card.Text>
                <Button variant="outline-light">The Challenge</Button>
              </Card.Body>
              <Card.Img src='assets/images/chopsticks04.png'/>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
