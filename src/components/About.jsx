import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaFireAlt, FaMapSigns, FaBowlingBall } from 'react-icons/fa';
import { PiSoccerBallFill } from "react-icons/pi";
import Img6687 from '../assets/profilePic.jpg';

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
            className="custom-image"
            style={{objectFit: "cover", objectPosition: "top", width:"800px",height:"600px",borderRadius: "10px", marginTop:"100px",border: "0.5px solid white", outline: "3px solid white", outlineOffset: "3px",marginLeft:"60px"}}/>
          </Col>
          <Col md={6}>
            <div className="custom-text">
            <div style={{ color: "black", textAlign: "center", fontSize: "1.5rem", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6", marginTop:"-430px", fontFamily: "'Space Grotesk', sans-serif",fontWeight: "600",backgroundColor: "#f0f0f0", borderRadius: "15px", padding: "20px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", outline: "3px solid white", outlineOffset: "3px"

 }}>
              Hello, I&apos;m Gabriel. I&apos;m currently a Student at the New Jersey Institute of Technology. I will be graduating in December 2026 with a Bachelors of Science in Information Technology. I have had a passion for problem-solving and creating, which I plan to pursue as a career being a Software Engineer. Some of my hobbies include.
            </div>
            </div>
            <div className="hobbies" style={{ textAlign: "center", fontSize: "1.5rem", marginTop: "20px",color:"white" }}>
              <b>SPORTS | BBQ | ESCAPE ROOM | BOWLING</b>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <PiSoccerBallFill size={50} style={{ margin: "0 15px", color: "white" }} />
              <FaFireAlt size={40} style={{ margin: "0 15px", color: "white" }} />
              <FaMapSigns size={40} style={{ margin: "0 15px", color: "white" }} />
              <FaBowlingBall size={40} style={{ margin: "0 15px", color: "white" }} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
