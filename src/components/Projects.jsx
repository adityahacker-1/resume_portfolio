import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/Projects.css';

const Projects = () => {
  const [ref1, inView1] = useInView({ threshold: 0.1 });
  const [ref2, inView2] = useInView({ threshold: 0.1 });
  const [ref3, inView3] = useInView({ threshold: 0.1 });
  const [ref4, inView4] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {/* Project 1 */}
        

        {/* Project 2 */}
        <a href="https://github.com/adityahacker-1/market_web" target="_blank" rel="noopener noreferrer" 
           ref={ref2} className={`project-item ${inView2 ? 'slide-in-left' : 'slide-out-left'}`}>
          <h3>Full Stack Web Page</h3>
          <p>Has login, registration, database, and api fetch.</p>
        </a>

        <a href="https://adea.netlify.app/" target="_blank" rel="noopener noreferrer" 
           ref={ref1} className={`project-item ${inView1 ? 'slide-in-left' : 'slide-out-left'}`}>
          <h3>To Do List</h3>
          <p>Write your to-do-activity here</p>
        </a>

        {/* Project 3 */}
        <a href="https://adityahacker-1.github.io/calculator-basic/" target="_blank" rel="noopener noreferrer" 
           ref={ref3} className={`project-item ${inView3 ? 'slide-in-left' : 'slide-out-left'}`}>
          <h3>Basic Calculator</h3>
          <p>Simple calculations</p>
        </a>

        {/* Project 4 */}
        <a href="https://adityahacker-1.github.io/drum/" target="_blank" rel="noopener noreferrer" 
           ref={ref4} className={`project-item ${inView4 ? 'slide-in-left' : 'slide-out-left'}`}>
          <h3>Drum</h3>
          <p>Playing with Javascript</p>
        </a>
      </div>
    </section>
  );
};

export default Projects;
