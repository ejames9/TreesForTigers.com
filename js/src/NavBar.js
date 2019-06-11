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
import css, {createGlobalStyle} from 'styled-components'
// Get react-bootstrap....
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'


// T4T Logo ....
const trees4TigersLogo = './assets/images/trees4TigersLogo.svg'

// Component styling...
const NavbarStyles = createGlobalStyle`
  .navbar {
    background: transparent;
    backdrop-filter: blur(8px) saturate(150%);
    border-bottom: .0625rem solid #dedede;
    padding-top: 0;
    padding-bottom: 0;
    z-index: 999;
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
/* Navbar Links */
  a.nav-link {
    color: black !important;
    text-shadow: 0 -1px 5px #dedede, 0 1px 5px #dedede, 1px 0 5px #dedede, -1px 0 5px #dedede;
    opacity: .6;
  }
  a.nav-link:hover {
    opacity: 1;
  }

  a.navbar-brand {
    height: 5rem;
    width: 5rem;
    padding: 0;
/* Logo Text */
    span {
      font-family: Sacramento, just another hand, covered by your grace;
      font-size: 2.2rem;
      color: black;
      text-shadow: 0 -6px 10px white, 0 6px 10px white, 6px 0 10px white, -6px 0 10px white;
    }
    span:hover {
      color: #dedede;
      /* text-shadow: 0 -6px 10px black, 0 6px 10px black, 6px 0 10px black, -6px 0 10px black; */
    }
  }
/* ***** Targeting iPhone 5/SE ***** */
  @media (min-width: 300px) {
    padding-right: 0rem;
    padding-left: 0rem;

    a.navbar-brand {
      position: relative;
      top: 1rem;
      span {
        font-size: 1.7rem;
      }
      #navLogo {
        height: 3rem;
        width: 3rem;
      }
    }
  }
/* ***** Targeting iPhone 6/7/8 and plus ***** */
  @media (min-width: 360px) {
    a.navbar-brand {
      align-self: center;
      top: 0.3rem;

      #navLogo {
        height: 4.5rem;
        width: 4.5rem;
      }
    }
  }
/* ***** Targeting iPad ***** */
  @media (min-width: 760px) {
      a.navbar-brand {
        align-self: center;
        top: 0rem;

        span {
          font-size: 2.2rem
        }

        #navLogo {
          height: 5rem;
          width: 5rem;
        }
      }
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
      <React.Fragment>
        <NavbarStyles/>
        <Navbar expand='xl' fixed='top'>
          <Navbar.Brand href='#home'>
            <img
              id='navLogo'
              src={trees4TigersLogo}
              alt='Trees 4 tigers logo.'
            />
            <span> Trees For Tigers</span>
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
      </React.Fragment>
    )
  }
}

export default NavBar
