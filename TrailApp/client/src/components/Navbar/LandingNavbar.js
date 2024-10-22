// Import React components
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import styling & header logo
import '../../interfaceSettings.css';
import GwinnettLogo from '../../assets/images/gwinnett.png';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';


const LandingNavbar = () => {

    // State to handle mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
    };

    // HTML/JSX web page
    // TODO: Redesign page with necessary links for unsigned-in users. Remove extraneous hyperlinks.
    return (
        <Navbar expand={false} className="navbar-custom mb-3">
            <Container fluid>
                <Navbar.Brand href="#" className="d-flex align-items-center">
                    <img src={GwinnettLogo} alt="Gwinnett Logo" className="logo me-2" />
                    <span className="heading-gradient">WALKING TRAILS</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="offcanvas-navbar" />
                <Navbar.Offcanvas id="offcanvas-navbar" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/privacy">Privacy</Nav.Link>
                            <Nav.Link href="/authorization">Log in</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default LandingNavbar;