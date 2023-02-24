import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Pages/Home';


function AnimatedRoutes() {
  const location =  useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;