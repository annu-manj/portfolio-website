// src/components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsList = [
    { name: 'Python', logo: 'fa-brands fa-python' },
    { name: 'Flask', logo: 'fa-solid fa-flask' },
    { name: 'Django', logo: 'fa-solid fa-leaf' },
    { name: 'HTML', logo: 'fa-brands fa-html5' },
    { name: 'Java', logo: 'fa-brands fa-java' },
    { name: 'CSS', logo: 'fa-brands fa-css3-alt' },
    { name: 'SQL', logo: 'fa-solid fa-database' },
    { name: 'PostgreSQL', logo: 'fa-solid fa-server' },
    { name: 'MySQL', logo: 'fa-solid fa-database' },
    { name: 'Power BI', logo: 'fa-solid fa-chart-bar' },
    { name: 'Excel', logo: 'fa-solid fa-file-excel' },
    { name: 'RESTful API', logo: 'fa-solid fa-cloud' },
    { name: 'AWS', logo: 'fa-brands fa-aws' },
    { name: 'Git/GitHub', logo: 'fa-brands fa-github' },
    { name: 'Postman', logo: 'fa-solid fa-envelope' },
    { name: 'Debugging', logo: 'fa-solid fa-bug' },
  ];

  return (
    <div id="skills" className="skills-section-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill.name === 'Flask' ? (
              <img
                src="/flask.png"
                alt="Flask Logo"
                className="skill-image"
              />
            ) : skill.name === 'Python' ? (
              <img
                src="/python.png"
                alt="Python Logo"
                className="skill-image"
              />
            ):skill.name === 'Django' ? (
              <img
                src="/django.png"
                alt="django Logo"
                className="skill-image"
              />
            ):skill.name === 'Python' ? (
              <img
                src="/python.png"
                alt="Python Logo"
                className="skill-image"
              />
            ):skill.name === 'Java' ? (
              <img
                src="/java.png"
                alt="java Logo"
                className="skill-image"
              />
            ):skill.name === 'PostgreSQL' ? (
              <img
                src="/postgresql.png"
                alt="Python Logo"
                className="skill-image"
              />
            ):skill.name === 'Excel' ? (
              <img
                src="/excel.png"
                alt="Python Logo"
                className="skill-image"
              />
            ):skill.name === 'Power BI' ? (
              <img
                src="/powerbi.png"
                alt="Python Logo"
                className="skill-image"
              />
            ):skill.name === 'Postman' ? (
              <img
                src="/postman.png"
                alt="Python Logo"
                className="skill-image"
              />
            ):(
              <i className={`${skill.logo} skill-icon`}></i>
            )}
            <p className="skill-name">{skill.name}</p>
            
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
