import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="vh-100 d-flex align-items-center">
      <Container>
        <Card className="text-center bg-transparent border-0 text-white">
          <Card.Body>
          <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ fontSize: "5rem", fontWeight: "bold" }}
            >
              My friends call me Gabe!
            </motion.h1>
            <p style={{ display: "flex", justifyContent: "center", alignItems: "left", gap: "10px", paddingRight:"300px", fontSize:"3em", marginTop:"30px"}}>
              I'm a{" "}
              <span style={{ color: "black" }}>
                <Typewriter 
                  options={{
                    strings: ["Software Engineer.", "Web Developer.", "Tech Student."],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </p>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Home;