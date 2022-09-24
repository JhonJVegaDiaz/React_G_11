import React from "react";
import CardService from "./CardService";
import CardTech from "./CardTech";
import CardInsta from "./CardInsta";
import NavBarComponent from "../Navbar/NavbarRootPage";
import Footer from "../Footer/Footer";
import Lobbie from "../LobbiePresentation/ImagenPrincipal";
import { Container } from 'react-bootstrap';
import './PaginaPrincipal.css';



function PaginaPrincipal() {

    return (
        <>
            <Container className="lobbie-principal">
                <NavBarComponent className="navbar" />
                <Lobbie className="imagen-principal" />
            </Container>
            <Container >

                <div className="cards-container-cards" style={{ display: 'inline-block' }}>
                    <CardService className="service-service" />
                </div>
                <div className="cards-container-cards" style={{ display: 'inline-block' }}>
                    <CardTech className="service-tech" />
                </div>
                <div className="cards-container-cards" style={{ display: 'inline-block' }}>
                    <CardInsta className="service-insta" />
                </div>

            </Container>
            <Container >
                <Footer />
            </Container>
        </>

    );
}

export default PaginaPrincipal;