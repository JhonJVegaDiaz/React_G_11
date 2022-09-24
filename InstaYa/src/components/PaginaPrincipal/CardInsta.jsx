import React from "react";
import { Card, Button, Container } from 'react-bootstrap';


function CardInsta() {
    return (
        <Container >
            <Card style={{ width: '320px', height: '300px', margin: '50px', padding:'20px'}}>
                <Card.Img variant="top" src="src\assets\img\logistic.webp" />
                <Card.Body>
                    <Card.Title>Conoce nuestra trayectoría</Card.Title>
                    <Card.Text style={{color: '#ddbd18'}}>
                        Decadas de experiencia en logística para garantizar nuestros servicios.
                    </Card.Text>
                    <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>

    );

}
export default CardInsta;