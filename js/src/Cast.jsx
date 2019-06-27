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
  /* background: linear-gradient(to bottom, white 0%, rgba(22, 22, 22, 0.9) 75%, rgba(22, 22, 22, 0.8) 100%); */
  background: white;
  padding-top: 2rem;
  border-top: 1px solid #161616;
  border-bottom: 1px solid #161616;
  margin-bottom: 5rem;
  /* background: linear-gradient(to bottom, #161616 0%, rgba(22, 22, 22, 0.9) 75%, rgba(22, 22, 22, 0.8) 100%); */
  overflow: hidden;

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

            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Section>
  )
}
