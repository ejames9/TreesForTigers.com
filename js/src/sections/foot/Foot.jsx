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


// Component styles...
const Footer = styled.footer`
  position: relative;
  height: auto;
  width: 100%;
  font-size: .4rem;
  background: #252525;
  overflow: hidden;
  text-align: center;
  padding: 1rem;
  padding-bottom: 0;
  color: #5b5b5b;

  .fostware {
    font-family: coder;
    /* color: #fabd30; */
    color: #007bff;

    .s {
      /* color: #007bff; */
      color: #fabd30;
    }
  }

  img.t4tLogo {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: 768px) {
    font-size: .6rem;
  }

  @media (min-width: 1000px) {
    font-size: .8rem;
  }
`

// Component markup ....
export default function Foot() {
  return (
    <Footer>
      <p>Coded with ❤️ and ☕️ by <span className='fostware'>fo<span className='s'>S</span>tware</span> in Portland, Oregon. All Rights Reserved © 2019 <img className='t4tLogo' src='./images/trees4TigersLogoGrey.svg'/> Trees for Tigers<br/>
      a US 501(c)(3) organization, 24965 NW Pederson Rd. Hillsboro, Oregon 97124</p>
    </Footer>
  )
}
