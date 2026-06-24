import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "CANDLES & CAPITAL",
      description:
        "Candles & Capital is a stock market edutech platform that simplifies trading and investing through structured courses, video lessons, and practical insights.",
      tech: ["React", "CSS", "Node.js", "Express.js", "MongoDB"],
      github: "https://www.candlesandcapital.in/",
    },
    {
      title: "ONLINE HOUSE BUYER AND SELLER",
      description:
        "A web application built with React.js that simplifies buying and selling houses.",
      tech: ["React", "CSS"],
      github:
        "https://github.com/Kosurisriganesh/Online-House-Buyer-and-Seller",
    },
    {
      title: "MOVIE APPLICATION",
      description:
        "A movie application to explore, search, and manage movies.",
      tech: ["React", "CSS"],
      github: "https://github.com/Kosurisriganesh/Movie",
    },
    {
      title: "TEXT TO SPEECH CONVERTER",
      description:
        "Converts text input into spoken words using web technologies.",
      tech: ["React", "CSS"],
      github: "https://github.com/Kosurisriganesh/Text-to-Speech",
    },
    {
      title: "FOOD WEB PAGE",
      description:
        "Static food showcase website built with HTML & CSS.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/Kosurisriganesh/Food-Web-Page",
    },
    {
      title: "TO-DO LIST",
      description:
        "Simple task manager using HTML, CSS, and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Kosurisriganesh/To-Do-List",
    },
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
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                View GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default Projects;