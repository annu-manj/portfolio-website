// src/components/Projects.js
import React from 'react';
import './Project.css';

const Projects = () => {
  return (
    <div className="project-section">
      <h2>Projects</h2>
      <div className="project-container" id="projects">
        
        <div class="experience-row">
              <div class="experience-box">
                  <h3 className="project-title"><a href="https://github.com/annu-manj/HandPicking_game" target="_blank" class="project-link">HandPicking Game</a></h3>
                  <p className="project-details">
                  The code is designed to create a simple hand-tracking game using OpenCV and MediaPipe. 
                  In this game, a player uses their hand (specifically the index finger) to touch a moving 
                  target (a green circle) on the screen. When the player touches 
                  the enemy, it disappears and reappears at a new random location, and the player’s score increases.
                  </p>
                  <br></br>
                  <div className="project-skills">
                    <span className="skill-pills">Python </span>
                    <span className="skill-pills">OpenCV</span>
                    <span className="skill-pills">MediaPipe</span>
                    <span className="skill-pills">Image Processing</span>
                  </div>
              </div>
              <div class="experience-box">
                
                  <h3 className="project-title"><a href="https://github.com/annu-manj/BlogGeneration/tree/main" target="_blank" class="project-link">Blog Generation</a></h3>
                  <p className="project-details">
                  Streamlit web application designed for generating blog posts with the assistance of the LLama 2 
                  language model. Users input the topic, desired word count, and select a style or category for the 
                  post. The application defines a function, getLLamaresponse, which orchestrates the interaction 
                  with the LLama 2 model, creating a prompt based on user inputs and retrieving a response.
                  </p>                  
                  <div className="project-skills">
                      <span className="skill-pills">Python </span>
                      <span className="skill-pills">Streamlit</span>
                      <span className="skill-pills">LLM</span>
                      <span className="skill-pills">LLaMA2</span>
                      <span className="skill-pills">NLP</span>
                  </div>
              </div>
        </div>

        <div class="experience-row">
              <div class="experience-box">
                  <h3 className="project-title"><a href="https://github.com/annu-manj/HandWritten_Digit_Recognition" target="_blank" class="project-link">Handwritten Digit Recognition</a></h3>
                  <p className="project-details">
                  This project uses SVM to classify Handwritten digits, which are typically represented as images, into their corresponding numeric labels.
                  </p>
                  <div className="project-skills">
                    <span className="skill-pills">SVM Algorithm </span>
                    <span className="skill-pills">Data Processing</span>
                    <span className="skill-pills">Model construction</span>
                    <span className="skill-pills">Model evaluation</span>
                  </div>
              </div>
              <div class="experience-box">
                
                  <h3 className="project-title"><a href="https://github.com/annu-manj/Sentiment-Analysis" target="_blank" class="project-link">Sentiment Analysis</a></h3>
                  <p className="project-details">
                  The "Amazon Alexa Review - Sentiment Analysis" project is focused on analyzing customer reviews of Amazon Alexa products 
                  to predict whether the sentiment expressed in a given review is positive or negative. Reviews are predicted using Random Classifier Algorithm.
                  </p>
                <div className="project-skills">
                    <span className="skill-pills">Random Forest Classifier</span>
                    <span className="skill-pills">EDA</span>
                    <span className="skill-pills">Data Preprocessing</span>
                    <span className="skill-pills">Feature Extraction</span>
                    <span className="skill-pills">Model evaluation</span>
                    <span className="skill-pills">Model Creation</span>
                  </div>
              </div>
          </div>

          <div class="experience-row">
              <div class="experience-box">
                  <h3 className="project-title"><a href="https://github.com/annu-manj/Stock-Prediction" target="_blank" class="project-link">Stock Prediction</a></h3>
                  <p className="project-details">
                  Developed code demonstrating stock prediction using news headlines, including data preprocessing and application of NLP Bag of Words model.
                  </p>
                  <br></br>
                  <div className="project-skills">
                    <span className="skill-pills">Python </span>
                    <span className="skill-pills">Random Forest Classifier </span>
                    <span className="skill-pills">Data Preprocessing</span>
                    
                  </div>
              </div>
              <div class="experience-box">
                  <h3 className="project-title"><a href="https://github.com/annu-manj/homedecor" target="_blank" class="project-link">Home Decor Ecommerce Website</a></h3>
                  <p className="project-details">
                  Developed a e-commerce website for furniture using PHP, HTML, CSS, Bootstrap and MySQL.
                  </p>
                  <br></br>
                  <div className="project-skills">
                    <span className="skill-pills">PHP </span>
                    <span className="skill-pills">HTML </span>
                    <span className="skill-pills">CSS</span>
                    <span className="skill-pills">Bootstrap </span>
                    <span className="skill-pills">MySQL</span>
                    
                  </div>
              </div>
              
          </div>
          <div class="experience-row">
              <div class="experience-box">
                  <h3 className="project-title"><a href="https://github.com/annu-manj/Visualization-using-PowerBI/blob/main/HR_ANALYTICS.md" target="_blank" class="project-link">HR Attrition Analysis</a></h3>
                  <p className="project-details">
                  Created an HR Analytics dashboard in Power BI to analyze and visualize employee attrition, salary trends, and tenure,providing actionable insights to improve retention strategies.

                  </p>
                  <br></br>
                  <div className="project-skills">
                    <span className="skill-pills">Power BI </span>
                    <span className="skill-pills">ETL</span>
                    <span className="skill-pills">Data Visualizations</span>
                    
                  </div>
              </div>
              
          </div>
      </div>
    </div>
  );
};

export default Projects;
