import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section id="home" className="vh-100 d-flex align-items-center">
      <Container>
        <Card className="text-center bg-transparent border-0 text-white">
          <Card.Body>
            <h1 style={{ fontSize: "5rem", fontWeight: "bold" }}> 
              My friends call me Gabe!
            </h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "left", gap: "10px", paddingRight:"300px", fontSize:"3em", marginTop:"30px"}}>
              I'm a{" "}
              <span style={{ color: "black", fontWeight:"bold" }}>
                <Typewriter 
                  options={{
                    strings: ["Software Engineer.", "Web Developer.", "Tech Student."],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Home;