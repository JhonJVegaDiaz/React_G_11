import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';

function SignUpComponent() {
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-warning bg-opacity-50 text-dark my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">User Register</h2>
              <p className="text-dark-50 mb-5">Please crate your account!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-dark' label='Name' id='formControlLg' type='txt' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-dark' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-dark' label='User Name' id='formControlLg' type='txt' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-dark' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBBtn outline className='mx-2 px-5' color='success' size='lg' href="/">
                Save
              </MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default SignUpComponent;