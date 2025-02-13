import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaFireAlt, FaMapSigns, FaBowlingBall } from 'react-icons/fa';
import { PiSoccerBallFill } from "react-icons/pi";
import Img6687 from '../assets/IMG_6687-3.jpeg';


const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 style={{ textAlign: "center", justifyContent: "center", fontSize: "4em", marginBottom:"340px", color:"white" }}><b>About Me</b></h2>
          </Col>
          <Col md={5}>
            <Image
              src={Img6687}
              fluid
              style={{
                objectFit: "cover", 
                objectPosition: "top", 
                width:"800px",
                height:"600px",
                borderRadius: "10px", 
                marginTop:"100px",
                border: "0.5px solid white", 
                outline: "3px solid white", 
                outlineOffset: "3px"
              }}
            />
          </Col>
          <Col md={6}>
            <div style={{ color: "white", textAlign: "center", fontSize: "1.5rem", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6", marginTop:"-430px" }}>
              Hello, I&apos;m Gabriel. I&apos;m currently a Student at the New Jersey Institute of Technology. I will be graduating in September 2026 with a Bachelors of Science in Information Technology. I have had a passion for problem-solving and creating, which I plan to pursue as a career being a Software Engineer. Some of my hobbies include.
            </div>
            <div className="hobbies" style={{ textAlign: "center", fontSize: "1.5rem", marginTop: "20px",color:"white" }}>
              <b>SPORTS | BBQ | ESCAPE ROOM | BOWLING</b>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <PiSoccerBallFill size={50} style={{ margin: "0 15px", color: "black" }} />
              <FaFireAlt size={40} style={{ margin: "0 15px", color: "black" }} />
              <FaMapSigns size={40} style={{ margin: "0 15px", color: "black" }} />
              <FaBowlingBall size={40} style={{ margin: "0 15px", color: "black" }} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
