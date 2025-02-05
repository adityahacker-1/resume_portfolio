import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/About.css';
import adityaImage from "../images/aditya_baniya.jpg";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <section id="about" className={`about ${inView ? 'slide-up' : 'slide-down'}`} ref={ref}>
      <h2>About Me</h2>
      <div className="image-container">
        <img src={adityaImage} alt="Aaditya Baniya" className="aditya-image" />
      </div>
      <div className="about-content">
        <p>I am a sophomore UNDERGRADUTE RESEARCH ASSISTANT student at Texas State University, pursuing a Bachelor's degree in Computer Science with a minor in Mathematics. </p>
        <br />
        <p>Throughout my university studies, I have developed a strong proficiency in Full Stack Web Development, working extensively with Python for backend development, React for building dynamic user interfaces, and SQL for managing databases. This experience has allowed me to design, implement, and optimize web applications efficiently.</p>
        <br />
        <p>Engaging in research on Deep Learning and Computer Vision has provided me with a deep understanding of neural networks and the process of training AI models. Through this experience, I have gained hands-on expertise in designing, optimizing, and implementing machine learning algorithms for various applications.</p>
        <br />
        <p><b> My Strength: Python, Flask, OpenCV, Mediapipe, React, SQL</b></p>
      </div>
    </section>
  );
};

export default About;
