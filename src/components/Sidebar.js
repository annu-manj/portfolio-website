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
        <a href="https://github.com/annu-manj" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/ananya-manoj-032932252/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
        {/* Add other social links similarly */}
        <a href="" target="_blank" rel="ananyamanoj898@gmail.com"><i class="fa-solid fa-envelope"></i></a>
      </div>
    </div>
  );
};

export default Sidebar;
