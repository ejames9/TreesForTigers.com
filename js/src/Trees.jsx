/*
** Trees.jsx
**
** Trees.jsx is a section component for the t4t website, that presents
** info about the trees that the organization plants....
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
  background: #fff;
  overflow: hidden;
  padding-top: 4rem;

  > .container {
    .treesTitle {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 7rem;
        height: 7rem;
      }

      h1 {
        color: #161616;
        font-size: 1.5rem;
      }
    }
  }

  .card {
    background: #161616;
    width: 100%;
    height: 100%;
    border: none;
    margin-left: 0;
    border-radius: 0 !important;

    .card-body {
      display: flex;
      flex-direction: column;
      border-radius: none !important;
      justify-content: center;
      align-content: center;

      .card-title {
        color: #dedede;
      }

      .card-subtitle {
        color: #707070;
        border-bottom: .1rem solid #9ee903;
      }

      .card-text {
        color: #909090;
      }
    }
  }

  .trees {
    padding-top: 4rem;
    padding-bottom: 5rem;

    img {
      width: 75%;
      height: 100%;
    }

    .left-side-col {
      display: flex;
      justify-content: flex-end;
      padding-right: 0;
    }

    .right-side-col {
      display: flex;
      justify-content: flex-start;
      padding-left: 0;
    }

    /* .manchurian-col,
    .manchurian-text-col {
      align-items: flex-end;
    }

    .siberian-col,
    .siberian-text-col {
      margin-top: -25%;
    } */
  }
`

// Component markup ....
export default function Trees() {
  return (
    <Section>
      <Container>
        <div className='treesTitle'>
          <div>
            <img src='assets/images/trees/svg/044-reforestation.svg'/>
          </div>
          <h1 className='theTrees'>
            The Trees
          </h1>
        </div>
        <Row className='trees'>
          <Col className='left-side-col manchurian-col' xs='12' md='6'>
            <img src='assets/images/trees/manchurianWalnut-02.jpg'/>
          </Col>
          <Col className='right-side-col manchurian-text-col' xs='12' md='6'>
            <Card className='text text-left'>
              <Card.Body>
                <h1 className='card-title'>Manchurian Walnut</h1>
                <Card.Subtitle>
                  Juglans mandshurica
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col className='left-side-col mongo-oak-text-col' xs='12' md='6'>
            <Card className='text text-right'>
              <Card.Body>
                <h1 className='card-title'>Mongolian Oak</h1>
                <Card.Subtitle>
                  Quercus mongolica
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col className='right-side-col mongo-oak-col' xs='12' md='6'>
            <img src='assets/images/trees/mongolianOak-02.jpg'/>
          </Col>

          <Col className='left-side-col siberian-col' xs='12' md='6'>
            <img src='assets/images/trees/siberianCedar-02.jpg'/>
          </Col>
          <Col className='right-side-col siberian-text-col' xs='12' md='6'>
            <Card className='text text-left'>
              <Card.Body>
                <h1 className='card-title'>Siberian Cedar</h1>
                <Card.Subtitle>
                  Pinus sibirica
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col className='left-side-col korean-text-col' xs='12' md='6'>
            <Card className='text text-right'>
              <Card.Body>
                <h1 className='card-title'>Korean Pine</h1>
                <Card.Subtitle>
                  Pinus koraiensis
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col className='right-side-col korean-col' xs='12' md='6'>
            <img src='assets/images/trees/koreanPine-02.jpg'/>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
