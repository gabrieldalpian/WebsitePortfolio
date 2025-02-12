import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll'; 

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" style={{backgroundColor: "rgba(0, 0, 0, 0.5)",padding: "1em"}}>
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center"> 
          <Nav className="mx-auto"> 
            <Link to="home" smooth={true} duration={500} className="nav-link" style={{ color: "white", fontSize:"1.2em", marginRight:"20px", cursor:"pointer",fontWeight:"bold" }}>Home</Link>
            <Link to="about" smooth={true} duration={500} className="nav-link" style={{ color: "white", fontSize:"1.2em", marginRight:"20px", cursor:"pointer",fontWeight:"bold" }}>About Me</Link>
            <Link to="text-center mb-4" smooth={true} duration={500} className="nav-link" style={{ color: "white", fontSize:"1.2em", marginRight:"20px", cursor:"pointer",fontWeight:"bold" }}>Skills</Link>
            <Link to="projects-container" smooth={true} duration={500} className="nav-link" style={{ color: "white", fontSize:"1.2em", marginRight:"20px", cursor:"pointer",fontWeight:"bold" }}>Projects</Link>
            <Link to="Exp" smooth={true} duration={500} className="nav-link" style={{ color: "white", fontSize:"1.2em", marginRight:"20px", cursor:"pointer",fontWeight:"bold" }}>Education & Experience</Link>
            <Link to="info" smooth={true} duration={500} className="nav-link" style={{ color: "white", fontSize:"1.2em", marginRight:"20px", cursor:"pointer",fontWeight:"bold" }}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;