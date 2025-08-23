import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "CANDLES & CAPITAL",
      description: "Candles & Capital is a stock market edutech platform that simplifies trading and investing through structured courses, video lessons, and practical insights. It empowers learners with skills in technical analysis, candlestick patterns, and modern trading strategies.",
      tech: ["React", "CSS" ,"Node.js","MongoDB"],
      github: "https://github.com/Kosurisriganesh/C-C"
    },
    {
      title: "ONLINE HOUSE BUYER AND SELLER",
      description: "A web application built with React.js that simplifies the process of buying and selling houses. Users can explore available houses and list their properties for sale.",
      tech: ["React", "CSS"],
      github: "https://github.com/Kosurisriganesh/Online-House-Buyer-and-Seller"
    },
    {
      title: "MOVIE APPLICATION",
      description: "A movie application that allows users to explore, search, and manage movies with a seamless and interactive UI.",
      tech: ["React", "CSS"],
      github: "https://github.com/Kosurisriganesh/Movie"
    },
    {
      title: "TEXT TO SPEECH CONVERTER",
      description: "Converts text input into spoken words using modern web technologies. Provides a clean and user-friendly interface.",
      tech: ["React", "CSS"],
      github: "https://github.com/Kosurisriganesh/Text-to-Speech"
    },
    {
      title: "FOOD WEB PAGE",
      description: "A static food showcase website template built with HTML & CSS, perfect for restaurants and food blogs.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/Kosurisriganesh/Food-Web-Page"
    },
    {
      title: "TO-DO-LIST",
      description: "A simple task manager using HTML, CSS, and JavaScript. Helps users organize and track tasks easily.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Kosurisriganesh/To-Do-List"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
      <h2 className="extra-note">Some more projects are available on GitHub...</h2>
    </section>
  );
};

export default Projects;
