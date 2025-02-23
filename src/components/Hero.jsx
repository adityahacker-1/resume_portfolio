import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Hero.css';
import profileImage from '../images/design.png'; // Replace with your actual image path

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi,</h1>
        <h1>
          I'm <span className="highlight">Aaditya Baniya...</span>
        </h1>
        <TypeAnimation
          sequence={[
            "Python Developer...", 1500, 
            "Full Stack Web Developer...", 1500,
            "React Developer...", 1500,
            "Tech Enthusiast...", 1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="animated-text"
        />
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Aaditya Baniya" />
      </div>
    </section>
  );
};

export default Hero;
