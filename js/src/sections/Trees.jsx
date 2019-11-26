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
import {
  theTrees,
  Strategy
} from '../textContent'


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
    width: 50%;
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
        font-size: 1.2rem;
      }

      .card-subtitle {
        color: #707070;
        border-bottom: .1rem solid #9ee903;
        font-size: .8rem;
      }

      .card-text {
        color: #909090;
      }
    }
  }

  .trees {
    padding-top: 2rem;
    padding-bottom: 5rem;

    img {
      width: 50%;
      height: 100%;
    }

    .left-side-col {
      display: flex;
      justify-content: center;
      padding-right: 0;
      padding-left: 0;
    }

    .right-side-col {
      display: flex;
      justify-content: center;
      padding-left: 0;
      padding-right: 0;
    }

    .text-col {
      margin-bottom: 1rem;
    }

    .mongo-oak-text-col {
      text-align: left;
    }

    .korean-col,
    .korean-text-col {
      margin-bottom: 0;

      img {
        width: 100%;
      }

      .card {
        width: 100%;

        .card-title {
          font-size: 2rem;
        }

        .card-subtitle {
          font-size: 1.2rem;
        }

        .card-text {
          margin-top: .5rem;
          color: #bcbcbc;
        }
      }
    }

    .planning {
      margin: 1.2rem 0;
    }
  }

  @media (min-width: 768px) {
    .card {
      width: 40%;
    }

    .trees {
      padding-top: 4rem;

      img {
        width: 40%;
      }

      .left-side-col {
        justify-content: flex-end;
      }

      .right-side-col {
        justify-content: flex-start;
      }

      .text-col {
        margin-bottom: 0;
      }

      .mongo-oak-text-col {
        text-align: right;
      }

      .korean-col,
      .korean-text-col {
        margin-bottom: 4rem;

        img {
          width: 75%;
        }

        .card {
          .card-title {
            font-size: 2rem;
          }
        }
      }

      .planning {
        margin: 0;
        margin-bottom: 1.2rem;
      }
    }
  }
`

// Component markup ....
export default function Trees() {
  return (
    <Section>
      <Container>
        <div className='treesTitle'>
          <div>
            <img src='images/trees/svg/044-reforestation.svg'/>
          </div>
          <h1 className='theTrees'>
            The Trees
          </h1>
          <Strategy/>
        </div>
        <Row className='trees'>
          <Col className='left-side-col korean-text-col text-col' xs={{order: 2, span: 12}} md={{order: 1, span: 6}}>
            <Card className='text text-right'>
              <Card.Body>
                <h1 className='card-title'>Korean Pine</h1>
                <Card.Subtitle>
                  Pinus koraiensis
                </Card.Subtitle>
                <Card.Text>
                  {theTrees}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className='right-side-col korean-col' xs={{order: 1, span: 12}} md={{order: 2, span: 6}}>
            <img src='images/trees/koreanPine-02.jpg'/>
          </Col>
          <Col xs={{order: 3, span: 12}} md={{order: 3, span: 12}} className='planning text-center'><h3>Other Important Species:</h3></Col>
          <Col className='left-side-col manchurian-col' xs={{order: 4, span: 12}} md={{order: 4, span: 6}}>
            <img src='images/trees/manchurianWalnut-02.jpg'/>
          </Col>
          <Col className='right-side-col manchurian-text-col text-col' xs={{order: 5, span: 12}} md={{order: 5, span: 6}}>
            <Card className='text text-left'>
              <Card.Body>
                <h1 className='card-title'>Manchurian Walnut</h1>
                <Card.Subtitle>
                  Juglans mandshurica
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col className='left-side-col mongo-oak-text-col text-col' xs={{order: 7, span: 12}} md={{order: 6, span: 6}}>
            <Card className='text'>
              <Card.Body>
                <h1 className='card-title'>Mongolian Oak</h1>
                <Card.Subtitle>
                  Quercus mongolica
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col className='right-side-col mongo-oak-col' xs={{order: 6, span: 12}} md={{order: 7, span: 6}}>
            <img src='images/trees/mongolianOak-02.jpg'/>
          </Col>

          <Col className='left-side-col siberian-col' xs={{order: 8, span: 12}} md={{order: 8, span: 6}}>
            <img src='images/trees/siberianCedar-02.jpg'/>
          </Col>
          <Col className='right-side-col siberian-text-col text-col' xs={{order: 9, span: 12}} md={{order: 9, span: 6}}>
            <Card className='text text-left'>
              <Card.Body>
                <h1 className='card-title'>Siberian Cedar</h1>
                <Card.Subtitle>
                  Pinus sibirica
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
