/*
** Donate.jsx
**
** Donate.jsx is the donation pos page of the T4T.com site....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


//TODO DIFFICULT, POSTPONE: zoomout on error, programmatically....
//TODO: korean pine is stretched on iphone in landscape...
//TODO: deploy to heroku....
//TODO: learn how to aquire and apply ssl certificate....
//TODO: learn how to transfer domain name....
//TODO: clean up code, get rid of logs, unnecessary images....
//TODO: fix safari navbar issues...
//TODO:

// Get react...
import React, {Component} from 'react'
// Get reactDOM...
import reactDOM from 'react-dom'
// Get react-bootstrap lib...
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// Get styled-components...
import styled, {createGlobalStyle} from 'styled-components'
// Get react-stripe integration lib...
import {
  Elements,
  StripeProvider
} from 'react-stripe-elements'
// Get uuid...
import ShortUUID from 'short-uuid'

// Get donation form...
import DonationForm from './DonationForm'
import Errors, {setModalShow as setErrorShow} from './Feedback/Errors'
import Success, {setModalShow as setSuccessShow} from './Feedback/Success'
import GridSpinner from './Feedback/GridSpinner'
import Theme from './DonationPageTheme'
// Utilities...
import el from '../utils/DOM/el'
import {log, dir} from '../utils/Loggers'
import {go} from '../utils/DOM/events'
import mergeData from '../utils/mergeData'
import {addClass, removeClass} from '../utils/DOM/classList'
import {
  font,
  ecoTourism,
  HowYouCanHelp
} from '../textContent'

import Firework from '../graphics/fireworks'

// Fonts..
const Globals = createGlobalStyle`
// Google fonts...
  // @import url("https://fonts.googleapis.com/css?family=Nunito|Open+Sans|Source+Code+Pro&display=swap");
  body, html {
    font-size: 16px;
    background: #161616;
  }

  .hide {
    visibility: hidden;
    // display: none;
  }

  .invisible {
    opacity: 0;
  }

  .visible {
    transition: opacity 500ms;
    opacity: 1;
  }

  .fader {
    opacity: .8;
  }

  .modal-content {
    background: transparent;
    backdrop-filter: blur(15px);
    border: 1px solid white;
  }

  .modal-header, .modal-title {
    border: none;
  }

  input[type=number],
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    margin: 0;
  }

// Get coder font for foStware logo....
  @font-face {
    font-family: coder;
    src: url('/fonts/coder.otf');
  }

/// Get classy font ....
  @font-face {
    font-family: classy;
    src: url('/fonts/classy.ttf');
  }

/// Get coder font for foStware logo....
  @font-face {
    font-family: beyondStars;
    src: url('/fonts/beyondStars.otf');
  }

/// Get classy font ....
  @font-face {
    font-family: random;
    src: url('/fonts/random.ttf');
  }

// Get classy font ....
  @font-face {
    font-family: funTime;
    src: url('/fonts/funTime.ttf');
  }

// Get classy font ....
  @font-face {
    font-family: starLight;
    src: url('/fonts/starLight.ttf');
  }

// Get classy font ....
  @font-face {
    font-family: alphaClouds;
    src: url('/fonts/alphaClouds.ttf');
  }

// Get classy font ....
  @font-face {
    font-family: ghostClouds;
    src: url('/fonts/ghostClouds.ttf');
  }

/// Get classy font ....
  @font-face {
    font-family: arrows;
    src: url('/fonts/arrows.ttf');
  }

`



// Page styles....
const DonationPageStyler = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;

  .how-to-help-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    bottom: 0;
    align-items: center;

    .text-content-row {
      flex-direction: column;
      align-items: center;

      .div {
        display: flex;
        justify-content: center;
        width: 100%;
      }

      h1 {
        position: relative;
        font-family: bebas neue, oswald, anton, alatsi, funTime;
        text-transform: uppercase;
        /* font-weight: 800; */
        letter-spacing: -.03rem;
        font-size: 2.8rem;
        text-align: center;
        padding-top: 2rem;
        padding-bottom: 3rem;
         /* text-fill-color: #efefef;
        text-stroke-width: 1px;
        text-stroke-color: #ababab; */
        color: #dfad40;
        text-shadow:
             -2px -2px 0 #161616,
              2px -2px 0 #161616,
              -2px 2px 0 #161616,
               2px 2px 0 #161616;
        /* background: url(/images/treesText.jpg);
        text-fill-color: transparent;
        background-clip: text; */
        z-index: 99999;

        &.thanks {
          font-size: 3.1rem;
          font-family:  starLight, starStudded;
          text-transform: uppercase;
          color: #c3e0ee;
          margin-top: 3.5rem;
          padding-bottom: 1.2rem;
        }
      }

      h3 {
        &.fromT4T {
          display: flex;
          text-align: center;
          color: #ababab;
          font-family: raleway;
          font-size: 1.1rem;
          margin-bottom: 3.5rem;
          z-index: 99999;
        }
      }

      .nav-container {
        .nav-row {
          right: 0;
          left: 0;
          margin: 0 auto;
          width: 60%;
          justify-content: space-evenly;

          .home-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            img {
              position: relative;
              bottom: 1.2rem;
              width: 3.5rem;
              height: 3.5rem;
              opacity: .9;
            }

            p {
              position: relative;
              bottom: 1.3rem;
              color: #dedede;
              font-family: raleway;
              font-size: .7rem;
              opacity: 1;
            }
          }

          .back-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            p {
              position: relative;
              bottom: 1.5rem;
              color: #dedede;
              font-family: raleway;
              font-size: .7rem;
              transition: opacity .5s;
              opacity: 1;
              text-align: center;
            }
          }
        }
      }
    }

    .donation-form-row {
      /* flex-direction: column; */
      align-content: center;
      justify-content: center;

      .donation-form-col {
        display: flex;
        width: 100%;
        min-height: 100%;
        align-items: center;
        justify-content: center;
      }
    }

    .ghost-row {
      visibility: hidden;
      justify-content: center;
      height: 15rem;
    }
  }

