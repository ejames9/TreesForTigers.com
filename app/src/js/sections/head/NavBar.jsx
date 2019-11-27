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
import Heart from '../../graphics/Heart'
// Utilities...
import el from '../../utils/DOM/el'
import {log, dir} from '../../utils/Loggers'
import mergeData from '../../utils/mergeData'
import {addClass, removeClass} from '../../utils/DOM/classList'
import {
  isSafari
} from '../../utils/Is'

// T4T Logo ....
const trees4TigersLogo = '/images/logos/trees4TigersLogo.svg'
const trees4TigersLogoLight = '/images/logos/trees4TigersLogoLight.svg'
const trees4TigersLogoBlack = '/images/logos/trees4TigersLogoBlack.svg'

const url = '/images/graphics/menuIcon.png'

// Component styling...
const NavbarStyles = createGlobalStyle`
  .navbar {
    background: transparent;
    padding-top: 0;
    padding-bottom: 0;
    backdrop-filter: blur(0px);
    transition: all .3s ease-in;
    z-index: 999;
  }

  .navbar-brand {
    height: 5rem;
    width: 5rem;
    padding: 0;
    pointer-events: all;

    div.nav-item {
      align-self: center;
    }

/* Logo Text */
    span {
      position: relative;
      font-family: varela round;
      font-size: 1.2rem !important;
      color: #404040;
      z-index: 2;
      display: none;
    }
    span:hover {
      color: #626262;
      /* text-shadow: 0 -6px 10px black, 0 6px 10px black, 6px 0 10px black, -6px 0 10px black; */
    }
    span:active {
      color: #959595;
    }
  }

  .fixed,
  .bio-fixed {
    border-bottom: .0625rem solid #161616;
    background: #161616;
    backdrop-filter: blur(8px);
    opacity: .9;

    .navbar-brand {
      color: #dedede;

      span {
        display: inline;
      }
    }

    .navbar-toggler {
      border-color: #404040;

      span.navbar-toggler-icon {
        background-image: url(${url});
      }
    }
  }

  .safari-fixed,
  .bio-safari-fixed {
    border-bottom: .0625rem solid #161616;
    backdrop-filter: blur(8px);

    .navbar-brand span {
      display: inline;
    }

    .navbar-toggler {
      border-color: #404040;
      color: #404040;

      span.navbar-toggler-icon {
        background-image: url(${url});
      }
    }
  }

  .navbar-collapse {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-text: left;
    margin-left: 4rem;
    pointer-events: all;
    z-index: 1;
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

      .navbar-nav {
        display: ;
      }
    }
  }

  a {
    font-size: 1.35rem;
    font-family: nunito, telex, reem kufi;
    padding-right: 1rem;
    margin-right: 2rem;

  }

  a.nav-link {
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

      span {
        font-size: 1.5rem !important;
      }
    }
  }

/* ***** Targeting iPad ***** */
  // @media (min-width: 760px) and (orientation: portrait) {
  //     a.navbar-brand {
  //       align-self: center;
  //       top: 0rem;
  //
  //       span {
  //         font-size: 2.2rem
  //       }
  //
  //       #navLogo {
  //         position: relative;
  //         height: 10rem;
  //         width: 10rem;
  //         transition: left .1s ease-in-out;
  //         left: 150%;
  //       }
  //     }
  //     .bio-safari-fixed,
  //     .safari-fixed,
  //     .bio-fixed,
  //     .fixed {
  //       a.navbar-brand {
  //         #navLogo {
  //           position: relative;
  //           height: 5rem;
  //           width: 5rem;
  //           left: 0;
  //         }
  //       }
  //     }
  //   }

/* ***** Targeting iPad ***** */
  @media (min-width: 815px) and (orientation: landscape){
      a.navbar-brand {
        align-self: center;
        top: 0rem;

        span {
          font-size: 2.2rem
        }

        #navLogo {
          position: relative;
          height: ${props=> props.bio? '7.5rem' : '10rem'};
          width: ${props=> props.bio? '7.5rem' : '10rem'};
          transition: all .3s ease-in-out;
          left: ${props=> props.bio? '15%' : '250%'};
          top: ${props=> props.bio? '0' : '30%'};
        }
      }
      .bio-safari-fixed,
      .safari-fixed,
      .bio-fixed,
      .fixed {
        a.navbar-brand {
          #navLogo {
            position: relative;
            height: 5rem;
            width: 5rem;
            left: 0;
            top: 0;
          }
        }
      }
    }


  @media (max-width: 1200px) {
    .navbar-collapse {
      .navbar-nav {
        display: block;
        align-text: left;
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

const MainTheme = createGlobalStyle`
  a.nav-link {
    color: #dedede !important;
  }
