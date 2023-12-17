
import React from 'react';
import './Temp2.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-left">
        <div className="resume-header">
          <h1>John Doe</h1>
          <h2>Software Engineer</h2>
          <p>(123) 456-7890</p>
          <p>johndoe@email.com</p>
          <p>LinkedIn: linkedin.com/in/johndoe</p>
          <p>GitHub: github.com/johndoe</p>
        </div>
        <div className="resume-objective">
          <h3>Objective</h3>
          <p>Highly motivated and experienced software engineer with a proven track record of success in developing and delivering high-quality software products. Seeking a challenging role in a fast-paced and innovative environment where I can use my skills and experience to make a significant contribution to the team.</p>
        </div>
        <div className="resume-skills">
          <h3>Skills</h3>
          <ul>
            <li>Programming Languages: Java, Python, JavaScript, C++, C#</li>
            <li>Web Development: React, Angular, Node.js, Express.js</li>
            <li>Databases: MySQL, PostgreSQL, MongoDB</li>
            <li>Cloud Computing: AWS, Azure, Google Cloud Platform</li>
            <li>Agile Methodology: Scrum, Kanban</li>
          </ul>
        </div>
        <div className="resume-work-experience">
          <h3>Work Experience</h3>
          <div className="resume-work-experience-item">
            <h4>Software Engineer</h4>
            <h5>ABC Company</h5>
            <h6>2019 - Present</h6>
            <ul>
              <li>Developed and maintained web applications using React, Angular, and Node.js.</li>
              <li>Worked on a team of engineers to deliver high-quality software products on time and within budget.</li>
              <li>Collaborated with product managers and designers to gather requirements and translate them into technical specifications.</li>
              <li>Conducted code reviews and provided feedback to other engineers.</li>
            </ul>
          </div>
          <div className="resume-work-experience-item">
            <h4>Software Developer</h4>
            <h5>XYZ Company</h5>
            <h6>2017 - 2019</h6>
            <ul>
              <li>Developed and tested software applications using Java, Python, and C++.</li>
              <li>Worked on a team of developers to deliver software products that met customer requirements.</li>
              <li>Collaborated with product managers and designers to gather requirements and translate them into technical specifications.</li>
              <li>Conducted code reviews and provided feedback to other developers.</li>
            </ul>
          </div>
        </div>
        <div className="resume-education">
          <h3>Education</h3>
          <div className="resume-education-item">
            <h4>Master of Science in Computer Science</h4>
            <h5>University of California, Berkeley</h5>
            <h6>2015 - 2017</h6>
          </div>
          <div className="resume-education-item">
            <h4>Bachelor of Science in Computer Science</h4>
            <h5>University of California, Los Angeles</h5>
            <h6>2011 - 2015</h6>
          </div>
        </div>
        <div className="resume-projects">
          <h3>Projects</h3>
          <div className="resume-projects-item">
            <h4>Personal Finance App</h4>
            <p>Developed a personal finance app using React and Node.js to help users track their income and expenses.</p>
          </div>
          <div className="resume-projects-item">
            <h4>E-commerce Website</h4>
            <p>Developed an e-commerce website using Angular and Express.js to allow users to buy and sell products online.</p>
          </div>
        </div>
      </div>
      <div className="resume-right">
        <div className="resume-awards-and-honors">
          <h3>Awards and Honors</h3>
          <ul>
            <li>Dean's List, University of California, Berkeley</li>
            <li>President's List, University of California, Los Angeles</li>
            <li>Google Code Jam, Top 10% Finalist</li>
            <li>ACM International Collegiate Programming Contest, World Finals Participant</li>
          </ul>
        </div>
        <div className="resume-references">
          <h3>References</h3>
          <p>Available upon request.</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;

