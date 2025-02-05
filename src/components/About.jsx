import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <section id="about" className={`about ${inView ? 'slide-up' : 'slide-down'}`} ref={ref}>
      <h2>About Me</h2>
      <div className="about-content">
        <p>I am a sophomore undergraduate research assistant at Texas State University, pursuing a Bachelor's degree in Computer Science with a minor in Mathematics. My expertise includes:</p>
        <ul className="about-list">
          <li>Full-stack web development 
            <ul>
                <li>React (frontend)</li>
                <li>Flask (backend)</li>
                <li>SQL (database)</li>
            </ul>
            </li>
          <li>Experience in computer vision
             <ul>
                <li>PyTorch</li>
                <li>OpenCV</li>
                <li>MediaPipe</li>

                
            </ul></li>
          <li>Worked on multiple research projects involving deep learning and image processing.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
