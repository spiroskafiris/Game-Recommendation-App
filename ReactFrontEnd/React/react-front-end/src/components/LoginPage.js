import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBCheckbox } from 'mdb-react-ui-kit';

function LoginPage() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {

    event.preventDefault();
    window.location.href='http://localhost:3000/CategoriesSelector';
    // onClick={event =>  window.location.href='/your-href'}

  }
  return (
    <MDBContainer fluid className="Login">

      <MDBRow>
        
        <MDBCol col='10' md='6'>
          <img width='450px' src="https://techsmart.gr/wp-content/uploads/2023/09/PROX2-Landscape-21.jpg" className="img-fluid"/>
        </MDBCol>

        <MDBCol col='4' md='6'>
          <div>
            <p>Sign in</p>
          </div>

          <Form onSubmit={handleSubmit}>

              <Form.Group size="lg" controlId="email">

                <Form.Label>Email</Form.Label>

                <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

              </Form.Group>

              <Form.Group size="lg" controlId="password">

                <Form.Label>Password</Form.Label>

                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

              </Form.Group>

              <Button block size="lg" type="submit" disabled={!validateForm()}>Login</Button>

          </Form>

          <div>
            <p>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
            </p>
          </div>

          <div>
            <p>Don't have an account? <a href="#!" className="link-danger">Register</a></p>
          </div>

        </MDBCol>

      </MDBRow>

      <div>

        <div className="text-white mb-3 mb-md-0">
          Copyright © 2023. All rights reserved.
        </div>

      </div>

    </MDBContainer>



 
  );
}

export default LoginPage;