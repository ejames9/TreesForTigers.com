/*
** Success.jsx
**
** Success.jsx is a Bootstrap-React based component dealing with credit
** card success feedback in the donation page of the T4T.com site....
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
import {capitalize} from '../../utils/utils'


let modalShow, setModalShow


const modalBodyStyles = {
  display: 'flex',
  justifyContent: 'center',
  background: '#27a745',
  borderTop: '1px solid white',
  borderBottom: '1px solid white',
  padding: '1rem',
}

const modalHeaderStyles = {
  display: 'inline',
  fontSize: '1.5rem',
  marginBottom: '0'
}

const modalCodeStyles = {
  fontSize: '1.2rem',
  color: 'white',
  border: '1px solid white',
  borderRadius: '12px',
  padding: '.5rem',
  marginBottom: '0'
}

const modalFooterStyles = {
  padding: '1rem'
}

const modalButtonStyles = {
  display: 'flex',
  justifyContent: 'flex-end'
}

const modalRowStyles = {
  display: 'flex',
  justifyContent: 'space-around'
}

const modalMessageStyles = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-end'
}

const SuccessHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

// Img component...
const Check = styled.img.attrs({
  src: '/images/svg/misc/009-checked.svg'
})`
  display: inline;
  height: 2.7rem;
  width: 2.7rem;
`

const P = styled.p`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0;
  color: white;
  font-size: .8rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`

function SuccessModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="success-modal-title"
      centered
    >
      <Modal.Header className='header'>
        <SuccessHeader>
          <Check/>
        </SuccessHeader>
      </Modal.Header>
      <section style={modalBodyStyles}>
        <h5 style={modalCodeStyles}>Thank You!</h5>
      </section>
      <Container style={modalFooterStyles} className="footer">
        <Row style={modalRowStyles} className="message-row">
          <Col style={modalMessageStyles} className="message-col" xs={10}>
            <P>
              Your payment has been confirmed.
            </P>
          </Col>
          <Col style={modalButtonStyles} className="button-col" xs={2}>
            <Button variant='success' onClick={props.onHide}>Close</Button>
          </Col>
        </Row>
      </Container>
    </Modal>
  )
}

export default function Success(props) {
  [modalShow, setModalShow] = React.useState(false)

  function thankDonor() {
    setModalShow(false)

// Kill the widget....
    props.widget.style.display = 'none'

    props.data({
      hide: {
        hide: true,
        night: true,
        donated: true
      }}
    )
  }

  // props.data({
  //   hide: {
  //     hide: true,
  //     night: true
  //   }}
  // )

// markup....
  return (
    <SuccessModal
      show={modalShow}
      onHide={thankDonor}
      className='successModal'
    />
  )
}


export {
  setModalShow
}
