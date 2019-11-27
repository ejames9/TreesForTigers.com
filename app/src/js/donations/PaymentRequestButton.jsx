/*
** PaymentRequestButton.jsx
**
** PaymentRequestButton.jsx is the wallet button (apple pay, google pay) form for the pos page of the T4T.com site....
**
** Eric James Foster, Fostware LLC, MIT License.
***/




// Get React
import React, {Component} from 'react'
// Get styled-components...
import styled from 'styled-components'
// Get Bootstrap-react components...
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// Stripe-React...
import {
  injectStripe,
  PaymentRequestButtonElement
} from 'react-stripe-elements'
// Get utils...
import el from '../utils/DOM/el'
import {log, dir} from '../utils/Loggers'


// Component styles...
const PaymentRequestButtonStyler = styled.div`
    position: relative;
    top: 1rem;

    .payment-request-btn-container {
      .payment-request-btn-row {
        display: flex;
        flex-direction: column;
        padding-bottom: 0;
        padding-top: 1.5rem;
        align-items: center;

        .button-col {
          background: transparent;
        }

        .or-col {
          display: flex;
          background: transparent;
          justify-content: center;

          p {
            bottom: 0;
            font-size: 1.3rem;
            text-shadow:
             -1px -1px 0 #000,
              1px -1px 0 #000,
              -1px 1px 0 #000,
               1px 1px 0 #000;
          }
        }
      }
    }
`


// Event handlers....
const handleBlur = () => {
  console.log('[blur]');
};
const handleClick = () => {
  console.log('[click]');
};
const handleFocus = () => {
  console.log('[focus]');
};
const handleReady = () => {
  console.log('[ready]');
};



// Component class...
class _PaymentRequestButton extends Component {
// Ctor ...
  constructor(props) {
    super(props)

    // log('pr button props'),dir(props)
// Create payment request....
    const paymentRequest = props.stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: 'Trees for Tigers Donation',
        amount: props.amount * 0
      }
    })

    log('props')
    dir(paymentRequest)

    paymentRequest.on('token', ({complete, token, ...data})=> {
      log('token')
      props.handleResult({
        paymentRequest: {token, data}
      })
      complete('success')
    })

    paymentRequest.canMakePayment().then((result)=> {
// Set state...
      this.setState({
        canMakePayment: !!result
      })
    })

    this.state = {
      canMakePayment: false,
      amount: props.amount * 100,
      paymentRequest,
    }
  }

  render() {
    log('this.state.canMakePayment')
    log(this.state.canMakePayment)

    log('pr button (render) props')
    log(this.props.amount)
    log(this.state.amount)


// Update the donation amount in the paymentRequest object instance, if necessary.....
  if (this.props.amount !== this.state.amount) {
    this.state.paymentRequest.update({
      total: {
        label: 'Trees for Tigers Donation',
        amount: this.props.amount * 100
      }
    })
    this.setState({
      amount: this.props.amount
    })
  }

    return this.state.canMakePayment ? (
      <PaymentRequestButtonStyler>
        <Container className='payment-request-btn-container'>
          <Row className="payment-request-btn-row">
            <Col className="button-col">
              <PaymentRequestButtonElement
                className="PaymentRequestButton"
                onBlur={handleBlur}
                onClick={handleClick}
                onFocus={handleFocus}
                onReady={handleReady}
                paymentRequest={this.state.paymentRequest}
                style={{
                  paymentRequestButton: {
                    theme: 'light',
                    height: '32px',
                    type: 'donate',
                  },
                }}

              />
            </Col>
            <Col className="or-col">
              <p>
                - or -
              </p>
            </Col>
          </Row>
        </Container>
      </PaymentRequestButtonStyler>
    ) : (
      null
    )
  }
}


export default injectStripe(_PaymentRequestButton)
