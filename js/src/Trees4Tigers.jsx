/*
** Trees4Tigers.jsx
**
** Trees4Tigers.jsx is the third tier section of the T4T.com site. It deals
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
  faChalkboard,
  faMapMarkedAlt,
  faAward
} from '@fortawesome/free-solid-svg-icons'
import {
  faFortAwesome
} from '@fortawesome/free-brands-svg-icons'

// My components...
import Cast from './Cast'

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
        height: 5rem;
        width: 5rem;
      }

      img {
        height: 5rem;
        width: 5rem;

        &.iconAdjust {
          position: relative;
          bottom: .5rem;
          transform: scale(1.2);
        }
      }
    }
  }

  .values-card {
    > .card-body > .card-title {
      font-size: 3.5rem;
      color: #797979;

      img {
        width: 5rem;
        height: 5rem;
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
export default function Trees4Tigers() {
  return (
    <Section>
      <Cast/>
      <Card className='values-card text-center'>
        <Card.Body>
          <Card.Title>
            <img src='assets/images/svg/011-medal.svg'/>
              &nbsp;&nbsp;&nbsp;Our Values&nbsp;&nbsp;&nbsp;
            <img src='assets/images/svg/011-medal.svg'/>
          </Card.Title>
          <Container fluid>
            <Row className='values-row'>
              <Col xs='12' sm='6' md='4' lg='auto'>
                <Card className='text-center'>
                  <div><img src='./assets/images/svg/032-puzzle-1.svg' alt="collaboration"/></div>
                  <Card.Body>
                    <Card.Title>Collaboration</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs='12' sm='6' md='4' lg='auto'>
                <Card>
                  <div><img src='./assets/images/svg/048-recycle.svg' alt="sustainability"/></div>

                  <Card.Body>
                    <Card.Title>Sustainability</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs='12' sm='6' md='4' lg='auto'>
                <Card>
                  <div><img className='iconAdjust' src='./assets/images/svg/001-group.svg' alt="local action"/></div>

                  <Card.Body>
                    <Card.Title>Empowering Local Action</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs='12' sm='6' md='4' lg='auto'>
                <Card>
                  <div><img className='learn iconAdjust' src='./assets/images/svg/024-book-1.svg' alt="education"/></div>

                  <Card.Body>
                    <Card.Title>Education</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs='12' sm='6' md='4' lg='auto'>
                <Card>
                  <div><img src='./assets/images/svg/041-magic-wand.svg' alt="wonder and awe"/></div>

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





// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a> messages.attribution.is_licensed_by <a href="http://creativecommons.org/licenses/by/3.0/"     title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
