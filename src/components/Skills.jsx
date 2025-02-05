import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaAws
} from 'react-icons/fa';
import { SiFlask, SiJquery, SiOpencv, SiPandas, SiNumpy, SiPytorch } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import '../styles/Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <section id="skills" className={`skills ${inView ? 'fade-in' : 'fade-out'}`} ref={ref}>
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill-item">
          <FaHtml5 className="skill-icon fa-html5" />
          <span>HTML</span>
        </div>
        <div className="skill-item">
          <FaCss3Alt className="skill-icon fa-css3-alt" />
          <span>CSS</span>
        </div>
        <div className="skill-item">
          <FaJs className="skill-icon fa-js" />
          <span>JavaScript</span>
        </div>
        <div className="skill-item">
          <FaReact className="skill-icon fa-react" />
          <span>React</span>
        </div>
        <div className="skill-item">
          <DiMysql className="skill-icon di-mysql" />
          <span>SQL</span>
        </div>
        <div className="skill-item">
          <FaNodeJs className="skill-icon fa-node-js" />
          <span>Node.js</span>
        </div>
        <div className="skill-item">
          <FaPython className="skill-icon fa-python" />
          <span>Python</span>
        </div>
        <div className="skill-item">
          <SiFlask className="skill-icon si-flask" />
          <span>Flask</span>
        </div>
        <div className="skill-item">
          <FaDocker className="skill-icon fa-docker" />
          <span>Docker</span>
        </div>
        <div className="skill-item">
          <FaGitAlt className="skill-icon fa-git-alt" />
          <span>Git</span>
        </div>
        <div className="skill-item">
          <FaAws className="skill-icon fa-aws" />
          <span>AWS</span>
        </div>
        <div className="skill-item">
          <SiJquery className="skill-icon si-jquery" />
          <span>jQuery</span>
        </div>
        <div className="skill-item">
          <SiOpencv className="skill-icon si-opencv" />
          <span>OpenCV</span>
        </div>
        <div className="skill-item">
          <SiPandas className="skill-icon si-pandas" />
          <span>Pandas</span>
        </div>
        <div className="skill-item">
          <SiNumpy className="skill-icon si-numpy" />
          <span>NumPy</span>
        </div>
        <div className="skill-item">
          <SiPytorch className="skill-icon si-pytorch" />
          <span>PyTorch</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;