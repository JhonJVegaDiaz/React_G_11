import React from "react";
import { Card, Button, Container } from 'react-bootstrap';



function CardTech() {
    return (
        <Container >
            <Card style={{ width: '300px', height: '300px', margin: '50px' }}>
                <Card.Img variant="top" src="src\assets\img\dron-envios.webp" />
                <Card.Body>
                    <Card.Title>La tecnología a tu servicio</Card.Title>
                    <Card.Text style={{color: '#ddbd18'}}>
                        Lo último en tecnología para garantizar la entrega de tus paquetes.
                    </Card.Text>
                    <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>

    );

}
export default CardTech;