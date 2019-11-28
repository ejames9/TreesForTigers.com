/*
** DonationFormStyler.jsx
**
** DonationFormStyler.jsx contains the styles for T4T Donation page stripe donation form....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Get react...
import React, {Component} from 'react'
// Get styled-components...
import styled from 'styled-components'
import {pub} from '../../utils/environmentals'
import {font} from '../../textContent'
import {isSafari} from '../../utils/utils'



const DonationFormStyler = styled.div`
  position: relative;
  background: transparent;
  backdrop-filter: blur(10px);
  width: 100%;
  margin: 0 -15px;
  border: 1px solid #191919;
  border-radius: 5px;
  padding: .6rem;
  overflow: hidden;
  /* display: none; */
  z-index: 1;

/* Globals.... */
  h1 {
    font-family: Nunito
  }

  p {
    position: relative;
    bottom: 2rem;
    color: #dedede;
  }

  input {
    ::placeholder {
      color: #aab7c4;
    }
  }

  .form-control:focus {
    border-color: inherit;
    box-shadow: none;
    box-shadow: none;
  }

  label {
    color: white;
    margin-bottom: 0;
    font-size: .6rem;
    text-shadow:
       -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
         1px 1px 0 #000;
  }

/* Header styles ....*/
  .create-donation {
    .header-row {
      margin-bottom: 2rem;

      .header-text-col {
        display: flex;
        flex-direction: row;
        align-items: center;

        .text {
          color: white;
          text-shadow:
             -1px -1px 0 #000,
              1px -1px 0 #000,
              -1px 1px 0 #000,
               1px 1px 0 #000;
          font-size: 1.3rem;
          font-family: dosis;
          font-weight: 600;
          align-self: center;
          margin: 0;
          bottom: 0;
        }
      }

      .header-logo-col {
        display: flex;
        justify-content: center;
        padding: 0;

        #logo {
          border: 2px solid #404040;
          border-radius: 50%;
          width: 5rem;
          height: 5rem;
          /* float: right; */
        }
      }
    }
  }

  .contain {
    transition: all 1s ease-in-out;
    margin-top: 0;
    max-height: 0;
    padding: .2rem;

    &.rise {
      margin-top: -2.6rem;
      max-height: 100vh;
      height: auto;

    }

    .payment-request-btn-row {
      .payment-request-btn-col {
        background: transparent;
      }
    }
  }

  .ccFieldsContainer {
    border-radius: .3rem;
    /* box-shadow: 1px 1px 5px 1px #ced1d5; */

    .row1 {
      .col.number {
        padding-right: 0;
      }
    }
  }

  .submit {
    margin-top: 1.3rem;
    background: transparent;

    .submit-col {
      background: transparent;

      .submitButton {
        height: 32px
      }
    }
  }

  .col {
    padding: .4rem;
    background: white;
  }

  .number {
    border-bottom: 1px solid #ced4da;
    border-top-left-radius: .3rem;
  }

  .ccIcons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-bottom: 1px solid #ced4da;
    border-top-right-radius: .3rem;
    padding: .1rem;

    img {
      height: 1.4rem;
      width: 1.4rem;
      float: right;
    }
  }

  .expiry {
    border-right: 1px solid #ced4da;
    border-bottom-left-radius: .3rem;
  }

  .cvc {
  }

  .cvvIcon {
    border-bottom-right-radius: .3rem;
    padding-right: 0.1 rem;

    .cvcIcon {
      width: 1.4rem;
      height: 1rem;
      float: right;
    }
  }

  .mastercard {
    margin-right: 3px;
  }

  .rotater {
    margin-right: 3px;
  }

  .visa {
    margin-right: 3px;
  }

  .amex {
    margin-right: 3px;
  }

  .sash {
    position: absolute;
    left: -8.5rem;
    top: -13rem;
    height: 30rem;
    width: 70rem;
    background: black;
    background-position: -270px -370px;
    background-repeat: no-repeat;
    background-size: cover;
    transform: rotate(-22deg);
    pointer-events: none;
    z-index: -1;
  }

  .submit-col {
    display: flex;
    justify-content: center;

    .submitButton {
      font-size: .9rem;
      width: 95%;
      padding: .15rem;
    }
  }

  .country-select {
    background: transparent;
    padding-top: 0;

    .locationFieldsContainer {
      border-radius: .3rem;
      /* box-shadow: 1px 1px 5px 1px #ced1d5; */

      .country-row {
        width: 100%;
        padding-left: 15px;

        .selector-col {
          background: transparent;
          padding-left: 0;
          padding-right: 0;

          select#countrySelect.form-control.form-control-sm {
            appearance: none;
            -moz-appearance: none;
            background-position: right 50%;
            background-repeat: no-repeat;
            background-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" version="1"><path d="M4 8L0 4h8z"/></svg>');
            padding: .3em;
            padding-right: 1.5em;
            padding-left: 0;
            border-radius: 0 !important;
            border: none;
            /* color: #aab7c4; */
          }
        }

        .flag-col {
          background: white;
          border-top-left-radius: .3rem;
          padding: 0;
        }
      }
    }



    input#zip {
      border-bottom-right-radius: .3rem;
      border-bottom-left-radius: .3rem;
      border-top-right-radius: 0 !important;
      border-top-left-radius: 0 !important;
      border: none;
      border-top: 1px solid #ced4da;
    }
  }

  .nameOnCard {
    background: transparent;
    padding-top: 0;
    margin-bottom: 0;

    input#name {
      border-radius: .3rem;
      border: none;
      /* box-shadow: 1px 1px 5px 1px #ced1d5; */
    }
  }

  .emailAddy {
    background: transparent;
    margin-bottom: 0;

    input#email {
      border-radius: .3rem;
      border: none;
      /* box-shadow: 1px 1px 5px 1px #ced1d5; */
    }
  }

  .amount-form {
    &.pad {
      padding: 1rem;
    }
    .amount-row {
      justify-content: flex-start;
      background: transparent;
      margin-bottom: -1rem;

      .col {
        background: transparent;
      }

      .amount-label-col {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        label {
          position: relative;
          bottom: 10%;
          font-size: 2.5rem;
          color: black;
          text-shadow:
           -1px -1px 0 #fff,
            1px -1px 0 #fff,
            -1px 1px 0 #fff,
             1px 1px 0 #fff;
        }
      }

      .amount-input-col {
        #amount {
          width: 95%;
          height: 85%;
          background: transparent;
          border: none;
          border-radius: 1rem;
          color: #dedede;
          caret-color: #fff;
          /* box-shadow: 1px 1px 5px 1px #161616; */
          font-family: Source Code Pro, Open Sans;
          font-weight: bold;
          font-size: 3rem;
          line-height: 3rem;
          /* padding-bottom: .5rem; */
          backdrop-filter: blur(8px);
          /* border: 10px solid #161616; */
          border: none;

          ::placeholder {
            ${isSafari()&& `
              position: relative;
              top: 1rem;
            `}
            color: #ababab;
          }
        }
      }

      .adjust-amount-col {
        position: relative;
        bottom: .3rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .amount-submit-btn-row {
      justify-content: flex-end;

      .amount-submit-btn-col {
        position: relative;
        right: .5rem;
        display: flex;
        justify-content: center;
        padding: 1rem 0;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 1rem;
    margin: 0;

/* Header styles ....*/
    .create-donation {
      .header-row {
        margin-bottom: 2rem;

        .header-text-col {
          .text {
            font-size: 1.8rem;
            margin: 0;
            bottom: 0;
          }
        }

        .header-logo-col {
          padding: 0;

          #logo {
            width: 5rem;
            height: 5rem;
          }
        }
      }
    }

    .amount-form {
      .amount-row {
        margin-bottom: -1rem;

        .col {
        }

        .amount-label-col {
          label {
            bottom: 7.5%;
            font-size: 4rem;
          }
        }

        .amount-input-col {
          #amount {
            height: 86%;
            padding-bottom: none;
            font-size: 5rem;
          }
        }

        .adjust-amount-col {
        }
      }

      .amount-submit-btn-row {
        right: 0;

        .amount-submit-btn-col {
          padding: 1rem 0;
        }
      }
    }
  }

  .ccFieldsContainer {
    .row1 {
      .number {
        padding: .4rem;
      }
    }
  }
`

export default DonationFormStyler
