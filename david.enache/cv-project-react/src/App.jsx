import React from 'react';
// import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';

import HomePage from './pages/Home/HomePage';
import AboutMe from './components/NavBar/AboutMe';
import Contact from './components/NavBar/Contact';
import NotFound from './pages/notFound';
import Home from './components/NavBar/Home'
import Layout from './components/Layout';
// import AnimatedElement from './pages/Home/AnimatedElement'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/" element={<HomePage/>} */}
        <Route element={<NotFound />} />
        
     
      </Routes>
  <Layout></Layout>
    </>
  );
}

export default App;
