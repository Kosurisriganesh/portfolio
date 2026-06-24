import React from "react";
import "./About.css";
import Logo from "./Ganesh passport2.jpg";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="header-content">
        <h2>ABOUT ME</h2>
        <h3>Get to know me better</h3>
      </div>

      <div className="about-content">
        {/* Profile Section */}
        <div className="about-text">
          <h1>PROFILE</h1>

          <div className="image">
            <img src={Logo} alt="Kosuri Sri Ganesh" />
          </div>

          <h3>Kosuri Sri Ganesh</h3>
          <h4>Frontend Developer | MERN Stack Developer | Cloud Developer</h4>

          <div className="contact-info">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:kosurisriganesh@gmail.com">
                kosurisriganesh@gmail.com
              </a>
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+916301699124">
                +91 6301699124
              </a>
            </p>

            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/kosuri-sri-ganesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/kosuri-sri-ganesh
              </a>
            </p>

            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/Kosurisriganesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Kosurisriganesh
              </a>
            </p>
          </div>

          <p>
            Motivated and detail-oriented Frontend and MERN Stack Developer with hands-on experience designing, developing, and delivering responsive, scalable, and user-centric web applications using modern JavaScript technologies.
          </p>

          <p>
            Proficient in React.js, Node.js, Express.js, MongoDB, Firebase, and REST API development. Experienced in building full-stack applications with secure authentication, dynamic dashboards, course management systems, and seamless frontend-backend integration.
          </p>

          <p>
            Skilled in AWS cloud services including EC2, S3, Route 53, CloudFront, and deployment workflows. Strong understanding of application deployment, performance optimization, version control, and modern development practices.
          </p>

          <p>
            Experienced in gathering requirements, implementing business solutions, and delivering web applications for real-world use cases. Successfully developed projects including Candles & Capital, a Stock Market EdTech Platform, House Project, and various React-based applications focused on performance, usability, scalability, and user experience.
          </p>
        </div>

        {/* Skills Section */}
        <div className="skills">
          <h2>TECHNICAL SKILLS</h2>

          <div className="skill-category">
            <h4>Frontend Development</h4>
            <div className="skill-tags">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Material UI</span>
              <span>Responsive Design</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Backend Development</h4>
            <div className="skill-tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Database & Authentication</h4>
            <div className="skill-tags">
              <span>MongoDB</span>
              <span>Firebase</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Cloud & Version Control</h4>
            <div className="skill-tags">
              <span>AWS EC2</span>
              <span>AWS S3</span>
              <span>Route 53</span>
              <span>CloudFront</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>CI/CD</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Development Tools</h4>
            <div className="skill-tags">
              <span>VS Code</span>
              <span>Postman</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;