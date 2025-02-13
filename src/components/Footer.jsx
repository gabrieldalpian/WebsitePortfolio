import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer 
      className="text-white text-center py-3" 
      style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', marginTop: '80px', position: 'relative',height:'100px'}}
    >
      <Container>
        <div className='ktp' style={{marginTop:"20px"}}>
        <p>&copy; 2025 Gabriel Dalpian De Castilhos Pedro</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;