/*
** DonationForm.jsx
**
** DonationForm.jsx is the stripe donation form for the pos page of the T4T.com site....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Get react...
import React, {Component} from 'react'
// Get react-bootstrap lib...
// Get styled-components...
import styled from 'styled-components'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Modal from 'react-bootstrap/Modal'

// Get react-stripe integration lib...
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from 'react-stripe-elements'

// Get my components...
import PaymentRequestButton from './PaymentRequestButton'
import CCRotater from './CCRotater'
import DonationFormStyler from './styles/DonationFormStyler'
import CountryField from './CountryField'
import FormBackDrop from '../graphics/FormBackDrop'

// Get utils...
import el from '../utils/DOM/el'
import {
  addClass,
  removeClass
} from '../utils/DOM/classList'
import {log, dir} from '../utils/Loggers'
import {pub} from '../utils/environmentals'




// Some styles for the react-stripe-elements.....
const createOptions = {
    style: {
      base: {
        fontSize: '1rem',
        color: '#424770',
        letterSpacing: '0.025em',
        '::placeholder': {
          color: '#aab7c4',
        }
      },
      invalid: {
        color: '#c23d4b',
      }
    }
  }



class DonationForm extends Component {
// Ctor
  constructor(props) {
    super(props)
// State obj...
    this.state = {
      complete: false
    }
// Bind methods...
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getFormData = this.getFormData.bind(this)
    this.createDonation = this.createDonation.bind(this)
    this.adjustAmount = this.adjustAmount.bind(this)
    this.validEmail = this.validEmail.bind(this)
    this.sanitizePaymentData = this.sanitizePaymentData.bind(this)
    this.formReset = this.formReset.bind(this)
    this.scrollReveal = this.scrollReveal.bind(this)
    this.sendPayment = this.sendPayment.bind(this)


// Get necessary DOM references...
    this.amountInput = React.createRef()
    this.emailInput = React.createRef()
    this.donationForm = React.createRef()
    this.amountForm = React.createRef()
    this.amountButton = React.createRef()
    this.adjustAmountButton = React.createRef()
    this.ccFormContainer = React.createRef()
    this.cardNumber = React.createRef()
    this.donationWidget = React.createRef()

// Set listener on window for enter key....
    window.onkeydown =e=> {
      if (e.key === 'Enter') {
        e.preventDefault()
      }
// Grab the key code...
      let key = e.which || e.keyCode

// If key is 'enter' key, prevent default action....
      if (key === 13) {
        this.createDonation(e)
      }
    }

    this.animationID = null
    this.bottom = 0
  }


// Post component mounting ops...
  componentDidMount() {
// CReate a regexp to text whether or not the page is targeting the how-to-help anchor....
    let howToHelpRE = /how\-to\-help/

// If the how-to-help anchor is not targeted, focus the donation widget.....
    if (!howToHelpRE.test(window.location.href)) {
      setTimeout(()=> {
        this.amountInput.current.focus()
      }, 2000)
    }

// Send ref back to the main class....
    this.props.data({
      ref: {
        donationWidget: this.donationWidget.current
      }
    })
  }


//  Get data from donation form...
  getFormData(formEl) {
    let values = {},
    formEls = formEl.current.elements

    for ( var i = 0; i < formEls.length; i++ ) {
       var el = formEls[i];
       values[el.name] = el.value
    }
//
    return values
  }


// Method for scrolling form to middle of the page as it opens....
  scrollReveal() {
    let stopID = setInterval(()=> {
/// Scroll down to get form in the middle of the page....
      if (document.documentElement.scrollHeight !== this.bottom) {
// reset bottom....
        this.bottom = document.documentElement.scrollHeight
// then scroll...
        window.scrollTo({
            top: this.bottom,
            left: 0,
            behavior: 'smooth'
          })
          // log('animating', 'green')
      } else {
        // log('stopped animating', 'red')
// Cancel the animation frame....
        clearInterval(stopID)
      }
    }, 300)
  }


// Method for creating a donation amount...
  createDonation(e) {
/// Prevent Reset of page.. .
    e&&
      e.preventDefault()

// Get amount from form...
    let vals = this.getFormData(this.amountForm)

// Blur input, set readonly...
    this.amountInput.current.blur()
    this.amountInput.current.setAttribute('readonly', 'true')
    this.amountInput.current.setAttribute('value',
      this.amountInput.current.textContent
    )
    this.props.clouds.style.animationPlayState = 'paused'
    this.props.clouds.style.opacity = '0'

// Zap the ghost...
    el('.ghost-row').style.height = '1rem'
// Move form to middle of page...
    this.scrollReveal()

// Focus the email input (Wait 2s, otherwise the input won't focus)...
    setTimeout(()=> {
// Focus input....
      this.emailInput.current.focus()
    }, 2000)

// Reveal checkout details...
    removeClass(this.ccFormContainer.current, 'hide')
    removeClass(this.adjustAmountButton.current, 'hide')
    addClass(this.ccFormContainer.current, 'rise')
    addClass(this.amountButton.current, 'hide')

    log(`donation amount: ${vals.amount}`)

    if (this.props.amount !== vals.amount) {
      this.props.data({
        amount: {
          isAmount: true,
          amount: vals.amount,
          stillNight: true
        }
      })
    } else {
      this.props.data({
        stillNight: {
          stillNight: true
        }
      })
    }
  }


// Method for re-hiding credit card details, and focusing on amount form....
  adjustAmount() {
// Re-focus the input... Set readonly to false...
    this.amountInput.current.removeAttribute('readonly')
    this.amountInput.current.focus()

    this.props.clouds.style.animationPlayState = 'running'
    this.props.clouds.style.opacity = '.8'

// Revive the ghost...
    el('.ghost-row').style.height = '15rem'

// Adjust classes....
    addClass(this.ccFormContainer.current, 'hide')
    addClass(this.adjustAmountButton.current, 'hide')
    removeClass(this.ccFormContainer.current, 'rise')
    removeClass(this.amountButton.current, 'hide')

    this.props.data({
      stillNight: {
        stillNight: false
      }
    })
  }


// On change handler, deals mainly with error reporting...
  handleChange({error}) {
    log('ARE WE HERE?', 'green')
    if (error) {

      this.props.data({
        error: {
          error: true,
          errorCode: error.code,
          errorMessage: error.message,
          errorHeader: error.type
        }
      })
    }
  }


// Method for sending signal to the top of the app to send payment through...
  sendPayment() {
    // log('SEND PAY', 'green')
// Data obj....
    let data = {
      paymentData: {
        paymentOK: true
      }
    }
// Send data to State hub....
    this.props.data(data, this.props.stripe)
  }


// Method for validating email....
  validEmail(email) {
// Declare email regexp...
    let emailRE = /.+\@[a-z]+\.((com)|(net)|(org)|(gov)|(biz)|(io))/
// return validated email....
    return emailRE.test(email)
  }


// Method for analyzing token data and form data and routing as necessary....
  sanitizePaymentData(values, token, error, data=false, emailValidation=true) {
    log('ERROR', 'yellow')
    dir(error)
    log(error)
    let _values, _token, _error
    // log('DATA', 'yellow');dir(data)

    if (data) {
      _values = {
        email: data.email,
        name: data.name,
        country: data.country,
        zip: data.zip,
      }
      _token = data.token
      _error = data._error
    } else {
      _values = values
      _token = token
      _error = error
    }

// Check first for other errors....
    if (_error) {
      log('ARE WE HERE?', 'green')
      let message = _error.message

// If we have a colon, remove it...
      if (/\:/.test(message)) {
        message = _error.message.replace(':', '')
      }
// Adjust message to presence of param....
      if (_error.param) {
        message = `${message} in "${_error.param}" parameter.`
      }

      this.props.data({
        error: {
          error: true,
          errorHeader: `${_error.type}!`,
          errorCode: `${_error.code}`,
          errorMessage: message
        }
      })
// If we're validating email and have an invalid email address.....
    } else if (this.props.emailValidation && !this.validEmail(_values.email)) {
      // log('EMAIL VALIDATION', 'tomato');dir(this.props.emailValidation)
//// Send an error...
      this.props.data({
        error: {
          error: true,
          emailError: true,
          errorCode: 'invalid_email_format',
          errorMessage: 'Please enter a valid email address.',
          errorHeader: 'validation_error'
        }
      })
    } else {
// Else send payment through....
      this.sendPayment()
    }
  }


// Submission func...
  async handleSubmit(e) {
// Prevent Reset of page.. .
    e.preventDefault()

    let {token, error} = await this.props.stripe.createToken()
    // log('result', 'purple'),dir(token)

    let values = this.getFormData(this.donationForm)
    // log('values', 'orange'),dir(vals)

    this.props.data({
      paymentData: {
        isAmount: false,
        paymentOK: false,
        amount: this.props.amount,
        email: values.email,
        name: values.name_on_card,
        country: values.country,
        zip: values.zip,
        token: token? token.id : null,
        _error: error? error : null
      }
    })

// Send results Through filter....
    this.sanitizePaymentData(values, token, error)
  }


// Method for clearing/resetting the donation form....
  formReset() {
// Reset all non-private inputs....
    this.donationForm.current.reset()

// Reset each private (stripe) input 1 at a time.....
    this._cardNumber.clear()
    this._cardExpiry.clear()
    this._cardCVC.clear()

// Reset the reset switch at the App Class....
    this.props.data({hide: {reset: false}})
  }


// Markup...
  render() {
    // log('PROPS', 'pink');dir(this.props)
// If the reset prop is passed in, reset the donation form...
    if (this.props.reset) {
      this.formReset()
    }

    if (this.props.sanitize) {
// Reset the sanitize flag....
      this.props.data({
        data: {
          sanitize: false
        }
      })
// Rerun the sanitizer....
      // log('TRANSACTION DATA', 'blue')
      dir(this.props.transaction)
      this.sanitizePaymentData(null, null, null, this.props.transaction)
    }

    return (
      <DonationFormStyler ref={this.donationWidget} className="donationWidget">
        <FormBackDrop/>
        <Container className="create-donation">
          <Row className="header-row">
            <Col className="header-text-col" xs={8} md={10}>
              <p className='text'>How much would you like to give?</p>
            </Col>
            <Col className="header-logo-col" xs={4} md={2}>
              <img id='logo' src={`${pub}/images/logos/t4tLogoDark.png`} alt="Trees for Tigers Logo"/>
            </Col>
          </Row>
          <Form className='amount-form' ref={this.amountForm}>
            <Form.Row className='amount-row'>
              <Col className='amount-label-col' xs={1}>
                <Form.Label>$</Form.Label>
              </Col>
              <Col className='amount-input-col' xs={10}>
                <Form.Control
                  id='amount'
                  type='number'
                  pattern='[0-9]*'
                  name='amount'
                  as='input'
                  placeholder='50'
                  ref={this.amountInput}
                  size='sm'
                />
              </Col>
              <Col className='adjust-amount-col hide' ref={this.adjustAmountButton} xs={1}>
                <Button className='adjust-amount-button' variant='dark' onClick={this.adjustAmount}> ← </Button>
              </Col>
            </Form.Row>
            <Form.Row className='amount-submit-btn-row' ref={this.amountButton}>
              <Col className='amount-submit-btn-col' xs={3}>
                <Button type='button' onClick={this.createDonation} variant='dark'>Checkout</Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>

        <Container className='contain hide' ref={this.ccFormContainer}>
          <Form onSubmit={this.handleSubmit} ref={this.donationForm}>
            <Form.Row className='payment-request-btn-row'>
              <Col className='payment-request-btn-col'>
                <PaymentRequestButton amount={this.props.amount}/>
              </Col>
            </Form.Row>
            <Form.Row className='email-row'>
              <Form.Group className='emailAddy' as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  id='email'
                  name='email'
                  as='input'
                  placeholder='Enter address for emailed receipt'
                  size='sm'
                  ref={this.emailInput}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className='name-row'>
              <Form.Group className='nameOnCard' as={Col}>
                <Form.Label>Name on Card</Form.Label>
                <Form.Control id='name' name='name_on_card' as='input' placeholder='John Smith' size='sm'></Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className='country-select' as={Col}>
                <Form.Label>Country or Region</Form.Label>
                <div className="locationFieldsContainer">
                  <CountryField/>
                  <Form.Control id='zip' name='zip' as="input" placeholder='ZIP' size='sm'/>
                </div>
              </Form.Group>
            </Form.Row>
            <div className="ccFieldsContainer container">
              <Row className='row1'>
                <Col className='col number' xs={7} sm={8}>
                  <CardNumberElement
                    name='card-number'
                    onChange={this.handleChange}
                    onReady={(c) => this._cardNumber = c}
                    ref={this.cardNumber}
                    {...createOptions}
                  />
                </Col>
                <Col className='col ccIcons' xs={5} sm={4}>
                  <CCRotater/>
                </Col>
              </Row>
              <Row className='row2'>
                <Col className='col expiry' xs={6}>
                  <CardExpiryElement
                    name='expiration'
                    onChange={this.handleChange}
                    onReady={(c) => this._cardExpiry = c}
                    {...createOptions}
                  />
                </Col>
                <Col className='col cvc' xs={4}>
                  <CardCVCElement
                  onChange={this.handleChange}
                  onReady={(c) => this._cardCVC = c}
                  {...createOptions}
                />
                </Col>
                <Col className='col cvvIcon' name='cvc' xs={2}>
                  <img src={`${pub}/images/graphics/cvc.png`} alt="CVC Icon" className="cvcIcon"/>
                </Col>
              </Row>
            </div>
            <Row className='submit'>
              <Col className='submit-col'>
                <Button type='submit' className='submitButton' variant='dark'>{`donate $${this.props.amount}`}</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </DonationFormStyler>
    )
  }
}


export default injectStripe(DonationForm)
