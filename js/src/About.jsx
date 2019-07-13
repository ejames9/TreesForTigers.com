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
import T4TLogo from './T4TLogo'

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
      justify-content: flex-end;
      padding-right: 0;

      img {
        width: 100%;
        height: 100%;
        border-radius: 2rem;
      }
    }

    .about-text-col {
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
          .question {
            color: #161616;
            font-weight: bold;
            font-style: italic;
          }
          .scientific {
            font-style: italic;
          }
        }
      }
    }
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
              <Card.Img className='charity' src='./assets/images/svg/hearts/046-charity.svg'/>
              <Card.Body>
                <Card.Subtitle>
                  Trees for Tigers is germinated..
                </Card.Subtitle>
                <Card.Text>
                    The idea for Trees for Tigers took form when Kim and Rob Voyle went on an Amur Tiger
                  Tracking Eco-Tour in Eastern Russia with Martin Royle from Royle Safaris. Along with other guests,
                  they stayed at Alexander Batalov's conservation base camp. Over the
                  dinner table and while touring the region, they considered the plight of the tigers.
                  At the top of their food chain, tigers can essentially take care of themeselves. That is, provided that they have food
                  (primarily boar, but also deer). So, the focus shifted from <span className='question'>what tigers need to survive</span>,
                  to <span className='question'>what boars need to flourish. </span>
                  And the answer, as mentioned above, is <span>Trees!</span> But not just any trees, more specifically, the following
                  four species of nut bearing tree:
                </Card.Text>
                <ul>
                  <li>Mongolian Oak, <span className='scientific'>Quercus mongolica</span></li>
                  <li>Manchurian Walnut, <span className='scientific'>Juglans mandshurica</span></li>
                  <li>Korean Pine, <span className='scientific'>Pinus koraiensis</span></li>
                  <li>Siberian Cedar, <span className='scientific'>Pinus sibirica</span></li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col className='t4t-col' xs='12' md='6'>
            <T4TLogo/>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
