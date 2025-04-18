import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import cryptoImg from "../assets/bit&eth.png";
import weatherImg from "../assets/weatherImage.png";
import ecommerceImg from "../assets/e-commerce.jpg.png";
import chat from "../assets/just.jpg";

const projects = [
  {
    title: "E-commerce Store",
    description: "Developed a fully functional e-commerce platform using ReactJS for purchasing soccer jerseys. Implemented a shopping cart using React hooks. Designed a responsive layout for an amazing user experience.",
    image: ecommerceImg,
    link: "https://jersey-shop-git-main-gabrieldalpians-projects.vercel.app",
    github: "https://github.com/gabrieldalpian/JerseyShop",
    isEcommerce: true,
  },
  {
    title: "Crypto Price Tracker",
    description: "Developed a Python-based crypto tracker that fetches and stores real-time Bitcoin and Ethereum prices via API. Built an SQLite3 backend for automated updates every 10 minutes and a PHP web interface to display live data.",
    image: cryptoImg,
    github: "https://github.com/gabrieldalpian/CryptoPriceTracker",
  },
  {
    title: "Banking System",
    description: "Developed a Java banking system with account creation, deposits, withdrawals, transfers, interest application for savings accounts, and transaction history tracking.",
    image: chat,
    github: "https://github.com/gabrieldalpian/BankAccount",
  },
  {
    title: "Weather App",
    description: "Built a JavaScript weather app that fetches and displays real-time city weather using the OpenWeatherMap API.",
    image: weatherImg,
    github: "https://github.com/gabrieldalpian/weather.api",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="text-center" style={{ fontSize: "4.5em", color: "white", marginTop: "200px" }}>
        Projects
      </h2>
      {projects.map((project, index) => (
        <div key={index} className={`project-item ${index % 2 === 0 ? "left" : "right"}`} 
        style={{ backgroundColor: "#f0f0f0", borderRadius: "15px", padding: "20px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", outline: "3px solid white", outlineOffset: "3px",marginTop: index === 0 ? "100px" : "20px"}}>
          <div className="project-image-wrapper">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-image" style={{ border: "3px solid black", outline: "0.5px solid black", outlineOffset: "1px" }} />
            </a>
          </div>
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.isEcommerce ? (
              <>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" style={{ color: "white", backgroundColor: "green", padding: "10px", borderRadius: "5px", textDecoration: "none", outlineOffset: "1px", outline: "2px solid green"}}>
                  Website Link
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" style={{ color: "white", backgroundColor: "#00bcd4", padding: "10px", borderRadius: "5px", textDecoration: "none", marginLeft: "10px",outlineOffset: "1px", outline: "2px solid #00bcd4" }}>
                  GitHub
                </a>
              </>
            ) : (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" style={{ color: "white", backgroundColor: "#00bcd4", padding: "10px", borderRadius: "5px", textDecoration: "none", outlineOffset: "1px", outline: "2px solid #00bcd4" }}>
                GitHub
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;