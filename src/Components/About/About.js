import React from 'react';
import './About.css';
import Logo from './Ganesh passport.jpg';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="header-content">
        <h2>ABOUT ME</h2>
        <h3>Let me Introduce myself</h3>
      </div>

      <div className="about-content">
        {/* Profile Section */}
        <div className="about-text">
          <h1>PROFILE</h1>
          <div className="image">
            <img src={Logo} alt="Kosuri Sri Ganesh" />
          </div>
          <h3>Kosuri Sri Ganesh</h3>
          <h3>kosurisriganesh@gmail.com</h3>
          <h3>+916301699124</h3>
          <h3>
            website :{" "}
            <a
              href="https://www.linkedin.com/in/kosuri-sri-ganesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </h3>
          <p>
            A Electronics and Communication Engineering (ECE) B.Tech. student
            from Kakinada Institute of Technology and Science with excellent
            academic background and diverse skillset. Experienced in UI
            development and Web development. I am well versed with HTML, CSS,
            JavaScript, React, and Java, Node.js & Express.Js, along with basics of MySQL & MongoDB.
          </p>
        </div>

        {/* Skills Section */}
        <div className="skills">
          <h2>MY SKILLS</h2>
          {/* <span><b>Languages</b> :</span> */}
          {/* <h4>Telugu : <span>Read, Write, Speak</span></h4>
          <h4>English : <span>Read, Write, Speak</span></h4>
          <h4>Hindi : <span>Read, Write, Speak</span></h4> */}

          <div className="skill-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Java</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MySQL</span>
            <span>MongoDB</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
