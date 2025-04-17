import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const GetInTouch = () => {
  return (
    <section id="info">
      <div style={{ textAlign: 'center',padding: '40px 20px', fontFamily: 'Arial, sans-serif', color: 'white',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
        <h1 className="contact-heading"style={{fontSize: '4em',marginBottom: '50px',animation: 'fadeIn 2s ease-in-out',}}>
          Contact 
        </h1>

        <div style={{background: 'rgba(255, 255, 255, 0.1)',padding: '15px 25px',borderRadius: '12px',display: 'flex',alignItems: 'center',justifyContent: 'center',gap: '15px',animation: 'slideIn 1s ease-in-out',backdropFilter: 'blur(5px)',}}>
          <span style={{ fontSize: '1.5em', color: 'white' }}>
            <FaPhone />
          </span>
          <a href="tel:+1551-339-2508"style={{color: 'white',textDecoration: 'none',fontSize: '1.5em',transition: 'color 0.3s ease',}}>
            +1 (551) 339-2508
          </a>
        </div>

        <div style={{background: 'rgba(255, 255, 255, 0.1)',padding: '15px 25px',borderRadius: '12px',display: 'flex',alignItems: 'center',justifyContent: 'center',gap: '15px',marginTop: '20px',animation: 'slideIn 1s ease-in-out',backdropFilter: 'blur(5px)',}}>
          <span style={{ fontSize: '1.5em', color: 'white' }}>
            <FaEnvelope />
          </span>
          <a href="mailto:gabrieldalpian1227@gmail.com"style={{color: 'white',textDecoration: 'none',fontSize: '1.5em',transition: 'color 0.3s ease',}}>
            gdd@njit.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;