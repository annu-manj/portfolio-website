// src/components/Sidebar.js
import React from 'react';
//import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Ananya Manoj</h1>
      <h2>Software Engineer | Data Analyst | Machine learning </h2>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
      <div className="social-icons">
        {/* Add your social icons here */}
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {/* Add other social links similarly */}
      </div>
    </div>
  );
};

export default Sidebar;
