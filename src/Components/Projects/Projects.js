import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "ONLINE HOUSE BUYER AND SELLER",
      description: "The Online House Buyer and Seller project is a web application designed to simplify the process of buying and selling houses. Built using React.js, this platform allows users to explore available houses and list their properties for sale. It provides a user-friendly interface and ensures a seamless experience for both buyers and sellers.",
      tech: ["React & css"],
      github: "https://github.com/Kosurisriganesh/Online-House-Buyer-and-Seller"
    },
    {
      title: "MOVIE APPLICATION",
      description: "The Movie Application is a web-based platform that allows users to explore, search, and manage a list of movies. Built using modern web development technologies, this project provides a seamless and interactive user experience for movie enthusiasts.",
      tech: ["React & css"],
      github: "https://github.com/Kosurisriganesh/Movie"
    },
    {
      title: "TEXT TO SPEECH CONVERTER",
      description: "The Text to Speech Converter is a web application that converts text input into spoken words. It leverages the power of web technologies to provide a convenient and accessible way to listen to text content. This project is built using modern web development technologies and provides a user-friendly interface for converting text to speech.",
      tech: ["React & css"],
      github: "https://github.com/Kosurisriganesh/Text-to-Speech",
    },
    {
      title: "FOOD WEB PAGE",
      description: "The Food Web Page project is a beautifully designed static website that highlights various delicious food items. It can be used as a template for restaurants, food blogs, or any food-related business to showcase their offerings and attract customers",
      tech: ["Html & css"],
      github: "https://github.com/Kosurisriganesh/Food-Web-Page"
    },
    {
      title: "TO-DO-LIST",
      description: "The TO-DO-LIST project is a simple and efficient task management tool built using HTML, CSS, and JavaScript. It allows users to create, organize, and track their tasks, helping them stay organized and productive.",
      tech: ["Html & css"],
      github: "https://github.com/Kosurisriganesh/To-Do-List"
    }
    // Add more projects
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

              <a href={project.github}>GitHub</a>
              
            </div>
          </div>
          
        ))}
        <h2>Some projects are there in GitHub....</h2>
      </div>
      
    </section>
  );
};

export default Projects;
