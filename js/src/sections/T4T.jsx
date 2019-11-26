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
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
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

import {
  collaboration,
  sustainability,
  empowerAction,
  education,
  wonderNAwe
} from '../textContent'


// A simple little function to determine tooltip font-size based on screen.width...
const tooltipStyle =()=> {
  const tooltipStyleSM = {
    fontSize: '.6rem'
  }

  const tooltipStyleMD = {
    fontSize: '.8rem'
  }

  const tooltipStyleLG = {
    fontSize: '.9rem'
  }

  return screen.width > 1000? tooltipStyleLG :
         screen.width > 768? tooltipStyleMD : tooltipStyleSM
}


// Component styles...
const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  /* background: linear-gradient(to bottom, white 0%, rgba(22, 22, 22, 0.9) 75%, rgba(22, 22, 22, 0.8) 100%); */
  background: white;
  padding-top: 4rem;
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

      .tooltip-inner {
        font-size: .1rem;
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
      <Card className='values-card text-center'>
        <Card.Body>
          <Card.Title>
            <img src='images/svg/011-medal.svg'/>
              &nbsp;&nbsp;&nbsp;Our Values&nbsp;&nbsp;&nbsp;
            <img src='images/svg/011-medal.svg'/>
          </Card.Title>
          <Container fluid>
            <Row className='values-row'>
              <Col xs='12' sm='6' md='4' lg='auto'>
                <Card className='text-center'>
                  <OverlayTrigger
                    key='left'
                    placement={'top'}
                    overlay={
                      <Tooltip id='collab' style={tooltipStyle()}>
                        {collaboration}
                      </Tooltip>
                    }
                  >
                    <div><img src='/images/svg/032-puzzle-1.svg' alt="collaboration"/></div>
                  </OverlayTrigger>
                  <Card.Body>
                    <Card.Title>Collaboration</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs='12' sm='6' md='4' lg='auto'>
                <Card>
                  <OverlayTrigger
                    key='top'
                    placement='top'
                    overlay={
                      <Tooltip id='sustain' style={tooltipStyle()}>
                        {sustainability}
                      </Tooltip>
                    }
                  >
                    <div><img src='/images/svg/048-recycle.svg' alt="sustainability"/></div>
                  </OverlayTrigger>
                  <Card.Body>
                    <Card.Title>Sustainability</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs='12' sm='6' md='4' lg='auto'>
                <Card>
                  <OverlayTrigger
                    key='left'
                    placement='top'
                    overlay={
                      <Tooltip id='empower' style={tooltipStyle()}>
                        {empowerAction}
                      </Tooltip>
                    }
                  >
                    <div><img className='iconAdjust' src='/images/svg/001-group.svg' alt="local action"/></div>
                  </OverlayTrigger>
                  <Card.Body>
                    <Card.Title>Empowering Local Action</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs='12' sm='6' md='4' lg='auto'>
                <Card>
                  <OverlayTrigger
                    key='top'
                    placement='top'
                    overlay={
                      <Tooltip id='education' style={tooltipStyle()}>
                        {education}
                      </Tooltip>
                    }
                  >
                    <div><img className='learn iconAdjust' src='/images/svg/024-book-1.svg' alt="education"/></div>
                  </OverlayTrigger>
                  <Card.Body>
                    <Card.Title>Education</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs='12' sm='6' md='4' lg='auto'>
                <Card>
                  <OverlayTrigger
                    key='right'
                    placement='top'
                    overlay={
                      <Tooltip id='wonder' style={tooltipStyle()}>
                        {wonderNAwe}
                      </Tooltip>
                    }
                  >
                    <div><img src='/images/svg/041-magic-wand.svg' alt="wonder and awe"/></div>
                  </OverlayTrigger>
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