`

const BioTheme = createGlobalStyle`
  .nav-link {
    color: #898989 !important;
  }
  .nav-link:hover {
    color: #bcbcbc !important;
  }
  .nav-link:active {
    color: #efefef !important;
  }

  .bio-fixed {
    border-bottom: .0625rem solid #161616;
    background: #161616;
    opacity: .9;

    .navbar-brand {
      color: #dedede;

      span {
        display: inline;
        color: #898989;
      }
    }

    .nav-link {
      color: #dedede !important;
      text-shadow: none;
    }
    .nav-link:hover {
      color: #bcbcbc !important;
    }
    .nav-link:active {
      color: #efefef !important;
    }
  }

  .bio-safari-fixed {
    border-bottom: .0625rem solid #161616;
    backdrop-filter: blur(8px);

    .navbar-brand span {
      display: inline;

    }
  }
`

// Component definition....
function NavBar({bio}) {
// Click handler... Used for smooth, automatic srolling between sections....
  function onClick(e) {
    let _class = e.target.className,
    offset
// Prevent button from dialing href...
    if (!bio) {
      e.preventDefault()
    }

    switch (true) {
      case /brandImg/.test(_class):
        log('brand')
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
        break
      case /brand/.test(_class):
        log('brand')
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
        break
      case /about/.test(_class):
        offset = el('#about').offsetTop
        window.scrollTo({
          top: offset,
          left: 0,
          behavior: 'smooth'
        })
        break
      case /vision/.test(_class):
        offset = el('#vision').offsetTop
        window.scrollTo({
          top: offset,
          left: 0,
          behavior: 'smooth'
        })
        break
      case /challenge/.test(_class):
        offset = el('#challenge').offsetTop
        window.scrollTo({
          top: offset,
          left: 0,
          behavior: 'smooth'
        })
        break
      case /trees/.test(_class):
        offset = el('#trees').offsetTop
        window.scrollTo({
          top: offset,
          left: 0,
          behavior: 'smooth'
        })
        break
      case /contact/.test(_class):
        offset = el('#contact').offsetTop
        window.scrollTo({
          top: offset,
          left: 0,
          behavior: 'smooth'
        })
        break
      case /toggler/.test(_class):
        let classMod
        if (bio) {
          classMod = isSafari() ? 'bio-safari-fixed' : 'bio-fixed'
        } else {
          classMod = isSafari() ? 'safari-fixed' : 'fixed'
        }
        addClass(el('.navbar'), classMod)
        break
    }
  }

// Component markup...
  return (
    <React.Fragment>
      <NavbarStyles bio={bio}/>
      {
        bio? <BioTheme/> : <MainTheme/>
      }
      <Navbar expand='xl' fixed='top'>
        <Navbar.Brand href='/' onClick={e=> onClick(e)}>
          <img
            id='navLogo'
            className='brandImg'
            src={bio? trees4TigersLogoLight : trees4TigersLogo}
            alt='Trees 4 tigers logo.'
            onClick={e=> onClick(e)}
          />
          <span className='brand'> Trees For Tigers</span>
        </Navbar.Brand>
        <Navbar.Toggle className='toggler' aria-controls='basic-navbar-nav' onClick={(e) => onClick(e)}/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <Nav.Link className='about' href={bio? '/#about' : ''} onClick={(e) => onClick(e)}>About</Nav.Link>
            <Nav.Link className='vision' href={bio? '/#vision' : ''} onClick={(e) => onClick(e)}>Our Vision</Nav.Link>
            <Nav.Link className='challenge' href={bio? '/#challenge' : ''} onClick={(e) => onClick(e)}>The Challenge</Nav.Link>
            <Nav.Link className='trees' href={bio? '/#trees' : ''} onClick={(e) => onClick(e)}>The Trees</Nav.Link>
            <NavDropdown className='moreInfo' title='More Info' id='basic-nav-dropdown'>
              <NavDropdown.Item href='https://www.royle-safaris.co.uk/'>Royle Safaris</NavDropdown.Item>
              <NavDropdown.Item href='http://www.russiatigertracking.com/'>Russia Tiger Tracking</NavDropdown.Item>
              <NavDropdown.Item href='/downloads/T4TBrochure2016.pdf' download>T4T Brochure</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='contact' href={bio? '/#contact' : ''} onClick={(e) => onClick(e)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
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
