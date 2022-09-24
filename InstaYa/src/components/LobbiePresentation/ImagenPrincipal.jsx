import React from 'react';
import { Card } from 'react-bootstrap';
import './ImagenPrincipal.css';

function Lobbie() {
    return (    
        <>
            <div className='imagen-principal-container'>
            <Card.Img
                style={{ width: '50rem' }} 
                src='src\assets\img\ImagenPrincipal.webp'
                alt={'Imagen de presentacion de Insta-YA en página principal'}
            />
            </div>

        </>
    );
}

export default Lobbie;