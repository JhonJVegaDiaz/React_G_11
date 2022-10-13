import React from "react";
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import './NavbarRootPage.css'
import logo from '../../assets/img/icon-logo.jpg';


function NavBarComponent() {
    // const logo = require.context('../../assets/img/icon-logo.jpg', true);
    return (
        <>

            {[true].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container className="navbar-container" >
                        <Navbar.Brand style={{ width: '600px', height:'150px' }} href="/" >
                            <img src={logo} style={{ width: '30%', marginTop: '20px'}} alt="Imagen-Logo">
                            </img>
                            <h1 style={{ fontSize: '50px', fontFamily: 'Lato', display: 'inline-block', padding: '10px', marginLeft: '15px', marginTop:'30px' }}> Insta-YA</h1>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Insta_YA
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <NavDropdown
                                        title="Login"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="/Login">User login</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/">Exit</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="/ordenes">Ver ordenes</Nav.Link>
                                    <Nav.Link href="/crearOrden">Solicitar servicio</Nav.Link>
                                    <Nav.Link href="/signup">Crear usuario</Nav.Link>
                                    <Navbar.Text>
                                        <p className="signed-navbar">
                                            Signed:
                                        </p>
                                        <a className="login-navbar" href="/ordenes">Insta-YA</a>
                                    </Navbar.Text>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>

                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            ))
            }
        </>
    )
}

export default NavBarComponent;