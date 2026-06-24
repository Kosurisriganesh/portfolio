import React from "react";
import "./Heading.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Heading = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="heading-container">
      <div className="heading-content">

        <h1 className="main-title">
          <span className="highlight">Hello World 👋</span>
          <br />
          <span className="name">
            I'm <span className="gradient-text">Kosuri Sri Ganesh</span>
          </span>
        </h1>

        <h2 className="subtitle">
          Frontend Developer | MERN Stack Developer | Cloud Developer
        </h2>

        <p className="description">
          Turning ideas into interactive realities through code ✨
        </p>

        {/* CTA BUTTONS */}
        <div className="cta-buttons">
          <button
            className="primary-btn"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </button>

          <button
            className="secondary-btn"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </button>
        </div>

        {/* SOCIAL ICONS */}
        <div className="social-icons">

          <a
            href="https://www.linkedin.com/in/kosuri-sri-ganesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>

          <a
            href="https://github.com/Kosurisriganesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>

          <a
            href="https://www.instagram.com/kosurisriganesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={30} />
          </a>
        </div>

      </div>
    </header>
  );
};

export default Heading;