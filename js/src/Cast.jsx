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

    .card-body {
      .t4t {
        font-size: 3rem;
        font-weight: 700;

        .t4tLogo {
          height: 6rem;
          width: 6rem;
          fill: #161616;
        }
      }
      .founding {
        font-size: 1.6rem;
        margin-bottom: 2rem;
        color: #787878;
      }
      .incorporated {
        font-size: 1.6rem;
        color: #676767;
      }
      .members {
        font-size: 1.1rem;
        color: #9a9a9a;
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
        color: #ababab;
      }
      .card-subtitle {
        color: #676767;
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
          <Card.Title className='t4t'>
            <img className='t4tLogo' src="assets/images/trees4TigersLogo.svg" alt="Trees For Tigers"/>&nbsp;&nbsp;Trees For Tigers
          </Card.Title>
          <Card.Subtitle className='founding'>
            Founding Board Members
          </Card.Subtitle>
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
          <Card.Title className='incorporated'>
            Incorporated Board Members
          </Card.Title>
          <Card.Subtitle className='members'>
            Nancy Kluss<br/>
            Celeste Edinger<br/>
            Caroline Leonard<br/>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Section>
  )
}
