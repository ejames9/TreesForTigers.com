/*
** alexanderBatalov.jsx
**
** Bios.jsx is the markup and js for the treesfortigers.com biographies
** page of the site...
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Get React.....
import React from 'react'
// Get reactDOM...
import reactDOM from 'react-dom'
// Get sc component styling...
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'
// get text...
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import {AlexanderBatalovBio} from '../textContent'

import NavBar from '../sections/head/NavBar'
import GlobalStyle from '../GlobalStyles'

// Utilities...
import el from '../utils/DOM/el'
import {log, dir} from '../utils/Loggers'
import {
  isSafari
} from '../utils/Is'
import {addClass, removeClass} from '../utils/DOM/classList'

// Cover backdrop
const coverOverlay = '/images/tigers/tigerSkin01.jpg'
const coverOverlayPortrait = '/images/tigers/tigerSkin02.jpg'
// Kim Voyle photo....
const alexanderBatalov = '/images/treesfortigers/alexanderBatalov.jpg'


// Some global styles...
const GlobalStyles = createGlobalStyle`
  html {
    padding: 0;
    margin: 0;
    background: #522e28;
    background: #26181f;
    background: #161616;
  }

  body {
    padding: 0;
    margin: 0;
    background: #522e28;
    background: #26181f;
    background: #161616;
  }

  a.durminskoye {
    margin-right: 0;
    padding-right: 0;
  }
`

// The cover component....
const Background = styled.header`
  position: fixed;
  width: 100%;
  height: auto;
  min-height: 35rem;
  padding: 15rem 0;
  background: linear-gradient(to bottom, rgba(22, 22, 22, 0.3) 0%, rgba(22, 22, 22, 0.7) 75%, #161616 100%), url(${coverOverlayPortrait});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media (min-width: 600px) {
    background: linear-gradient(to bottom, rgba(22, 22, 22, 0.3) 0%, rgba(22, 22, 22, 0.7) 75%, #161616 100%), url(${coverOverlay});
    background-position: center;
    background-size: cover;

  }

  @media (min-width: 992px) {
    height: 100vh;
    padding: 0;
    background-position: center;

  }

  @media (min-width: 1200px) {

  }
`
const Section = styled.section`
  position: relative;
  top: 7rem;
  width: 75%;
  background: transparent;
  margin: 0 auto;

  .idRow {
    background: transparent;
    flex-direction: column;
    align-content: flex-start;
    align-items: center;
    margin-bottom: .5rem;

    .photo-col {
      display: flex;
      justify-content: center;

      img {
        width: 200%;
        height: 200%;
        border-radius: 50%;
        border: .4rem solid #161616;
        margin: 0 auto;
      }
    }

    .id-col {
      display: flex;
      justify-content: flex-start;

      .card {
        position: relative;
        text-align: center;
        right: 0;
        left: 0;
        margin: 0 auto;
      }
    }
  }

  .card {
    position: relative;
    left: 2.5rem;
    background: transparent;
    border: none;

    .card-body {
      .card-title {
        color: #dedede;
        font-size: 1.8rem;
      }
      .card-subtitle {
        color: #787878;
        font-size: 1.5rem;
      }
    }
  }

  .bioRow {
    background: transparent;
    align-content: flex-start;

    .bioCol {
      padding-left: 0;

      .card {
        padding-left: 0;

        .card-body {
          padding-left: 0;
          padding-top: 0;

          .card-text {
            background: transparent;
            padding: 1rem;
            padding-left: 0;
            padding-top: 0;
            border-radius: 3px;
            font-size: 1.2rem;
            color: #dedede;
          }
        }
      }
    }
  }

  @media (min-width: 560px) {
    top: 5rem;

    .idRow {
      flex-direction: row;

      .photo-col {
        padding-right: 0;

        img {
          width: 100%;
        }
      }

      .id-col {
        padding-left: 0;

        .card {
          margin: 0;
          left: 0;
        }
      }
    }

    .bioRow {
      .bioCol {
        .card {
          .card-body {
            padding-top: .25rem;

            .card-text {
              /* padding-top: 1rem; */
            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) and (orientation: portrait){
      top: 10rem;
  }

  @media (min-width: 768px) {
    .idRow {
      flex-direction: row;
    }

    .bioRow {
      .bioCol {
        .card {
          .card-body {
            /* padding-top: 1.25rem; */

            .card-text {
              /* padding-top: 1rem; */
            }
          }
        }
      }
    }
  }

  @media (min-width: 992px) {
    top: 14rem;
  }
`


// Content markup..
function Content() {
//
  return (
    <Section>
      <Container>
        <Row className='idRow'>
          <Col className='photo-col' xs={6} md={4} xl={3}>
            <img src={alexanderBatalov}/>
          </Col>
          <Col className='id-col' xs={12} sm={6} lg={3}>
            <Card className=''>
              <Card.Body>
                <Card.Title>Alexander Batalov</Card.Title>
                <Card.Subtitle>Vice President, Russia</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='bioRow'>
        <Col className='bioCol' xs={12} md={8}>
          <Card className='text-left'>
            <Card.Body>
              <AlexanderBatalovBio/>
            </Card.Body>
          </Card>
        </Col>
        </Row>
      </Container>
    </Section>
  )
}


class AlexanderBatalovBioPage extends React.Component {
// Ctor...
  constructor() {
    super()
// Bind methods...
    this.onScroll = this.onScroll.bind(this)
    this.onOrientationChange = this.onOrientationChange.bind(this)
  }

/* This method is the app's scroll handler. Places one listener on window,
and reacts to various conditions...*/
  onScroll(e) {
    let classMod = isSafari() ? 'bio-safari-fixed' : 'bio-fixed'

    window.onscroll =e=> {
// Once the user has scrolled down 45 pixels, add fixed class to navbar...
      if (window.pageYOffset > 45) {
        addClass(el('.navbar'), classMod)
      } else {
        removeClass(el('.navbar'), classMod)
      }
    }
  }

// Orientation change adjustments...
  onOrientationChange() {
// CSS reloading function ...
    function reloadCSS() {
      let styles = el('style'),
      head = el('head')

      console.dir(styles)
      for (let i in styles) {
        // let clone = styles[i].cloneNode(true)
        // console.dir(clone)
        // head.removeChild(styles[i])
        // head.appendChild(styles[i])
      }
    }

// Reload on o-change....
    window.onorientationchange=e=> {
      // location.reload()
      // reloadCSS()
    }
  }


// Post mount component adjustments ....
  componentDidMount() {
/*
Event Listeners.....>>>
*/
// Scroll associated operations....
    this.onScroll()
// Orientation associated ops...
    // this.onOrientationChange()
  }

// Render...
  render() {
    return (
      <React.Fragment>
        <GlobalStyle/>
        <GlobalStyles/>
        <Background/>
        <NavBar bio/>
        <Content/>
      </React.Fragment>
    )
  }
}


reactDOM.render(
  <AlexanderBatalovBioPage/>, el('#root')
)
