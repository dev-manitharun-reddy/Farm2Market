import React from 'react';
// import './Footer.css';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <h2><span className="typing-3">Connect with me on @iniziofarms@gmail.com</span></h2>
      <ul id="media">
        <li style={{ '--clr': '#0011ff' }}>
          <a href="https://www.facebook.com/profile.php?id=61568353955971" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li style={{ '--clr': '#4506f0' }}>
          <a href="https://twitter.com/HimalPu94127169" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li style={{ '--clr': '#e73f0c' }}>
          <a href="https://www.instagram.com/inizio_farms/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li style={{ '--clr': '#04c214' }}>
          <a href="https://wa.me/6300618634" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </li>
      </ul>
      <p>
        &copy; 2023-2024 <a href="https://www.linkedin.com/in/manitharun-reddy-thallapureddy-634702213/" target="_blank" rel="noopener noreferrer">dev-mtr</a> | All Rights Reserved |
      </p>
    </footer>
  );
};

export default Footer;