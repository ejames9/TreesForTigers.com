/*
** HowYouCanHelp.jsx
**
** HowYouCanHelp.jsx is a react component for the t4t.com site, that presents
** a list of ways one can help the cause, including a donation form for
** donatiing to t4t....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


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





const UL = styled.ul`
  position: relative;
  width: 60%;
  /* list-style: none; */

  li {
    padding: .5rem;
    margin-bottom: 1.5rem;
    background: transparent;
    backdrop-filter: blur(20px);
    border-radius: 15px;

    h2 {
      font-family: raleway;
      font-weight: 800;
      font-size: 1.7rem;
      text-align: left;
      color: #dedede;
      z-index: 99999;

      &.fromT4T {
        color: #ababab;
        /* font-weight: 800; */
      font-size: 1.6rem;
      }
    }

    p {
      font-size: 1.3rem;
      color: #161616;
    }

    .tourism,
    .contribute {
      padding-bottom: .5rem;
    }

    .contribute {
      font-size: 1.9rem;

      p {
        font-size: 1.5rem;
      }
    }
  }
`

const HowYouCanHelp =()=> {
  return (
    <h2 className='contribute'>Contribute to Trees for Tigers!</h2>
    <p>Donate using the form below, and help us to purchase and plant tree seedlings.</p>
    <Col className="donation-form-col" xs={12} sm={8} md={6}>
      <a id='donation-form' className='anchor'/>
      <Elements>
        <DonationForm
          amount={this.state.amount}
          reset={this.state.reset}
          data={this.data}
          clouds={this.state.clouds}
        />
      </Elements>
    </Col>
    <UL>
      <li>
        <h2 className='tourism'>Engage in eco-tourism to help develop local economies. Check out <a href="https://www.royle-safaris.co.uk/">Royle Safaris</a> and <a href='http://www.russiatigertracking.com/'>Russia Tiger Tracking</a> for more info.</h2>
        <p>"We need to make a live tiger more valuable than a dead tiger.""</p>
      </li>
      <li>
        <h2>Use sustainable chopsticks and other food utensils.</h2>
      </li>
      <li>
        <h2>Ask your local restaurant to switch to reusable chopsticks.</h2>
      </li>
      <li>
        <h2>Check out <a href="https://www.fcsal.org/cfs">Chopsticks for Salamanders</a> for more information</h2>
      </li>
      <li>
        <h2>Buy <span className='reusableCS'>Reusable Chopsticks</span> <a href="https://smile.amazon.com/s?k=reusable+chopsticks&ref=nb_sb_noss">here</a> and <a href="http://www.everythingchopsticks.com">here</a>.</h2>
      </li>
      <li>
        <h2>Check out <a href="https://fsc.org/en">The Forest Stewardship Council</a> for information on sourcing sustainable wood.</h2>
      </li>
      <li>
        <h2>For US only, check out <a href="https://www.americanforests.org/">American Forests</a>.</h2>
      </li>
    </UL>
  )
}
