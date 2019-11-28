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
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
// My components...
// import  from './'

const forBio = 'Click for Bio'

// Component styles...
const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  background: transparent;
  margin-bottom: 0;
  padding-top: 4.5rem;
  border-top: 1px solid #161616;
  overflow: hidden;

  .cast-card {
    background: transparent;
    border: none;

    .card-body {
      padding-bottom: 0;

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
        padding-top: 2rem;
      }
      .members {
        font-size: 1.1rem;
        color: #9a9a9a;

        .role {
          color: #676767;
          font-size: .8rem;
        }
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

      a {
        margin: 0 -1rem;
        padding-right: 0;
      }

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
      transition: all .5s;
    }
    img.bio:active {
      transform: scale(1.3);
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
            <img className='t4tLogo' src="images/logos/trees4TigersLogo.svg" alt="Trees For Tigers"/>&nbsp;&nbsp;Trees For Tigers
          </Card.Title>
          <Card.Subtitle className='founding'>
            Founding Board Members
          </Card.Subtitle>
          <Container fluid>
            <Row className='cast-row'>
              <Col xs='auto'>
                <Card className='text-center'>
                  <OverlayTrigger
                    key='top'
                    placement='top'
                    overlay={
                      <Tooltip id='collab'>
                        {forBio}
                      </Tooltip>
                    }
                  >
                    <a href="/KimVoyle">
                      <Card.Img className='bio' src='/images/treesfortigers/KimVoyle.jpg'/>
                    </a>
                  </OverlayTrigger>
                  <Card.Body>
                    <Card.Title>Kim Voyle</Card.Title>
                    <Card.Subtitle>President</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs='auto'>
                <Card className='text-center'>
                  <OverlayTrigger
                    key='top'
                    placement='top'
                    overlay={
                      <Tooltip id='collab'>
                        {forBio}
                      </Tooltip>
                    }
                  >
                    <a href="/MartinRoyle">
                      <Card.Img className='bio' src='/images/treesfortigers/MartinRoyle.jpg'/>
                    </a>
                  </OverlayTrigger>
                  <Card.Body>
                    <Card.Title>Martin Royle</Card.Title>
                    <Card.Subtitle>Vice President, UK & Europe</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs='auto'>
                <Card className='text-center'>
                  <OverlayTrigger
                    key='top'
                    placement='top'
                    overlay={
                      <Tooltip id='collab'>
                        {forBio}
                      </Tooltip>
                    }
                  >
                    <a href="/AlexanderBatalov">
                      <Card.Img className='bio' src='/images/treesfortigers/AlexanderBatalov.jpg'/>
                    </a>
                  </OverlayTrigger>
                  <Card.Body>
                    <Card.Title>Alexander Batalov</Card.Title>
                    <Card.Subtitle>Vice President, Russia</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs='auto'>
                <Card className='text-center'>
                  <OverlayTrigger
                    key='top'
                    placement='top'
                    overlay={
                      <Tooltip id='collab'>
                        {forBio}
                      </Tooltip>
                    }
                  >
                    <a href="/RobVoyle">
                      <Card.Img className='bio' src='/images/treesfortigers/RobVoyle.jpg'/>
                    </a>
                  </OverlayTrigger>
                  <Card.Body>
                    <Card.Title>Rob Voyle</Card.Title>
                    <Card.Subtitle>Member at Large</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Card.Title className='incorporated'>
            Current Board Members
          </Card.Title>
          <Card.Subtitle className='members'>
            Rex Wheeler - <span className='role'>Board Secretary</span><br/>
            Diana Bratton - <span className='role'>Treasurer</span><br/>
            Celess Edinger - <span className='role'>Member at Large</span><br/>
            Carolyn Leonard - <span className='role'>Member at Large</span><br/>
            Nancy Kluss<br/>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Section>
  )
}
