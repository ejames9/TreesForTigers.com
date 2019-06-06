/*
** NavBar.js
**
** NavBar.js is a React component that functions as the navigation bar for the
** trees4Tigers.com website....
**
** Eric James Foster, Fostware LLC, MIT License.
***/

// Get React...
import React from 'react'
// Get sc component styling...
import styled from 'styled-components'
// Get react-bootstrap....
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'


// T4T Logo ....
const trees4TigersLogo = './assets/images/trees4TigersLogo.svg'

// Component styling...
const NavbarContainer = styled.nav`
  height: auto;
  width: 100%;
  position: fixed;
  z-index: 999;

  .navbar {
    background: transparent;
    backdrop-filter: blur(8px) saturate(150%);
    border-bottom: .0625rem solid #dedede;
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar-collapse {
    display: flex;
    justify-content: flex-end;
    margin-left: 4rem;
  }

  a {
    font-size: 1.35rem;
    font-family: telex, reem kufi;
    padding-right: 1rem;
    margin-right: 2rem;
  }

  a.nav-link {
    color: #dedede !important;
  }

  a.navbar-brand {
    font-family: Sacramento, just another hand, covered by your grace;
    font-size: 2.2rem;
    padding: 0;
    color: #dedede;
  }
`


// Component definition....
class NavBar extends React.Component {
// Ctor...
  constructor() {
    super()
  }

// Post mount component adjustments...
  componentDidMount() {

  }

// Render method...
  render() {
    return (
      <NavbarContainer>
        <Navbar expand='md'>
          <Navbar.Brand href='#home'>
            <img
              src={trees4TigersLogo}
              height='90'
              width='90'
              alt='Trees 4 tigers logo.'
            />
            {' Trees For Tigers'}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='#home'>About</Nav.Link>
              <Nav.Link href='#'>Our Vision</Nav.Link>
              <Nav.Link href='#'>The Challenge</Nav.Link>
              <Nav.Link href='#'>The Trees</Nav.Link>
              <NavDropdown title='Travel' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#'>Eastern Russia</NavDropdown.Item>
                <NavDropdown.Item href='#'>Durmiskoye</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#'>Donate</Nav.Link>
              <Nav.Link href='#'>Contact</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </NavbarContainer>
    )
  }
}

export default NavBar
