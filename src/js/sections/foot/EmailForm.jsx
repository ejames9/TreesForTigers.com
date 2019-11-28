/*
** EmailForm.jsx
**
** A simple email form component in React...
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// Get React...
import React from 'react'
// Get sc component styling...
import styled from 'styled-components'
// Get react-bootstrap....
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// Get icons...

const action = 'mailto:kim.voyle@treesfortigers.org'

// Component styles...
const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    align-items: center;

    .input {
      width: 67%;
      height: 2rem;
      border: none;
      border-radius: .3rem;
    }

    .textarea {
      width: 67%;
      height: 6rem;
      border: none;
      border-radius: .3rem;
    }

    button.btn-danger {
      border-radius: 0rem .3rem .3rem 0rem;
    }

    button.btn-primary {
      border-radius: .3rem 0rem 0rem .3rem;
    }
  }

  @media (min-width: 600px) {
    form {
      .input {
        width: 50%
      }
      .textarea {
        width: 50%;
      }
    }
  }

  @media (min-width: 768px) {
    form {
      .input {
        width: 33%
      }
      .textarea {
        width: 33%;
      }
    }
  }
`

// Component markup ....
export default function EmailForm() {
  return (
    <FormContainer>
      <form action={action} method='post' encType="text/plain">
        <input type="text" className='input' placeholder='name' name="name"/><br/>
        <input type="text" className='input' placeholder='email' name="mail"/><br/>
        <textarea className='textarea' rows={4} placeholder='your message' name="comment"></textarea><br/><br/>
        <div className='buttons'>
          <Button className='submit' variant='primary' type="submit">Send</Button>
          <Button className='reset' variant='danger' type="reset">Reset</Button>
        </div>
      </form>
    </FormContainer>
  )
}
