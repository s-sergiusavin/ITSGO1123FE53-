// src/App.js
import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import AboutMe from './components/NavBar/AboutMe';
import Contact from './components/NavBar/Contact';
import NotFound from './pages/notFound';


function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage></HomePage>} />
          <Route path="/about" element={<AboutMe></AboutMe>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route element={<NotFound></NotFound>} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
