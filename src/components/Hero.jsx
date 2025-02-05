import React from 'react';
import adityaImage from "../images/aditya_baniya.jpg";
import { TypeAnimation } from 'react-type-animation';
import '../styles/Hero.css';

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
            "", 2000, 
            "Full Stack Web Developer...", 1500,
            "", 2000,
            "React Developer...", 1500,
            "", 2000,
            "Tech Enthusiast...", 1500,
            "", 2000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="animated-text"
        />
      </div>
      <div className="image-container">
        <img src={adityaImage} alt="Aaditya Baniya" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
