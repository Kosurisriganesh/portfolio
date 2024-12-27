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
        
          <div className="about-text">
            <h1>PROFILE</h1>
            <div className='image'>
              <img src={Logo} target='blank' alt='Kosuri Sri Ganesh'/>
            </div>
            <h3>Kosuri Sri Ganesh</h3>
            <h3>kosurisriganesh@gmail.com</h3>
            <h3>website : <a href="https://www.linkedin.com/in/kosuri-sri-ganesh" target="_blank" rel="noopener noreferrer" >Linkedin</a></h3>
            <p>A Electronics and Communication Engineering (ECE) B.Tech. student from Kakinada Institute of Technology and Science with excellent academic background and diverse skillset.Experienced in UI developer, and Web development. I am well versed with HTML, CSS, javascript, React and Java, basics of mysql.</p>
          </div>
        
          <div className="skills">
            <h2>MY SKILLS</h2>
            <span><b>Language</b> :</span>
            <h4>Telugu : <span>Read,Write,Speak </span></h4>
            
            <h4>English : <span>Read,Write,Speak</span></h4>
            <h4>Hindi : <span>Read,Write,Speak</span></h4>
            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
              <span>REACT</span>
              <span>JAVA</span>
              <span>MYSQL</span>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default About;
