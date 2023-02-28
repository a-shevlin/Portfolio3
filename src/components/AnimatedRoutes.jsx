import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Nav from './Nav';
import Projects from '../Pages/Projects';


function AnimatedRoutes() {
  const location =  useLocation();
  return (
    <AnimatePresence>
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;