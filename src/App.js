import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Home from './components/Home';
import ContactMe from './components/ContactMe';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/Home" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ContactMe" element={<ContactMe />} />
        
       
      </Routes>
    </Router>
  );
}

export default App;
