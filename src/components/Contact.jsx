import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <section id="contact" className={`contact ${inView ? 'slide-up' : 'slide-down'}`} ref={ref}>
      <h2>Let's Connect!</h2>
      <p>Feel free to reach out to me on my social media platforms.</p>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/aadityabaniya/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a
          href="https://github.com/adityahacker-1"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a
          href="https://www.instagram.com/itsmeadityabaniya/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a
          href="https://www.facebook.com/itsmeadityabaniya"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook"
        >
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
