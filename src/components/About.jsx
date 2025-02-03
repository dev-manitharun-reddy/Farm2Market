import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About Us</h2>
        <div className="about-content">
          <div className="column left">
            <img
              src="https://ik.imagekit.io/manitharunreddy/inizio-farm.jpg?updatedAt=1730784000115"
              alt="img"
            />
          </div>
          <div className="column right">
            <div className="text">Growing Goodness.</div>
            <p>
              Welcome to INIZIO FARMS, where our passion for agriculture and commitment to quality come together to bring you the finest vegetables...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;