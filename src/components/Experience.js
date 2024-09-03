// src/components/Experience.js
import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-section">
      <h2>Work Experience</h2>

      <div className="experience-container">
        <h3 className="experience-title">Data Scientist Intern</h3>
        <p className="experience-details">
          Developed content-based event and book recommendation systems using TF-IDF, cosine similarity, KNN,
          and integrated with Flask RESTful API. </p>
          <p>Fine-tuned LLaMA-2-7b using Hugging Face transformers for text
          generation to create roadmap suggestions. Employed supervised fine-tuning with custom parameters
          including LoRA attention and Bits and Bytes quantization on LLaMA-2 model.
        </p>
        <p className="experience-date">January 8, 2024 – April 29, 2024</p><a
          href="/Major_project_intern.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-link"
        >
          View Certificate
        </a>
        <div className="experience-skills">
        <span className="skill-pill">Flask </span>
        <span className="skill-pill">Restful API</span>
        <span className="skill-pill">NLP</span>
        <span className="skill-pill">Feature Engineering</span>
        <span className="skill-pill">MLFlow</span>
        <span className="skill-pill">Data Visualizations</span>
        <span className="skill-pill">Cosine Similarity</span>
        <span className="skill-pill">KNN - Algorithm</span>        
        <span className="skill-pill">LLM</span>
        <span className="skill-pill">Fine Tuning</span>
        <span className="skill-pill">LoRA</span>
        <span className="skill-pill">Quantization</span>
        


        </div>
      </div>

      <div className="experience-container">
        <h3 className="experience-title">Backend Developer Intern</h3>
        <p className="experience-details">
        Developed a secure and scalable backend for a recipe application using Flask and MySQL. Implemented user 
        authentication with Flask-Bcrypt, enabled recipe search and management through RESTful APIs, and integrated 
        a dynamic rating system for user feedback. Ensured efficient data handling and cross-origin resource sharing 
        (CORS) for seamless frontend integration.
        </p>
        <p className="experience-date">June 9, 2023 – July 9, 2023</p>
        <a
          href="/Recipe_app_intern.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-link"
        >
          View Certificate
        </a>
        <div className="experience-skills">
        <span className="skill-pill">Python</span>
        <span className="skill-pill">Flask</span>
        <span className="skill-pill">Restful API</span>
        <span className="skill-pill">Data handling</span>
        <span className="skill-pill">MySQL</span>
        <span className="skill-pill">SQL</span>        
        <span className="skill-pill">CORS</span>
        </div>
      </div>

      <div className="experience-container">
        <h3 className="experience-title">Intern</h3>
        <p className="experience-details">
          Acquired foundational knowledge and demonstrated proficiency in AWS services including EC2, S3, and Load Balancer.
        </p>
        <p className="experience-date">July 01,2021 – July 15, 2021</p>
        <a
          href="/AWS_CLOUD_INTERN.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-link"
        >
          View Certificate
        </a>
        <div className="experience-skills">
        <span className="skill-pill">AWS EC2</span>
        <span className="skill-pill">S3</span>
        <span className="skill-pill">Load Balancer</span>
        </div>
      </div>

    </div>
  );
};

export default Experience;
