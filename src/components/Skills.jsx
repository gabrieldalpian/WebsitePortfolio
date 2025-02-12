import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaReact, FaJs, FaPython, FaDatabase, FaJava, FaPhp } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";

const Skills = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4" style={{ fontSize: "4.5em", color: "white", marginTop: "250px" }}>Skills</h2>
            <div className="row" style={{ marginTop: "70px" }}>
        <div className="col-md-3 mb-3">
        <div className="card text-center p-3">
            <div className="icon-wrapper">
                <FaJs className="text-warning display-4" />
            </div>
            <h5 className="mt-2">JavaScript</h5>
        </div>
        </div>
            <div className="col-md-3 mb-3">
                <div className="card text-center p-3">
                    <div className="icon-wrapper">
                <FaPython className="text-info display-4" />
            </div>
            <h5 className="mt-2">Python</h5>
        </div>
        </div>
        <div className="col-md-3 mb-3">
            <div className="card text-center p-3">
            <div className="icon-wrapper">
                <FaJava className="text-danger display-4" />
            </div>
            <h5 className="mt-2">Java</h5>
        </div>
        </div>
            <div className="col-md-3 mb-3">
                <div className="card text-center p-3">
                <div className="icon-wrapper">
                    <FaDatabase className="text-dark display-4" />
                </div>
                <h5 className="mt-2">SQL</h5>
            </div>
        </div>
        <div className="col-md-3 mb-3">
        <div className="card text-center p-3">
            <div className="icon-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" className="icon-img" style={{ maxWidth: "60px", display: "block", margin: "0 auto" }} />
            </div>
            <h5 className="mt-2">HTML5</h5>
        </div>
        </div>
        <div className="col-md-3 mb-3">
            <div className="card text-center p-3">
                <div className="icon-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"    className="icon-img" style={{ maxWidth: "60px", height: "auto", display: "block", margin: "0 auto" }} />
            </div>
            <h5 className="mt-2">CSS</h5>
        </div>
        </div>
            <div className="col-md-3 mb-3">
                <div className="card text-center p-3">
                    <div className="icon-wrapper">
                        <FaPhp className="text-primary display-4" />
                    </div>
                <h5 className="mt-2">PHP</h5>
                </div>
        </div>
        <div className="col-md-3 mb-3">
            <div className="card text-center p-3">
                <div className="icon-wrapper">
                    <FaReact className="text-primary display-4" />
                </div>
            <h5 className="mt-2">React</h5>
            </div>
        </div>
        <div className="col-md-3 mb-3">
            <div className="card text-center p-3">
                <div className="icon-wrapper">
                    <SiBootstrap className="text-secondary display-4" />
                </div>
                <h5 className="mt-2">Bootstrap</h5>
            </div>
        </div>
            <div className="col-md-3 mb-3">
                <div className="card text-center p-3">
                    <div className="icon-wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" className="icon-img" style={{ maxWidth: "47px", height: "auto", display: "block", margin: "0 auto" }} />
                </div>
                <h5 className="mt-2">Linux</h5>
            </div>
        </div>
    </div>
</div>
    );
};

export default Skills;