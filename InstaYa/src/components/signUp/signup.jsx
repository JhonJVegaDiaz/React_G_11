import React, { useState } from 'react';
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


const MIN = 6;
const MAX = 50;
const GROUP = `[a-zñáéíóúüA-ZÁÉÍÓÚÜÑ]{${MIN},${MAX}}`;
const VALIDATION = new RegExp(`^${GROUP}( ${GROUP})*$`);

const CUSTOM_VALIDATION = (input) => {
  const matchesRegex = VALIDATION.test(input.trim());

  if (input.length < MIN) return `Se necesitan mínimo ${MIN} caracteres`;
  else if (input.length > MAX * 4)
    return `Se necesitan aceptan  máximo ${MAX * 4} caracteres`;
  else if (!matchesRegex) return 'Formato inválido';
  else return '';
};

const EMAIL_VALIDATION = (input) => {
  var formato_email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if (!input.match(formato_email)) return "Debes ingresar un email electronico valido!";
  else return '';
};
const PASSWORD_VALIDATION = (input) => {
  if (password.value.length <= 8) return "Debes ingresar una password con mas de 8 caracteres";
  else return '';
};

const SignUpComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorUser, setErrorUser] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const changeHandlerName = (event) => {
    setName(event.target.value);
    const errorName = CUSTOM_VALIDATION(event.target.value);
    setErrorName(errorName);
  };
  const changeHandlerEmail = (event) => {
    setEmail(event.target.value);
    const errorEmail = EMAIL_VALIDATION(event.target.value);
    setErrorEmail(errorEmail);
  };
  const changeHandlerUser = (event) => {
    setUser(event.target.value);
    const errorUser = CUSTOM_VALIDATION(event.target.value);
    setErrorUser(errorUser);
  };
  const changeHandlerPassword = (event) => {
    setPassword(event.target.value);
    const errorPassword = PASSWORD_VALIDATION(event.target.value);
    setErrorPassword(errorPassword);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if ((name!=='') 
    && (email!=='')
    && (user!=='')
    && (password!=='')
    && (!Boolean(errorName)) 
    && (!Boolean(errorUser)) 
    && (!Boolean(errorEmail))
    && (!Boolean(errorPassword))) {location.replace("/")};
  };

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-warning bg-opacity-50 text-dark my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">User Register</h2>
              <p className="text-dark-50 mb-5">Please crate your account!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-dark' label='Name' id='name' type='txt' size="lg" value={name} onChange={changeHandlerName}/>
              {Boolean(errorName) && <p>{errorName}</p>}
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-dark' label='Email address' id='email' type='email' size="lg" value={email} onChange={changeHandlerEmail} />
              {Boolean(errorEmail) && <p>{errorEmail}</p>}
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-dark' label='User Name' id='user' type='txt' size="lg" value={user} onChange={changeHandlerUser}/>
              {Boolean(errorUser) && <p>{errorUser}</p>}
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-dark' label='Password' id='password' type='password' size="lg" value={password} onChange={changeHandlerPassword}/>
              {Boolean(errorPassword) && <p>{errorPassword}</p>}
              <button type="button" class="btn btn-outline-success mx-2 px-5" onClick={submitHandler}> Save </button>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default SignUpComponent;