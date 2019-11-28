/*
** CountryField.jsx
**
** CountryField.jsx is a selection field that provides 32 choices for country of origin. This
** component will place the corresponding flag svg next to the text value in the field when a
** selection is made....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Get React...
import React, {Component} from 'react'
// Get styled-components...
import styled from 'styled-components'
// Get some bootstrap ...
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import el from '../utils/DOM/el'

import {log, dir} from '../utils/Loggers'
// for quickly setting default image paths...
import {pub} from '../utils/environmentals'
// Get text...
import {countries} from '../textContent'

// Address for the flag svg's ...
const svgAddress = `${pub}/images/svg/color/flags/`


const CountryFieldStyler = styled.div`
  background: white;
  border-top-right-radius: .3rem;
  border-top-left-radius: .3rem;

  .country-row {
    .flag-col {
      display: flex;
      align-content: center;
      padding-left: .2rem;

      img {
        width: 1.6rem;
        height: 1.6rem;
        align-self: center;
        margin-left: .3rem;
      }
    }
  }
`


class CountryField extends Component {
// Ctor ...
  constructor(props) {
    super(props)

    this.state = {
      currentCountry: 'United States'
    }

    this.onChange = this.onChange.bind(this)


// Get a ref for the select input...
    this.selector = React.createRef()
  }

// Value change handler...
  onChange(props) {
    log('[change]')
    log(this.selector.current.value)

    this.setState({
      currentCountry: this.selector.current.value
    })
  }

// Component markup....
  render() {
    return (
      <CountryFieldStyler>
        <Row className="country-row">
          <Col className="flag-col" xs={2} md={1}>
            <img src={`${svgAddress}${this.state.currentCountry}.svg`} alt=""/>
          </Col>
          <Col className="selector-col"xs={10} md={11}>
            <Form.Control id='countrySelect' as="select" name='country' defaultValue='United States' onChange={e=> this.onChange(e)} ref={this.selector} size='sm'>
              {
                countries.map((country, i)=> (
                  <option key={i}>{country}</option>
                ))
              }
            </Form.Control>
          </Col>
        </Row>
      </CountryFieldStyler>
    )
  }
}


export default CountryField
