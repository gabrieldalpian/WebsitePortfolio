import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import About from './components/About';
import ExperienceAndEducation from './components/ExperienceAndEducation';
import Contact from './components/Contact'; 
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div>
      <CustomNavbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ExperienceAndEducation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;