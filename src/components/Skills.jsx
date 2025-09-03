import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaReact, FaJs, FaPython, FaDatabase, FaJava, FaPhp } from "react-icons/fa";
import { SiBootstrap, SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ fontSize: "4.5em", color: "white", marginTop: "250px" }}>Skills</h2>
      <div className="row" style={{ marginTop: "70px" }}>
        {/* JavaScript */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <FaJs className="text-warning display-4" />
            </div>
            <h5 className="mt-2">JavaScript</h5>
          </div>
        </div>

        {/* Python */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <FaPython className="text-info display-4" />
            </div>
            <h5 className="mt-2">Python</h5>
          </div>
        </div>

        {/* Java */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <FaJava className="text-danger display-4" />
            </div>
            <h5 className="mt-2">Java</h5>
          </div>
        </div>

        {/* Kotlin */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" className="icon-img" style={{ maxWidth: "50px", margin: "0 auto" }} />
            </div>
            <h5 className="mt-2">Kotlin</h5>
          </div>
        </div>

        {/* Spring Boot */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg" className="icon-img" style={{ maxWidth: "60px", margin: "0 auto" }} />
            </div>
            <h5 className="mt-2">Spring Boot</h5>
          </div>
        </div>

        {/* SQL */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <FaDatabase className="text-dark display-4" />
            </div>
            <h5 className="mt-2">SQL</h5>
          </div>
        </div>

        {/* HTML */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" className="icon-img" style={{ maxWidth: "60px", margin: "0 auto" }} />
            </div>
            <h5 className="mt-2">HTML5</h5>
          </div>
        </div>

        {/* CSS */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" className="icon-img" style={{ maxWidth: "60px", margin: "0 auto" }} />
            </div>
            <h5 className="mt-2">CSS</h5>
          </div>
        </div>

        {/* PHP */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <FaPhp className="text-primary display-4" />
            </div>
            <h5 className="mt-2">PHP</h5>
          </div>
        </div>

        {/* React */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <FaReact className="text-primary display-4" />
            </div>
            <h5 className="mt-2">React</h5>
          </div>
        </div>

        {/* Angular */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <SiAngular className="text-danger display-4" />
            </div>
            <h5 className="mt-2">Angular</h5>
          </div>
        </div>

        {/* TypeScript */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <SiTypescript className="text-info display-4" />
            </div>
            <h5 className="mt-2">TypeScript</h5>
          </div>
        </div>

        {/* Next.js */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <SiNextdotjs className="text-dark display-4" />
            </div>
            <h5 className="mt-2">Next.js</h5>
          </div>
        </div>

        {/* Tailwind CSS */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <SiTailwindcss className="text-blue-400 display-4" />
            </div>
            <h5 className="mt-2">Tailwind CSS</h5>
          </div>
        </div>

        {/* Bootstrap */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <SiBootstrap className="text-secondary display-4" />
            </div>
            <h5 className="mt-2">Bootstrap</h5>
          </div>
        </div>

        {/* Linux */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" className="icon-img" style={{ maxWidth: "47px", margin: "0 auto" }} />
            </div>
            <h5 className="mt-2">Linux</h5>
          </div>
        </div>

        {/* PostgreSQL */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" className="icon-img" style={{ maxWidth: "60px", margin: "0 auto" }} />
            </div>
            <h5 className="mt-2">PostgreSQL</h5>
          </div>
        </div>

        {/* MongoDB */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <img src="https://webimages.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png"className="icon-img" style={{ maxWidth: "60px", margin: "0 auto" }} />
            </div>
            <h5 className="mt-2">MongoDB</h5>
          </div>
        </div>

        {/* AWS */}
        <div className="col-md-3 mb-3">
          <div className="card text-center p-3">
            <div className="icon-wrapper">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" className="icon-img" style={{ maxWidth: "60px", margin: "0 auto" }} />
            </div>
            <h5 className="mt-2">AWS</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;