import React from 'react';
import { Navbar as BspNavbar, Nav, Container } from 'react-bootstrap';

export const Navigation: React.FC = () => {
    return (
        <BspNavbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                {/* Replace with your old Brand/Logo name */}
                <BspNavbar.Brand href="#home">Rhonda Goolsby</BspNavbar.Brand>

                <BspNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BspNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {/* Map these to your old navbar links */}
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </BspNavbar.Collapse>
            </Container>
        </BspNavbar>
    );
};