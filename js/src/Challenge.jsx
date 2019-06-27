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
// import  from './'

// Component styles...
const Section = styled.section`
  position: relative;
  top: -1px;
  height: auto;
  width: 100%;
  background: linear-gradient(to bottom, #161616 0%, rgba(22, 22, 22, 0.9) 75%, rgba(22, 22, 22, 0.8) 100%);
  color: white;
  overflow: hidden;

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
    }

    &.disposable-chops {
      align-self: center;
    }
  }

  .chopsticks {
    display: flex;
    flex-direction: row;
    padding-top: 5rem;

    .chops-img {
      img {
        width: 40rem;
      }
    }

    .chops-text {
      display: flex;
      justify-content: center;
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
              <Card.Body>
                <h1 className='card-title'>The Challenge to Survive.</h1>
                <Card.Text>
                  One-hundred years ago, there were an estimated 100,000 tigers in the wild. There are now fewer than 3200 tigers of all tiger species in the wild. Tigers have lost 93% of their habitat in the last century. Despite a long history of concern for tigers, wild tiger numbers are at a historic low.
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
                  Deforrestation and habitat destruction due to the insatiable demand for this product, are currently the biggest threat to tigers in the wild.
                </Card.Text>
                <Button variant="outline-light">The Challenge</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
