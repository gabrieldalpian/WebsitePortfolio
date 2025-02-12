import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll'; 

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" style={{backgroundColor:"gray"}}>
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center"> 
          <Nav className="mx-auto"> 
            <Link to="home" smooth={true} duration={500} className="nav-link" style={{ color: "white", fontSize:"1.5em", marginRight:"30px", cursor:"pointer", }}>Home</Link>
            <Link to="about" smooth={true} duration={500} className="nav-link" style={{ color: "white", fontSize:"1.5em", marginRight:"30px", cursor:"pointer" }}>About Me</Link>
            <Link to="Skills" smooth={true} duration={500} className="nav-link" style={{ color: "white", fontSize:"1.5em", marginRight:"30px", cursor:"pointer" }}>Skills</Link>
            <Link to="Projects" smooth={true} duration={500} className="nav-link" style={{ color: "white", fontSize:"1.5em", marginRight:"30px", cursor:"pointer" }}>Projects</Link>
            <Link to="Resume" smooth={true} duration={500} className="nav-link" style={{ color: "white", fontSize:"1.5em", marginRight:"30px", cursor:"pointer" }}>Resume</Link>
            <Link to="contact" smooth={true} duration={500} className="nav-link" style={{ color: "white", fontSize:"1.5em", marginRight:"30px", cursor:"pointer" }}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;