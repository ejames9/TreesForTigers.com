/*
** About.js
**
** About.js is a section component for the t4t website, that displays
** information concerning the formation of t4t....
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
import T4TPhoto from '../graphics/T4TPhoto'
// Get text Components...
import {
  T4TGerminated,
  TreeList
} from '../textContent'


// Component styles...
const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  background: #fff;
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

  .about {
    padding-top: 9rem;
    padding-bottom: 5rem;

    .t4t-col {
      display: flex;
      justify-content: center;
      padding-right: 0;
      padding-left: 0;

      img {
        width: 100%;
        height: 100%;
        border-radius: 2rem;
      }
    }

    .about-text-col {
      order: 2;
      display: flex;
      padding-left: 0;

      img {
        position: relative;
        right: 1rem;
        width: 5rem;
        height: 5rem;
        align-self: flex-end;
      }

      .card {
        align-self: center;
        border-radius: 0 !important;

        .card-body {
          border-radius: none !important;
          text-align: right;

          ul {
            list-style: none;
          }

          .card-subtitle {
            font-size: 2rem;
          }
          .card-text {
            .treesForTigers {
              margin-right: 0;
              padding-right: 0;
              font-size: 1.1rem;
              cursor: pointer;
              color: #007bff;
              font-weight: bold;
            }

            .bold {
              color: #161616;
              font-weight: bold;
              font-style: italic;
            }
            .bold2 {
              color: #161616;
              font-weight: bold;
            }
          }
          .scientific {
            font-style: italic;
            color: #909090;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .about {
      .t4t-col {
        order: 2;
        justify-content: flex-start;
      }
      .about-text-col {
        order: 1;
      }
    }
  }

  @media (min-width: 1100px) {
    .about {

    .t4t-col {
  }
`

// Component markup ....
export default function About() {
  return (
    <Section>
      <Container>
        <Row className='about'>
          <Col className='about-text-col' xs='12' md='6'>
            <Card className='text text-left'>
              <Card.Img className='charity' src='/images/svg/black-white/hearts/046-charity.svg'/>
              <Card.Body>
                <Card.Subtitle>
                  Trees for Tigers is germinated..
                </Card.Subtitle>
                <Card.Text>
                  <T4TGerminated/>
                </Card.Text>
                  <TreeList/>
              </Card.Body>
            </Card>
          </Col>
          <Col className='t4t-col' xs='12' md='6'>
            <T4TPhoto/>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
