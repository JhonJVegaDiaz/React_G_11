import React from "react";
import { Card, Button, Container } from 'react-bootstrap';


function CardService() {
    return (
        <Container >
            <Card style={{ width: '300px', height: '300px', margin: '50px' }}>
                <Card.Img whith= "80%" variant="top" src="src\assets\img\logistic3.jfif" />
                <Card.Body>
                    <Card.Title>Soluciones al instante. Documentos y Paquetes</Card.Title>
                    <Card.Text style={{color: '#ddbd18'}}>
                        Nacional e Internacional
                    </Card.Text>
                    <Button variant="secondary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>

    );

}
export default CardService;



