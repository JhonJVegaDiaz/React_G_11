import React from "react";
import { Card, Container } from 'react-bootstrap';


const Cards = ({ 
    className,
    imgCards, 
    titleCards, 
    infoCards 
}) => {
    return (
        <Container >
            <Card style={{  width: '300px', height: '300px', margin: '50px'}}>
                <Card.Img className = {` ${className} `}variant="top" src={ `${ imgCards }`} />
                <Card.Body>
                    <Card.Title>
                        { titleCards }
                    </Card.Title>
                    <Card.Text style={{color: '#ddbd18'}}>
                        { infoCards}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Cards;