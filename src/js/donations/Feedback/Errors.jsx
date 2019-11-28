/*
** Errors.jsx
**
** Errors.jsx is a Bootstrap-React based component dealing with credit
** card errors in the donation page of the T4T.com site....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Get react...
import React, {Component} from 'react'
// Get react-bootstrap lib...
// Get styled-components...
import styled from 'styled-components'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import {log, dir} from '../../utils/Loggers'
import {capitalize, isMobile} from '../../utils/utils'
import el from '../../utils/DOM/el'
// import windowTool from '../../utils/DOM/domPositioningTools'


let modalShow, setModalShow


const ErrorHeader = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  max-width: ${screen.width}px;

  h3 {
    display: inline;
    font-size: 1.2rem;
    color: white;
    margin-bottom: 0;
    border: none;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }
  }
`

const Section = styled.section`
  display: flex;
  justify-content: center;
  background: #dc3645;
  padding: 1rem 0;
  border: 1px solid white;
  border-right: none;
  border-left: none;
  max-width: ${screen.width}px;

  h5, p {
    font-size: 1rem;
    font-family: coder;
    color: white;
    border-radius: 20px;
    padding: .5rem;
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    h5, p {
      font-size: 1.2rem;
    }
  }
`

const P = styled.p`
  display: flex;
  align-items: flex-end;
  color: #ffffff;
  margin-bottom: 0;
  padding-left: 0;
  font-size: .8rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    padding-left: .9rem;
  }
`

// Img component...
const Cancel = styled.img.attrs({
  src: '/images/svg/color/feedback/001-cancel.svg'
})`
  display: inline;
  height: 2.1rem;
  width: 2.1rem;
  margin-right: .6rem;

  @media (min-width: 768px) {
    height: 2.4rem;
    width: 2.4rem;
    margin-right: 1.4rem;
  }
`

const Footer = styled.footer`
  padding: 1rem;
  padding-left: 0;
  max-width: ${screen.width}px;

  .message-row {
    width: 100%;
    justify-content: flex-end;
    margin: 0;

    .message-col {
      display: flex;
      justify-content: center;
      padding-right: 1.8rem;
    }

    .button-col {
      position: relative;
      right: .4rem;
      display: flex;
      justify-content: space-around;

      #noEmail {
        font-size: .6rem;
        max-height: 5rem;
        margin-right: .3rem;
      }

      #close {
        max-height: 4rem;
      }
    }
  }

  @media (min-width: 768px) {
    padding-left: 1rem;

    .message-row {
      .button-col {
        #noEmail {
          margin-right: 1rem;
        }
      }

      .message-col {
        padding-right: 1rem;
      }
    }
  }
`

let errorModal


function ErrorModal(props) {
  let message, declinedRE = /declined/,
  declined = declinedRE.test(props.code)

// Prompt user to try again if payment fails....
  if (declined) {
    message = `${props.error} Please try again with another payment method.`
  } else {
    message = props.error
  }

  log('EMAIL ERROR', 'red')
  log(props.emailerror)

  return (
    <Modal
      id='errorModal'
      show={props.show}
      size="md"
      aria-labelledby="error-modal-title"
      centered
      style={{maxWidth: `${window.innerWidth}px`}}
    >
      <Modal.Header className='header'>
        <Modal.Title id="error-modal-title">
          {
            props.head?
              <ErrorHeader>
                <Cancel/> <h3>{`Error: ${props.head}!`}</h3>
              </ErrorHeader>
            :
              <ErrorHeader>
                <Cancel/> <h3>{`Error!`}</h3>
              </ErrorHeader>
          }
        </Modal.Title>
      </Modal.Header>
      <Section>
        {
          props.code?
            <h5>{`( ${props.code} )`}</h5>
          :
            <p>
              {props.error}
            </p>
        }
      </Section>
      <Footer className="container footer">
        <Row className="message-row">
          {
            props.code?
              <Col className="message-col" xs={props.emailerror? 8 : 10}>
                <P>
                  {message}
                </P>
              </Col>
            :
              null
          }
          <Col className="button-col" xs={props.emailerror? 4 : 2}>
            {
              props.emailerror && <Button id='noEmail' variant='primary' onClick={(e)=> props.onHide(e, false, true)}>Continue without email</Button>
            }
            <Button id='close' variant='danger' onClick={(e)=> props.onHide(e, declined, props.emailerror)}>Close</Button>
          </Col>
        </Row>
      </Footer>
    </Modal>
  )
}

export default function Errors(props) {
  [modalShow, setModalShow] = React.useState(false)

  let header

  function createErrorHeader(head) {
// split words of error into a list...
    let sep = head.split('_')

// use cap funtion and rejoin....
    return sep.map(word=> capitalize(word)).join('')
  }

  if (props.error) {
    log(props.error, 'red')

    if (props.head) {
      header = createErrorHeader(props.head)
    }
  }

  function hideError(e, declined=false, emailError) {
//
    if (declined) {
// Close the window.....
      setModalShow(false)
// Send the data
      props.data({
        hide: {
          reset: true,
          error: false
        }
      })
    } else if (emailError) {
      switch (e.target.id) {
        case 'noEmail':
// Confirm that the user would like to proceed without email....
          let result = confirm('Are you sure? Without an email address you will not receive a receipt.')

          if (result) {
// Close the window.....
            setModalShow(false)
            // log('NO EMAIL', 'lightblue')
// Send the data
            props.data({
              hide: {
                noEmail: true,
                flags: {
                  reset: false,
                  error: false,
                  emailValidation: false,
                  emailError: false,
                  sanitize: true

                }
              }
            })
          }
          break
        case 'close':
// Close the window.....
        setModalShow(false)
// Send the data
          props.data({
            hide: {
              reset: false,
              emailError: false,
              error: false
            }
          })
          break
      }
    } else {
// Close the window.....
      setModalShow(false)
// Send the data
      props.data({
        hide: {
          reset: false,
          error: false
        }
      })
    }

    // document.body.style.transform = 'scale(1)'
  }



// Component markup...
  return (
    <ErrorModal
      head={header}
      error={props.error}
      code={props.code}
      show={modalShow}
      onHide={hideError}
      className='errorModal'
      data={props.data}
      emailerror={props.emailerror}
    />
  )
}


export {
  setModalShow
}
