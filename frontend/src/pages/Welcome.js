// Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Welcome.css';
import logo from '../assets/logo.svg'; // Corrected SVG import

function Welcome() {
  return (

    
    <div className="welcome">
      <img src={logo} alt="Logo" className="logo" />

      <p>Searching for tasty, high-protein dishes that you can make with the things you already own? You're in the right place!</p>
      
      <Link to="/make-recipe">Get Started</Link>
    </div>



  );
}

export default Welcome;
