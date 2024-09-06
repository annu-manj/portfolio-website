// src/components/Sidebar.js
import React from 'react';



//import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Ananya Manoj</h1>
      <div className="contact">
        
          <p className='mail'>ananyamanoj898@gmail.com</p><p className='bar'> | </p><p className='number'>+91-9384618403</p>
        
      </div>
      
      <h2>I am fresher seeking opportunities to grow as a software engineer, backend developer, or a data analyst.</h2>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
      
      <div className="social-icons">
        {/* Add your social icons here */}
        <a href="https://github.com/annu-manj" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/ananya-manoj-032932252/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
        {/* Add other social links similarly */}
        
      </div>
    </div>
  );
};

export default Sidebar;
