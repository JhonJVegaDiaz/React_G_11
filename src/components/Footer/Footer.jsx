import React from 'react';
import '../Footer/Footer.css'
import { Container } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagramSquare, FaGooglePlusSquare, FaWhatsappSquare} from 'react-icons/fa';
import { BsBoxSeam } from "react-icons/bs";

const Footer = () => (
  <footer className="footer">

    
    <Container style={{display: 'flex',  alignItems: 'center', justifyContent: 'space-evenly'}}>
      <div className='info-empresa' style={{width:'300px', marginLeft:'20px', marginTop:'25px', display: 'inline-block' }}>
        <h3 style={{fontSize: '18px'}}>{ <BsBoxSeam/> } Insta-YA</h3>
        <h3 style={{fontSize: '14px'}}>El mundo a tu alcance al instante.</h3>
        <h3 style={{fontSize: '14px', display: 'inline-block' }} >MisionTic 2022.</h3>
        <h3 style={{fontSize: '14px' ,display: 'inline-block' }}>Equipo 11 NRC 2117.</h3>
        <h3 style={{fontSize: '14px' }}>Uninorte.</h3>


        
      </div >

      <div className='politicas' style={{width:'200px', marginLeft:'10px', marginTop:'50px', marginBottom:'30px', display: 'inline-block' }}>
        <h3 style={{fontSize: '14px'}}>Privacity Policy</h3>
      </div>

      <div className='redes' style={{width:'200px', marginLeft:'20px', marginTop:'50px', marginBottom:'30px', display: 'inline-block' }}>
        <a style={{display:'inline-block', marginRight:'10px'}}>{<FaFacebookSquare size={'2.5rem'} color={'#fdfd80'} href="https://www.facebook.com/login/"/>}</a>
        <a style={{display:'inline-block', marginRight:'10px'}}>{<FaInstagramSquare size={'2.5rem'} color={'#fdfd80'} href="https://www.instagram.com/"/>}</a>
        <a style={{display:'inline-block', marginRight:'10px'}}>{<FaWhatsappSquare size={'2.5rem'} color={'#fdfd80'} href="#"/>}</a>
        <a style={{display:'inline-block', marginRight:'10px'}}>{<FaGooglePlusSquare size={'2.5rem'} color={'#fdfd80'} href="https://www.google.com/"/>}</a>
      </div>
    </Container>
  </footer>
);

export default Footer;