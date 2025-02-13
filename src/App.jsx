import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CustomNavbar from './components/CustomNavBar';
import Home from './components/Home';
import About from './components/About';
import ExperienceAndEducation from './components/ExperienceAndEducation';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';
import GetInTouch from './components/GetInTouch';

function App() {
  return (
    <div>
      <CustomNavbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ExperienceAndEducation />
      <GetInTouch />  
      <Footer />
    </div>
  );
}

export default App;