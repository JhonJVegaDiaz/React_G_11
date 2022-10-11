import React from 'react';
import NavBarComponent from "../Navbar/NavbarRootPage";
import Footer from "../Footer/Footer";
import { Container } from 'react-bootstrap';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBRow,
  MDBCol
}
  from 'mdb-react-ui-kit';

const CrearOrdenComponent = () => {
  const submitHandler = (event) => {
    location.replace("/ordenes");
  };
  return (
    <>
      <Container className="lobbie-principal">
        <NavBarComponent className="navbar" />
      </Container>
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(InstaYa\media\bg.jpg)' }}>
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{ minxWidth: '600px', width: '70%' }}>
          <MDBBtn outline rounded color='warning' onClick={submitHandler} style={{ marginLeft: 'auto', marginRight: '5%', marginTop: '1.5em', marginBottom: '-3%', width: '100px' }}>
            guardar!
          </MDBBtn>
          <MDBCard className='m-5' style={{ minxWidth: '600px', width: '90%' }}>
            <MDBCardBody className='px-5'>
              <h5 style={{ paddingTop: '10px' }}>datos recogida:</h5><br></br>
              <MDBRow>
                <MDBCol>
                  <MDBInput wrapperClass='mb-4' label='hora' placeholder='23:00' id='form1' type='text' style={{ width: '65px' }} />
                </MDBCol>
                <MDBCol>
                  <MDBInput wrapperClass='datepicker mb-4' label='fecha' placeholder='01 / 01 / 2022' style={{ width: '125px' }} id='form2' type='text' />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='ciudad' placeholder='Ciudad' style={{ width: '200px' }} id='form3' type='text' />
                </MDBCol>
                <MDBCol></MDBCol>
                <MDBCol></MDBCol>
                <MDBCol></MDBCol>
              </MDBRow>
              <MDBInput wrapperClass='mb-4' label='dirección' id='form4' type='text' placeholder='Carrera 1a # 1b - 1' style={{ width: '400px' }} />
              <MDBRow>
                <MDBCol>
                  <MDBInput wrapperClass='mb-4' label='ancho(cm)' id='form5' type='text' />
                </MDBCol>
                <MDBCol>
                  <MDBInput wrapperClass='mb-4' label='alto(cm)' id='form6' type='text' />
                </MDBCol>
                <MDBCol>
                  <MDBInput wrapperClass='mb-4' label='largo(cm)' id='form7' type='text' />
                </MDBCol>
                <MDBCol>
                  <MDBInput wrapperClass='mb-4' label='peso(kl)' id='form8' type='text' />
                </MDBCol>
                <MDBCol>
                  <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='delicado' />
                </MDBCol>
                <MDBCol></MDBCol>
                <MDBCol></MDBCol>
              </MDBRow>
              <MDBInput wrapperClass='mb-4' label='nombre completo' id='form9' type='text' placeholder='Nombres y apellidos completos' style={{ width: '400px' }} />
              <MDBRow>
                <MDBCol>
                  <MDBInput wrapperClass='mb-4' label='identificación' placeholder='Cedúla' style={{ width: '125px' }} id='form10' type='text' />
                </MDBCol>
                <MDBCol>
                  <MDBInput wrapperClass='mb-4' label='número identificación' placeholder='1000000000' style={{ width: '200px' }} id='form11' type='text' />
                </MDBCol>
                <MDBCol></MDBCol>
                <MDBCol></MDBCol>
                <MDBCol></MDBCol>
              </MDBRow>
              <div style={{ border: 'solid', borderColor: 'black' }}></div><br />
              <h5>datos entrega:</h5><br></br>
              <MDBRow>
                <MDBCol>
                  <MDBInput wrapperClass='mb-4' label='dirección' id='form12' type='text' placeholder='Carrera 1a # 1b - 1' />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='ciudad' placeholder='Ciudad' id='form13' style={{ width: '200px' }} type='text' />
                </MDBCol>
              </MDBRow>
              <MDBInput wrapperClass='mb-4' label='nombre completo' id='form9' type='text' placeholder='Nombres y apellidos completos' style={{ width: '400px' }} />
              <MDBRow>
                <MDBCol>
                  <MDBInput wrapperClass='mb-4' label='identificación' placeholder='Cedúla' style={{ width: '125px' }} id='form10' type='text' />
                </MDBCol>
                <MDBCol>
                  <MDBInput wrapperClass='mb-4' label='número identificación' placeholder='1000000000' style={{ width: '200px' }} id='form11' type='text' />
                </MDBCol>
                <MDBCol></MDBCol>
                <MDBCol></MDBCol>
                <MDBCol></MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCard>
      </MDBContainer>
      <Container >
        <Footer />
      </Container>
    </>
  );
}

export default CrearOrdenComponent;