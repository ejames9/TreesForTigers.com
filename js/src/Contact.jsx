/*
** Contact.jsx
**
** Contact.jsx is the bottom tier section of the T4T.com site. It deals
** contact info...
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
// Get icons...
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
} from '@fortawesome/free-solid-svg-icons'
import {
  faPaperPlane
} from '@fortawesome/free-regular-svg-icons'
// Component styles...
const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  background: transparent;
  overflow: hidden;

  .icon {
    svg {
      color: white;
      height: 80px;
      width: 80px;
    }
  }
`

// Component markup ....
export default function Contact() {
  return (
    <Section>
      <Container>
        <Row className=''>
          <Col className='icon' xs='12' md='8'>
            <FontAwesomeIcon icon={faPaperPlane}/>
          </Col>
          <Col className='' xs='12' md='4'>
            <Card className=''>
              <Card.Body>
                <h1 className='card-title'></h1>
                <Card.Subtitle>
                </Card.Subtitle>
                <Card.Text>
                </Card.Text>
                <Button variant="outline-dark"></Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
