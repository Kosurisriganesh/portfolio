import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-content">
        <h2>Education</h2>

        <div className="education">
          {/* B.Tech */}
          <div className="education-item">
            <div className="edu-left">
              <h4>B.TECH</h4>
              <p>2020 - 2023</p>
            </div>
            <div className="edu-right">
              <h4>Kakinada Institute of Technology and Science</h4>
              <p>
                Specialization in Electronics and Communication Engineering (ECE) at
                KITS, Divili - Peddapuram, Andhra Pradesh.
              </p>
            </div>
          </div>

          {/* Diploma */}
          <div className="education-item">
            <div className="edu-left">
              <h4>DIPLOMA</h4>
              <p>2017 - 2020</p>
            </div>
            <div className="edu-right">
              <h4>RRS College of Engineering & Technology</h4>
              <p>
                Completed Diploma in Electronics and Communication (ECE) at RRS
                College of Engineering & Technology, Muthangi - Patancheru,
                Telangana.
              </p>
            </div>
          </div>

          {/* SSC */}
          <div className="education-item">
            <div className="edu-left">
              <h4>SSC</h4>
              <p>2016 - 2017</p>
            </div>
            <div className="edu-right">
              <h4>St. Mary&apos;s PSM High School</h4>
              <p>
                Completed SSC under State Board of Telangana at St. Mary&apos;s PSM
                High School, Sadasivpet - Telangana.
              </p>
            </div>
          </div>
        </div>

        <h2>Resume</h2>
        <a
          href="https://drive.google.com/file/d/1_JxbS9M5vXPKFNd_bQ6I4tb4kzbw9v8g/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
