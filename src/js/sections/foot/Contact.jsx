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
  faFacebook,
  faLinkedin,
  faGooglePlus,
  faTwitterSquare,
  faTelegram
} from '@fortawesome/free-brands-svg-icons'
import {
  faPaperPlane
} from '@fortawesome/free-regular-svg-icons'
// get Heart svg..
import Heart from '../../graphics/Heart'
import EmailForm from './EmailForm'

// Get text...
import { mailHref } from '../../textContent'


// Component styles...
const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  background: transparent;
  overflow: hidden;
  text-align: center;

  h1, h2 {
    color: #dedede;
  }

  h1 {
    font-size: 3.5rem;
  }

  h2.solution {
    margin-bottom: 1rem;
  }

  h2.share {
    margin-bottom: 2rem;
  }

  svg.paperPlane {
    color: #dedede;
    height: 3rem;
    width: 3rem;
    margin: 1rem 0;
  }

  a {
    position: relative;
    right: 0;
    left: 0;
    margin: 0 auto;

    svg#heart {
      width: 4rem;
    }
    /* svg#heart:active {
      width: 8rem;
    } */
  }

  .container .row {
    justify-content: center;
    padding-bottom: 3rem;

    .social-col {
      display: flex;
      justify-content: center;

      a {
        padding: 0;

        svg.social {
          color: #dedede;
          width: 3rem;
          height: 3rem;
          opacity: .7;
          transform: scale(1);
          transition: all .2s ease-in-out;
        }
        svg:hover {
          opacity: .9;
          transform: scale(1.2);
        }
        svg:active {
          opacity: 1;
          transform: scale(1.5);
        }
      }
    }
  }
`

// Component markup ....
export default function Contact() {
  return (
    <Section>
      <FontAwesomeIcon className='paperPlane' icon={faPaperPlane}/>
      <h1 className='getInTouch'>Get in touch with us!</h1>
      <EmailForm/>
      <h2 className='solution'>Join the Solution!!</h2>
      <a href="/donate#donation-widget">
        <Heart className='heart'/>
      </a>
      <h2 className='share'>Tell a Friend!</h2>
      <Container>
        <Row>
          <Col className='social-col' xs={2} md={1}>
            <a href="https://www.facebook.com/sharer/sharer.php?u=http://www.treesfortigers.org">
              <FontAwesomeIcon className='social facebook' icon={faFacebook}/>
            </a>
          </Col>
          <Col className='social-col' xs={2} md={1}>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=http%3A%2F%2Fwww.treesfortigers.org">
              <FontAwesomeIcon className='social linkedin' icon={faLinkedin}/>
            </a>
          </Col>
          <Col className='social-col' xs={2} md={1}>
            <a href="https://twitter.com/intent/tweet?text=About%20Trees%20for%20Tigers&url=http%3A%2F%2Fwww.treesfortigers.org&original_referer=http%3A%2F%2Fwww.treesfortigers.org%2Fabout.cfm">
              <FontAwesomeIcon className='social twitter' icon={faTwitterSquare}/>
            </a>
          </Col>
          <Col className='social-col' xs={2} md={1}>
            <a href={mailHref}>
              <FontAwesomeIcon className='social mail' icon={faTelegram}/>
            </a>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