/* Targeting phones in landscape mode, through iphone X....*/
  @media (max-width: 813px) and (orientation: landscape) {
    .how-to-help-container {
      .text-content-row {
        h1 {
          font-size: 3.2rem;

          &.thanks {
            font-size: 3.2rem;
          }
        }

        h3 {
        }
      }
    }
  }

/* Targeting tablets in portrait mode ....*/
  @media (min-width: 600px) and (orientation: portrait) {
    .how-to-help-container {
      .text-content-row {
        h1 {
          font-size: 4.2rem;

          &.thanks {
            font-size: 4.2rem;
          }
        }

        h3 {
        }
      }
    }
  }

/* Targeting widths, beginning just after iphone X...*/
  @media (min-width: 813px) {
    padding: 3.5rem 5rem 5rem;

    .how-to-help-container {
      .text-content-row {
        h1 {
          font-size: 5.8rem;
          padding-top: 0;
          padding-bottom: 1rem;

          &.thanks {
            font-size: 5.8rem;
            margin-top: 0;
            padding-bottom: 3rem;
          }
        }

        h3 {
          &.fromT4T {
            display: block;
            text-align: left;
            font-size: 1.7rem;
            margin-bottom: 5.5rem;
          }
        }

        .nav-container {
          .nav-row {
            .home-col {
              img {
                bottom: 1.1rem;
                width: 6rem;
                height: 6rem;
                opacity: .8;

                &:hover {
                  opacity: 1;
                }
                &:active {
                  opacity: .7;
                }
              }

              p {
                font-size: .8rem;
                transition: opacity .5s;
                opacity: 0;
              }

              &:hover {
                p {
                  opacity: 1;
                }
              }
            }

            .back-col {
              p {
                bottom: 3rem;
                font-size: .8rem;
                transition: opacity .5s;
                opacity: 0;
              }

              &:hover {
                p {
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
  }
`

const BackButton = styled.button`
  font-family: arrows;
  font-size: 3.5rem;
  transform: scaleX(-1);
  border: none;
  background: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  margin-right: 2.5rem;

  &:hover {
    -webkit-text-fill-color: #c3e0ee;
    cursor: pointer;
  }
  &:active {
    -webkit-text-fill-color: transparent;
  }
  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    margin-right: 0;
    font-size: 6rem;
  }
`

const Ghost = styled.div`
  position: relative;
  height: 100%;
  width: 15rem;
  background: white;
  /* visiblility: hidden; */
`


class DonationPage extends Component {
// Ctor ...
  constructor(props) {
    super(props)

    this.state = {
      activeTransaction: false,
      _id: null,
      client_secret: null,
      idempotency_key: null,
      amount: 0,
      token: null,
      email: null,
      name: null,
      country: null,
      zip: null,
      error: false,
      _error: null,
      errorMessage: '',
      errorCode: null,
      errorHeader: null,
      emailValidation: true,
      emailError: false,
      spinner: false,
      reset: false,
      donationWidget: null,
      clouds: null,
      night: false,
      stillNight: false,
      dawn: false,
      ghost: null,
      sanitize: false,
      donated: false
    }

    this.componentDidMount = this.componentDidMount.bind(this)
    this.setStateAsync = this. setStateAsync.bind(this)
    this.data = this.data.bind(this)
    this.fetchSecret = this.fetchSecret.bind(this)
    this.getTransactionKey = this.getTransactionKey.bind(this)
    this.updateIntent = this.updateIntent.bind(this)
    this.setAmount = this.setAmount.bind(this)
    this.displayError = this.displayError.bind(this)
    this.toggleSpinner = this.toggleSpinner.bind(this)
    this.onBack = this.onBack.bind(this)
    this.onHome = this.onHome.bind(this)

    this.oc = this.oc.bind(this)

// Refs...
    this.ghost = React.createRef()

    this.emailValidation = true
  }

// Post mounting componnent ops...
  componentDidMount() {
    return
  }


// An asynchronous version of setState....
  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }


// Method for displaying a spinner...
  toggleSpinner() {
    if (this.state.spinner) {
      this.setState({
        spinner: false
      })
    } else {
      this.setState({
        spinner: true
      })
    }
  }


// Method for displaying errors...
  displayError(error) {
    if (error) {
      let message = error.message
// If we have a colon, remove it...
      if (/\:/.test(message)) {
        message = message.replace(':', '')
      }
// Adjust message to presence of param....
      if (error.param) {
        message = `${message} in "${error.param}" parameter.`
      }
// Set state....
      this.setState({
        error: true,
        errorHeader: error.type? `${error.type}!` : 'GeneralError!',
        errorCode: error.code? `${error.code}` : 'Error',
        errorMessage: message
      })
    }

//// Just in case we are on a mobile phone, and are zoomed into the form, we will make sure the
// zoom level is at 100%....
    // document.body.style.zoom = '100%'


/// Display an error to the user...
    return setErrorShow(true)
  }


// Method for confirming the donor's card details....
  async confirmPayment(stripe, data) {
    // log('DATA', 'red');dir(data)
// Start the spinner....
    this.toggleSpinner()

    let {paymentIntent, error} = await stripe.confirmCardPayment(
      this.state.client_secret,
      {
        payment_method: {
          card: {
            token: this.state.token
          },
          billing_details: {
            name: this.state.name,
            address: {
              country: 'US',
              postal_code: this.state.zip
            }
          }
        }
      }
    )

    if (error) {
// Kill the spinner ....
      this.toggleSpinner()

// Show the error....
      this.displayError(error)
    } else {
      if (paymentIntent.status === 'succeeded') {
/// Kill the spinner ....
        this.toggleSpinner()

// Show success modal...
        setSuccessShow(true)
      }
    }
  }


// Method for initially setting a donation amount and creating a payment intent...
  async setAmount(data, headers) {
    let result =  await fetch("/payments/secret", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        amount: data.amount
      })
    })
    return result
  }


// Method for updating a donation amount with an existing payment intent...
  async updateIntent(headers, data=null) {
    let result

    if (data) {
      result =  await fetch("/payments/secret/update_intent", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          isAmount: true,
          intent: this.state._id,
          amount: this.state.amount
        })
      })
    } else {
      result =  await fetch("/payments/secret/update_intent", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          intent: this.state._id,
          receipt_email: this.state.email
        })
      })
    }

// Return intent.....
    return result
  }


// Create payment intent and retrieve client secret....
  async fetchSecret(data=null) {
// Create headers....
    let  headers = new Headers();
    headers.append('Content-Type', 'application/json')

    let response
// Send data to payment intents api...
    if (this.state.activeTransaction) {
      response = await this.updateIntent(headers)
    } else {
      response = await this.setAmount(data, headers)
    }

    let json = await response.json()

// If Error.....
    if (json.error) {
// display error modal...
      this.displayError(json)

// We've obtained a secret...
    } else {
      if (this.state.activeTransaction) {
        this.setState({
          amount: this.state.isAmount? data.amount : this.state.amount,
          client_secret: json.client_secret
        })
      } else {
        this.setState({
          activeTransaction: true,
          _id: json.id,
          client_secret: json.client_secret,
          idempotency_key: `IdemKey_${this.getTransactionKey()}`
        })
      }
    }

    return json
  }


// Method for generating a unique v4 UUID (short format) key.....
  getTransactionKey() {
// Create uuid translator/creator...
    let translator = ShortUUID(),
// Create a uuid...
    key = translator.new()

    return key
  }


// A data hub for the donation widget....
  async data(datum, stripe=null) {
    let type = Object.entries(datum)[0][0],
    updated, emailValidation

    switch (type) {
      case 'amount':
// Merge new datum with state obj...
        this.setState(datum.amount)
        // dir(datum);dir(datum.amount);log(datum.amount.amount)
// Get secret...
        this.fetchSecret(datum.amount)
        break
      case 'error':
        log('STATE', 'blue');dir(this.state)
        if (!this.state.error) {
          log('ARE WE GERE?', 'tomato')
// Set state...
          this.setState(datum.error)
// Display the error...
          this.displayError()
        }
        break
      case 'paymentData':
// If data has passed sanitization.....
        if (datum.paymentData.paymentOK) {
// Update the payment intent with the donor's email addresss......
          let secret = this.state.client_secret
          // log('EMAIL VALID', 'blue')
          log(this.state.emailValidation)

          if (this.state.emailValidation) {
            let json = await this.fetchSecret()

            if (json.client_secret) {
              secret = json.client_secret
            }
          }
          this.confirmPayment(stripe)
          break
        } else {
// Set state ....
          this.setState(datum.paymentData)
        }
        break
      case 'hide':
        if (datum.hide.noEmail) {
// Set no email validation flag....
          this.setState(datum.hide.flags)
        } else {
          this.setState(datum.hide)
        }
        break
// General data endpoint.....
      case 'data':
        this.setState(datum.data)
        break
// Recieve donation widget ref, and store in state obj...
      case 'ref':
        this.setState(datum.ref)
        break
      case 'stillNight':
        this.setState(datum.stillNight)
        break
    }
  }


// Click handler method for the 'Thank You' page back button...
  onBack(e) {
    const delay = screen.width >= 768? 9500 : 3000

    this.data({
      hide: {
        hide: true,
        dawn: true,
        night: false,
        stillNight: true
      }
    })

    setTimeout(()=> {
      el('.invisible').forEach((el)=> {
        removeClass(el, 'invisible')
        addClass(el, 'visible')
      })
      addClass(el('.home-button'), 'donated')
      addClass(el('.liveTiger'), 'donated')
    }, delay)
  }


// Click handler for sending the user back to the main page....
  onHome() {
// Send em' home...
    window.location.href = '/'
  }

/* FOR DEVELOPMENT PURPOSES */
/***************************/

// A shortcut to the 'donation success animation'.....
  oc() {
    this.data({
      hide: {
        hide: true,
        night: true,
        donated: true,
        stillNight: true
      }
    })
  }

/***************************/


// Page markup...
  render() {
    let paymentData = null
// Build payment data obj, for passing into donation form....
    if (this.state.sanitize) {
      paymentData = {
        amount: this.state.amount,
        email: this.state.email,
        name: this.state.name_on_card,
        country: this.state.country,
        zip: this.state.zip,
        token: this.state.token,
        error: this.state.error
      }
    }

    // log('render', 'green');dir(this.state)
    return (
      <React.Fragment>
        <a id='how-to-help' className='anchor'/>
        <Theme
          dawn={this.state.dawn}
          night={this.state.night}
          stillNight={this.state.stillNight}
          data={this.data}
        />
        <DonationPageStyler>
          <Globals/>
          <StripeProvider apiKey='pk_test_oCqrBp4KQ7j6Qz7Qf38NVYT200QL5iBLNX'>
            <Container className='how-to-help-container' fluid>
              <Row className='text-content-row'>
                {
                  !this.state.night?
                    <React.Fragment>
                      <h1 className={this.state.donated? 'invisible' : 'new-day'} onClick={this.oc}>Together, we can make a new day.</h1>
                      <div className={this.state.donated? 'invisible div' : 'div'}>
                        <HowYouCanHelp donated={this.state.donated}/>
                      </div>
                    </React.Fragment>
                  :
                    <React.Fragment>
                      <h1 className='thanks'>Thank You!</h1>
                      <h3 className='fromT4T'>From the Amur Tigers of Eastern Russia, and everyone at Trees for Tigers</h3>
                      <Container className="nav-container">
                        <Row className="nav-row">
                          <Col className="back-col" xs={6} md={3}>
                            <BackButton onClick={this.onBack}>M</BackButton>
                            <p>More Ways to Help!</p>
                          </Col>
                          <Col className="home-col" xs={6} md={3}>
                            <img src="/images/trees4TigersLogoWhite.svg" onClick={this.onHome} alt="Trees for Tigers Logo"/>
                            <p className='home-nav-label'>Home</p>
                          </Col>
                        </Row>
                      </Container>
                    </React.Fragment>
                }
              </Row>
              <Row className="donation-form-row">
                <Col className="donation-form-col" xs={12} sm={9} md={8} lg={6}>
                  <a id='donation-widget' className='anchor'/>
                  <Elements>
                    <DonationForm
                      amount={this.state.amount}
                      reset={this.state.reset}
                      data={this.data}
                      clouds={this.state.clouds}
                      emailValidation={this.state.emailValidation}
                      sanitize={this.state.sanitize}
                      transaction={paymentData}
                    />
                  </Elements>
                </Col>
              </Row>
              <Row className="ghost-row" ref={this.ghost}>
                <Col className="ghost-col">
                  <Ghost/>
                </Col>
              </Row>
            </Container>
          </StripeProvider>
          <Errors
            head={this.state.errorHeader? this.state.errorHeader : null}
            code={this.state.errorCode? this.state.errorCode : null}
            error={this.state.error? this.state.errorMessage : null}
            emailerror={this.state.emailError}
            data={this.data}
            sanitizer={this.state.sanitizer}
          />
          <Success widget={this.state.donationWidget} data={this.data}/>
          {
            this.state.spinner && <GridSpinner fader='fade'/>
          }
        </DonationPageStyler>
      </React.Fragment>
    )
  }
}


// Render...
function renderPage() {
  return reactDOM.render(<DonationPage/>, el('#root'))
}

go(()=> {
  renderPage()
})
