import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Research from './pages/Research';
import Facilities from './pages/Facilities';
import People from './pages/People';
import Publications from './pages/Publications';
import Gallery from './pages/Gallery';
import Opportunities from './pages/Opportunities';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/people" element={<People />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
