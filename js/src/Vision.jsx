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

// My components...
// import  from './'

// Component styles...
const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  background: white;
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

  .vision {
    padding-top: 12rem;
    padding-bottom: 5rem;

    .cubs-img-col {
      display: flex;
      justify-content: flex-end;
      padding-right: 0;

      img {
        width: 100%;
      }
    }

    .vision-text-col {
      display: flex;
      padding-left: 0;

      .card {
        align-self: center;
        border-left: .7rem solid #161616;
        border-radius: 0 !important;

        .card-body {
          border-radius: none !important;
        }
      }
    }
  }
`

// Component markup ....
export default function Vision() {
  return (
    <Section>
      <Container>
        <Row className='vision'>
          <Col className='cubs-img-col' xs='12' md='8'>
            <img src='./assets/images/cubs.jpg'/>
          </Col>
          <Col className='vision-text-col' xs='12' md='4'>
            <Card className='text text-left'>
              <Card.Body>
                <h1 className='card-title'>Our Vision</h1>
                <Card.Subtitle>
                  Saving Tigers, One Tree at a Time..
                </Card.Subtitle>
                <Card.Text>
                  With every tree that we plant, we come a step closer to our goal of providing thriving habititat for the tigers of Eastern Russia.
                </Card.Text>
                <Button variant="outline-dark">Vision</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
