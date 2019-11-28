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
import {VisionText} from '../textContent'

// Component styles...
const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  background: #fff;
  overflow: hidden;
  text-align: center;

  div.tigerSVG {
    display: none;

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

  .vision {
    padding-top: 2rem;
    padding-bottom: 5rem;

    .cubs-img-col {
      display: flex;
      justify-content: flex-end;
      padding-right: 0;
      padding-left: 0;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .vision-text-col {
      display: flex;
      padding-left: 0;

      .card {
        align-self: center;

        .card-body {
          border-radius: none !important;
          text-align: center;

          .card-text {
            span.bold {
              color: #161616;
            }
          }

          .btn {
            margin: 0;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    div.tigerSVG {
      margin-top: 2rem;
      display: inline-block;
      padding: 1.2rem;
      border: .2rem solid #161616;
      border-radius: 50%;

      img.tiger {
        width: 7rem;
        height: 7rem;
      }
    }

    .vision {
      padding-top: 4rem;

      .cubs-img-col {
        padding-left: 15px;

        img {
          border-radius: 2rem;
        }
      }
    }

    .vision-text-col {
      .card {
        .card-body {
          text-align: left !important;

          .btn {
            margin-right: 2rem;
          }
        }
      }
    }
  }

  @media (min-width: 1000px) {
    .vision-text-col {
      .card {
        border-left: .7rem solid #161616;
        border-radius: 0 !important;
      }
    }
  }
`

// Component markup ....
export default function Vision() {
  return (
    <Section>
      <div className='tigerSVG'>
        <img className='tiger' src="/images/svg/black-white/039-tiger.svg" alt="Tiger drawing"/>
      </div>
      <Container>
        <Row className='vision'>
          <Col className='cubs-img-col' xs='12' md='8'>
            <img src='images/tigers/cubs.jpg'/>
          </Col>
          <Col className='vision-text-col' xs='12' md='4'>
            <Card className='text text-left'>
              <Card.Body>
                <h1 className='card-title'>Our Vision</h1>
                <Card.Subtitle>
                  Saving Tigers, One Tree at a Time..
                </Card.Subtitle>
                <VisionText/>
                <Button href='/donate#how-to-help' variant="outline-dark">How You Can Help</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
