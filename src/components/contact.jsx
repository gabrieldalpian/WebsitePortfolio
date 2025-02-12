import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Using react-icons for icons

const Contact = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '40px 20px',
        fontFamily: 'Arial, sans-serif',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '4em',
          marginBottom: '50px',
          animation: 'fadeIn 2s ease-in-out',
        }}
      >
        CONTACT
      </h1>
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          animation: 'slideIn 1s ease-in-out',
        }}
      >
        <span style={{ fontSize: '1.5em' }}>
          <FaPhone />
        </span>
        <a
          href="tel:+1551-339-2508"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.5em',
            transition: 'color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.color = '#ffdd57')}
          onMouseOut={(e) => (e.target.style.color = 'white')}
        >
          +1 551-339-2508
        </a>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          animation: 'slideIn 1s ease-in-out',
        }}
      >
        <span style={{ fontSize: '1.5em' }}>
          <FaEnvelope />
        </span>
        <a
          href="mailto:gabrieldalpian1227@gmail.com"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.5em',
            transition: 'color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.color = '#ffdd57')}
          onMouseOut={(e) => (e.target.style.color = 'white')}
        >
          gabrieldalpian1227@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;