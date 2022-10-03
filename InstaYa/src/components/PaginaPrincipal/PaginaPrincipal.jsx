import React from "react";
import Cards from "./Cards";
import NavBarComponent from "../Navbar/NavbarRootPage";
import Footer from "../Footer/Footer";
import Lobbie from "../LobbiePresentation/ImagenPrincipal";
import { Container } from 'react-bootstrap';




function PaginaPrincipal() {

    return (
        <>
            <Container className="lobbie-principal">
                <NavBarComponent className="navbar" />
                <Lobbie className="imagen-principal" />
            </Container>
            <Container >

                <div className="cards-container-cards" style={{ display: 'inline-block' }}>
                <Cards 
                    className="service-insta"
                    imgCards = "src\assets\img\logistic3.webp" 
                    titleCards = "Soluciones al instante"
                    infoCards = "Toda clase de envío a nivel nacional e internacional."
                    />
                </div>
                <div className="cards-container-cards" style={{ display: 'inline-block' }}>
                <Cards 
                    className="service-insta"
                    imgCards = "src\assets\img\dron-envios.webp"
                    titleCards = "Tecnología a tu servicio"
                    infoCards = "Lo último en tecnología e innovación para garantizar la entrega de sus paquetes y su satisfacción"
                    />
                </div>
                <div className="cards-container-cards" style={{ display: 'inline-block' }}>
                    <Cards 
                    className="service-insta"
                    imgCards = "/src/assets/img/logistic.webp" 
                    titleCards = "Conoce nuestra trayectoría"
                    infoCards = "Decadas de experiencia en logística para garantizar nuestros servicios."
                    />
                </div>

            </Container>
            <Container >
                <Footer />
            </Container>
        </>

    );
}

export default PaginaPrincipal;