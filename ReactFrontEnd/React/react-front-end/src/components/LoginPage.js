import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function LoginPage() {

  return (
    <MDBContainer fluid className="blocktext">

      <MDBRow>
        
        <MDBCol col='10' md='6'>
          <img width='450px' src="https://techsmart.gr/wp-content/uploads/2023/09/PROX2-Landscape-21.jpg" className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
          <div>
            <p>Sign in</p>
          </div>

            <Form>
                <p>
                <Form.Group className="mb-3" controlId="ControlInput1">
                    <Form.Label> Email address </Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                </p>
                <p>
                <Form.Group className="mb-3" controlId="ControlInput2">
                    <Form.Label> Password </Form.Label>
                    <Form.Control type="password" placeholder="*********" />
                </Form.Group>
                </p>
            </Form>

          <div>
            <p>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
            </p>
          </div>

          <div>
            <Button>Login</Button>

            <p>Don't have an account? <a href="#!" className="link-danger">Register</a></p>
          </div>

        </MDBCol>

      </MDBRow>

      <div>

        <div className="text-white mb-3 mb-md-0">
          Copyright © 2023. All rights reserved.
        </div>

        <div>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='twitter' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='google' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='linkedin-in' size="md"/>
          </MDBBtn>

        </div>

      </div>

    </MDBContainer>
  );
}

export default LoginPage;