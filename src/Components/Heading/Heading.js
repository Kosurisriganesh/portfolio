import React from 'react';
import './Heading.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Heading = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="heading-container">
      <div className="heading-content">
        <h1 className="main-title">
          <span className="highlight">Hello World 👋</span>
          <br />
          <span className="name">I'm <span className="gradient-text">Kosuri Sri Ganesh</span></span>
        </h1>
        <h2 className="subtitle">
          Front-End Developer | React Developer | Web Developer | MERN Stack Developer
        </h2>
        <p className="description">
          Turning ideas into interactive realities through code ✨
        </p>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <button className="primary-btn" onClick={scrollToProjects}>
            View Projects
          </button>
          <button className="secondary-btn" onClick={scrollToContact}>
            Contact Me
          </button>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/kosuri-sri-ganesh" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/Kosurisriganesh" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.instagram.com/kosurisriganesh" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Heading;
