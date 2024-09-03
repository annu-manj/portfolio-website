// src/components/Projects.js
import React from 'react';
import './Project.css';

const Projects = () => {
  return (
    <div className="project-section">
      <h2>Projects</h2>

      <div className="project-container">
        
        <div class="experience-row">
          <div class="experience-box">
            
            <h3 className="project-title"><a href="your-link-here" target="_blank" class="project-link">Project Title</a></h3>
              <p className="project-details">
              Developed content-based event and book recommendation systems using TF-IDF, cosine similarity, KNN,
              and integrated with Flask RESTful API. Fine-tuned LLaMA-2-7b using Hugging Face transformers for text
              generation to create roadmap suggestions. Employed supervised fine-tuning with custom parameters
              including LoRA attention and Bits and Bytes quantization on LLaMA-2 model.
              </p>
              <br></br>
              <div className="project-skills">
                Skills: TF-IDF, Cosine Similarity, KNN, Flask RESTful API, LLaMA-2-7b, Hugging Face, LoRA, Bits and Bytes
              </div>
            
          </div>
          <div class="experience-box">
            
          <h3 className="project-title"><a href="your-link-here" target="_blank" class="project-link">Project Title</a></h3>
              <p className="project-details">
                Developed a recipe application using Flask with RESTful API functionality and integrated MySQL for data storage and
                management.
              </p>
              
              <div className="project-skills">
                Skills: Flask, RESTful API, MySQL
              </div>
            
          </div>
        </div>

        <div class="experience-row">
          <div class="experience-box">
            
          <h3 className="project-title"><a href="your-link-here" target="_blank" class="project-link">Project Title</a></h3>
              <p className="project-details">
              Developed content-based event and book recommendation systems using TF-IDF, cosine similarity, KNN,
              and integrated with Flask RESTful API. Fine-tuned LLaMA-2-7b using Hugging Face transformers for text
              generation to create roadmap suggestions. Employed supervised fine-tuning with custom parameters
              including LoRA attention and Bits and Bytes quantization on LLaMA-2 model.
              </p>
              
              <div className="project-skills">
                Skills: TF-IDF, Cosine Similarity, KNN, Flask RESTful API, LLaMA-2-7b, Hugging Face, LoRA, Bits and Bytes
              </div>
            
          </div>
          <div class="experience-box">
            
          <h3 className="project-title"><a href="your-link-here" target="_blank" class="project-link">Project Title</a></h3>
              <p className="project-details">
                Developed a recipe application using Flask with RESTful API functionality and integrated MySQL for data storage and
                management.
              </p>
              
              <div className="project-skills">
                Skills: Flask, RESTful API, MySQL
              </div>
            
          </div>
        </div>
        
        
        
        



      </div>

    </div>
  );
};

export default Projects;
