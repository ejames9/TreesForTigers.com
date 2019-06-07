/*
** BigDiv.js
**
** BigDiv.js is a React component that wraps bootstrap components for the purpose
** of styling them with styled-components...
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
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'


// Component for holding level two layout...
const BigDiv = styled.div`
  position: relative;
  height: ${props=> props.height}px;
  width: 100%;
  background: #797979;

  div {
    background: #797979;
  }

  .container-fluid .row .left {
    padding-left: 1.5rem;
    padding-right: 2rem;

    .card-body {
      padding-top: 2rem;

      .card-subtitle {
        font-size: 1.2rem;
        font-weight: 400;
        color: #a1a1a1;
      }
    }
  }

  .container-fluid .row .middle {
    padding-left: 1.5rem;
    padding-right: 2rem;

    .card-body {
      position: relative;
      top: .5rem;
      padding-top: 0;

      .card-subtitle {
        font-size: 1.4rem;
        font-weight: 400;
        color: #a1a1a1;
      }

    }
  }

  .container-fluid .row .right {
    padding-right: 1.5rem;
    padding-left: 2rem;

    .card-body {
      position: relative;
      top: -.5rem;
      padding-top: 0;

      .card-subtitle {
        font-size: 1.2rem;
        font-weight: 400;
        color: #a1a1a1;
      }
    }
  }

  .container-fluid .row .left,
  .container-fluid .row .right {
    div.card {
      margin: 0 auto;
    }
  }

  .container-fluid .row .left,
  .container-fluid .row .right,
  .container-fluid .row .middle {
    background: #797979;
    padding-top: 5rem;

    .card-body {
      font-family: telex, -apple-system;
    }
  }

  #cub {
    border-radius: 5%;
    border: .7rem solid #a1a1a1;
  }

  #chopsticks {
    border-radius: 50%;
    border: 1.5rem solid #dd3d32;
    box-shadow: 0px 0px 0px .12rem black;
  }

  #ban {
    position: relative;
    top: -12.0rem;
    left: 1rem;
    height: 2.5rem;
    width: 18.75rem;
    background: #dd3d32;
    transform: rotate(45deg);
  }

  #carousel {
    width: 100%;
  }

  #carousel img {
    height: 100%;
    width: 100%;
  }
`

// Level two markup....
const LevelTwo =({height})=>
  <React.Fragment>
    <BigDiv height={height}>
      <Container fluid>
        <Row id='row'>
          <Col className='left'>
            <Card style={{width: '75%', height: '100%', border: 'none'}}>
              <Card.Img id='cub' variant="top" src="/styles/assets/images/amurTigerCub01Round.jpg" />
              <Card.Body>
                <h3>Our Vision</h3>
                <Card.Subtitle>Tiger Cubs Running Free!</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Vision</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='middle'>
            <Card.Img style={{visibility: 'hidden'}} variant="top" src="/styles/assets/images/amurTigerCub01Round.jpg" />
            <Card style={{width: '100%', border: 'none'}}>
              <Card.Body>
                <h1>Trees for Tigers</h1>
                <Card.Subtitle>Join our Solution!</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="success">Solution</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='right'>
          <Card style={{width: '75%', border: 'none'}}>
            <div>
              <Card.Img id='chopsticks' variant="top" src="/styles/assets/images/chopsticks/chopsticks02.jpg" />
              <div id="ban"></div>
            </div>
            <Card.Body>
              <h3>The Challenge</h3>
              <Card.Subtitle>Disposable Chopsticks!</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant='danger' style={{background: '#dd3d32'}}>Challenge</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </BigDiv>
  </React.Fragment>


export default LevelTwo
