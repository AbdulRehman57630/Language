// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Videos from "./pages/Videos";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import { Reads } from './pages/Reads';
import Aichat from './pages/Aichat';
import Courses from './components/Courses';


const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br dark:bg-gray-900  dark:text-white transition-colors duration-300">
      <Router>
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/video" element={<Videos />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/read" element={<Reads />} />
          <Route path="/ai-chat" element={<Aichat />} />
          <Route path="/corses" element={<Courses />} />
        
          {/* ✅ NEW route */}
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
};

export default App;
