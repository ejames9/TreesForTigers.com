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
// get Heart svg..
import Heart from './Heart'


// T4T Logo ....
const trees4TigersLogo = './assets/images/trees4TigersLogo.svg'
const heart = './assets/images/heart.svg'

// Component styling...
const NavbarStyles = createGlobalStyle`
  .navbar {
    background: transparent;
    padding-top: 0;
    padding-bottom: 0;
    z-index: 999;
  }

  .navbar-brand {
    height: 5rem;
    width: 5rem;
    padding: 0;

    div.nav-item {
      align-self: center;
    }

/* Logo Text */
    span {
      font-family: varela round;
      font-size: 1.5rem !important;
      color: #404040;
      display: none;
      // text-shadow: 0 -6px 10px white, 0 6px 10px white, 6px 0 10px white, -6px 0 10px white;
    }
    span:hover {
      color: #dedede;
      /* text-shadow: 0 -6px 10px black, 0 6px 10px black, 6px 0 10px black, -6px 0 10px black; */
    }
  }

  .fixed {
    border-bottom: .0625rem solid #161616;
    backdrop-filter: blur(8px) saturate(150%);

    .navbar-brand span {
      display: inline;
    }
  }

  .navbar-collapse {
    display: flex;
    justify-content: flex-start;
    margin-left: 4rem;
    // overflow: scroll;

    .travel {
      display: flex;

      > a {
        align-self: center;
      }
    }

    .dropdown-menu {
      background: #cdcdcd;

      a {
        color: #1d1d1d;
      }
      a:hover {
        background: #797979;
      }
    }
    .navbar-nav {
    }
  }

  a {
    font-size: 1.35rem;
    font-family: nunito, telex, reem kufi;
    padding-right: 1rem;
    margin-right: 2rem;

  }

/* Navbar Links */
  a.nav-link {
    color: #dedede !important;
    line-height: 1.5rem;
    align-self: center;
    // text-shadow: 0 -1px 5px #dedede, 0 1px 5px #dedede, 1px 0 5px #dedede, -1px 0 5px #dedede;
    opacity: .6;
  }

  a. dropdown-toggle {
    align-self: center;
  }

  a.nav-link:hover {
    opacity: 1;
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
          position: relative;
          height: 10rem;
          width: 10rem;
          transition: left .1s ease-in-out;
          left: 150%;
        }
      }

      .fixed {
        a.navbar-brand {
          #navLogo {
            position: relative;
            height: 5rem;
            width: 5rem;
            left: 0;
          }
        }
      }
    }

/* *** Targeting Desktops No. 2 & 4, "1280px X 800px & 1024px" *** */
  @media (min-width: 1200px)
    and (max-height: 1040px) {
    .navbar-collapse {
      position: relative;
      justify-content: flex-end;
      left: .3rem;
    }
    .nav-link {
      margin-right: 1.3rem;
    }
  }


/* *** Targeting Desktop No. 1, "1366px X 768px" *** */
  @media (min-width: 1360px)
    and (orientation: landscape) {
      .navbar-collapse {
        position: relative;
        justify-content: flex-end;
        left: .3rem;

        .nav-link {
          margin-right: 2rem;
        }
    }
  }
`


// Component definition....
class NavBar extends React.Component {
// Ctor...
  constructor({getNode}) {
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
            <Nav>
              <Nav.Link href='#home'>About</Nav.Link>
              <Nav.Link href='#'>Our Vision</Nav.Link>
              <Nav.Link href='#'>The Challenge</Nav.Link>
              <Nav.Link href='#'>The Trees</Nav.Link>
              <NavDropdown className='travel' title='Travel' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#'>Eastern Russia</NavDropdown.Item>
                <NavDropdown.Item href='#'>Durmiskoye</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    )
  }
}

export default NavBar




// <Navbar.Brand className='heart' href='#home'>
//     <img
//       id='donateHeart'
//       src={heart}
//       alt='Donate'
//     />
// </Navbar.Brand>


//
// <Nav.Link id='heartLink' href='#'>
//   <Heart className='heart'/>
// </Nav.Link>
