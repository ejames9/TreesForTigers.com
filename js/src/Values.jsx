/*
** Vision.js
**
** Vision.js is the third tier section of the T4T.com site. It deals
** with T4T's vision for helping tigers...
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
import {
  faHeart,
  faHandsHelping,
  faInfinity,
  faPageline,
  faChalkboardTeacher,
  faUserGraduate,
  faGraduateCap,
  faChalkboard,
  faFortAwesome,
  faMapMarkedAlt,
  faAward,
  faFortAwesomeFlag
} from '@fortawesome/free-solid-svg-icons'

// My components...
// import  from './'

// Component styles...
const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  /* background: linear-gradient(to bottom, white 0%, rgba(22, 22, 22, 0.9) 75%, rgba(22, 22, 22, 0.8) 100%); */
  background: white;
  padding-top: 2rem;
  border-top: 1px solid #161616;
  border-bottom: 1px solid #161616;
  /* background: linear-gradient(to bottom, #161616 0%, rgba(22, 22, 22, 0.9) 75%, rgba(22, 22, 22, 0.8) 100%); */
  overflow: hidden;

  .values-row {
    justify-content: center;
    padding: 3rem 2rem 5rem;

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;

      svg {
        color: #161616;
        height: 80px;
        width: 80px;
      }
    }
  }

  .values-card {
    > .card-body > .card-title {
      font-size: 3.5rem;
      color: #797979;

      .award {
        color: #3668b8;
      }
    }
  }

  .card {
    background: transparent;
    border: none;

    .card-body {
      .card-text {
        color: #909090;
      }
    }
  }
`

// Component markup ....
export default function Values() {
  return (
    <Section>
      <Card className='values-card text-center'>
      
        <Card.Body>
          <Card.Title>
            <FontAwesomeIcon className='award' icon={faAward} />
              &nbsp;&nbsp;&nbsp;Our Values&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon className='award' icon={faAward} />
          </Card.Title>
          <Container fluid>
            <Row className='values-row'>
              <Col xs='12' sm='6' md='4' lg='auto'>
                <Card className='text-center'>
                  <FontAwesomeIcon icon={faHandsHelping} />
                  <Card.Body>
                    <Card.Title>Collaboration</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs='12' sm='6' md='4' lg='auto'>
                <Card>
                  <FontAwesomeIcon icon={faInfinity} />
                  <Card.Body>
                    <Card.Title>Sustainability</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs='12' sm='6' md='4' lg='auto'>
                <Card>
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                  <Card.Body>
                    <Card.Title>Empowering Local Action</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs='12' sm='6' md='4' lg='auto'>
                <Card>
                  <FontAwesomeIcon icon={faChalkboard} />
                  <Card.Body>
                    <Card.Title>Education</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs='12' sm='6' md='4' lg='auto'>
                <Card>
                  <FontAwesomeIcon icon={faHeart} />
                  <Card.Body>
                    <Card.Title>Wonder and Awe</Card.Title>
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
