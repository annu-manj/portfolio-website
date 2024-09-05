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
                Skills: Python, OpenCV, MediaPipe, Image Processing
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
                Skills: Python, Streamlit, LLM, LLaMA2, NLP
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
                Skills: SVM Algorithm, Data Processing, Model construction, Model evaluation.
              </div>
            
          </div>
          <div class="experience-box">
            
          <h3 className="project-title"><a href="yhttps://github.com/annu-manj/Sentiment-Analysis" target="_blank" class="project-link">Sentiment Analysis</a></h3>
              <p className="project-details">
              The "Amazon Alexa Review - Sentiment Analysis" project is focused on analyzing customer reviews of Amazon Alexa products 
              to predict whether the sentiment expressed in a given review is positive or negative. Reviews are predicted using Random Classifier Algorithm.
              </p>
              
              <div className="project-skills">
                Skills: Random Forest Classifier Algorithm, EDA, Data Preprocessing, Feature Extraction, Model Creation, Model evaluation
              </div>
            
          </div>
        </div>
        
        
        
        



      </div>

    </div>
  );
};

export default Projects;
