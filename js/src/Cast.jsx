/*
** Cast.js
**
** Cast.js is the fifth tier section of the T4T.com site. It introduces the
** cast of trees for tigers...
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
// My components...
// import  from './'

// Component styles...
const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  background: transparent;
  margin-bottom: 1rem;
  padding-top: 0;
  overflow: hidden;

  .cast-card {
    background: transparent;
    border: none;

    > .card-body {
      > .card-title {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 2rem;
      }
    }
  }

  .cast-row {
    justify-content: center;

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: transparent;
      border: none;

      .card-title {
        color: #dedede;
      }
      .card-subtitle {
        color: #898989;
      }
    }

    img {
      width: 75%;
      border-radius: 50%;
      border: .5rem solid #161616;
    }
  }
`

// Component markup ....
export default function Cast() {
  return (
    <Section>
      <Card className='cast-card text-center'>
        <Card.Body>
          <Card.Title>
            Trees For Tigers
          </Card.Title>
          <Container fluid>
            <Row className='cast-row'>
              <Col xs='12' sm='6' md='auto'>
                <Card className='text-center'>
                  <Card.Img src='./assets/images/KimVoyle.jpg'/>
                  <Card.Body>
                    <Card.Title>Kim Voyle</Card.Title>
                    <Card.Subtitle>President</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs='12' sm='6' md='auto'>
                <Card className='text-center'>
                  <Card.Img src='./assets/images/MartinRoyle.jpg'/>
                  <Card.Body>
                    <Card.Title>Martin Royle</Card.Title>
                    <Card.Subtitle>Vice President, UK & Europe</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs='12' sm='6' md='auto'>
                <Card className='text-center'>
                  <Card.Img src='./assets/images/AlexanderBatalov.jpg'/>
                  <Card.Body>
                    <Card.Title>Alexander Batalov</Card.Title>
                    <Card.Subtitle>Vice President, Russia</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs='12' sm='6' md='auto'>
                <Card className='text-center'>
                  <Card.Img src='./assets/images/RobVoyle.jpg'/>
                  <Card.Body>
                    <Card.Title>Rob Voyle</Card.Title>
                    <Card.Subtitle>Role Unknown</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Section>
  )
}
