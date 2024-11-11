// src/components/About.js
import React from 'react';
import './Education.css';
const Education = () => {
  return (
    
    <div className="education-section">
        <h2>Education</h2>
        
        <div className="education-container" id="education">
        
            <div class="education-row">
                <div class="education-box">
                    <div className="emble-container">
                        <img className="emblem" src='unom.png'/>
                    </div>
                    <div className="edu-details">   
                        <h3 className="edu-title">MCA</h3>
                        <span className="college">University of Madras</span>
                        <span className="mark">CGPA : 8.336</span>
                    </div>
                    
                </div>
                <div class="education-box">
                    <div className="emble-container"><img className="emblem" src='ethiraj.png'/></div>
                    <div className="edu-details">
                        <h3 className="edu-title">BSc. Computer Science</h3>
                        <span className="college">Ethiraj College for Women</span>
                        <span className="mark">CGPA : 9.028</span>
                    </div>
                    <br></br>
                </div>
            </div>

            <div class="education-row">
                <div class="education-box">
                    <div className="emble-container">
                        <img className="emblem" src='kv2.png'/>
                    </div>
                    <div className="edu-details">   
                        <h3 className="edu-title">SSE</h3>
                        <span className="college">Kendriya Vidyalaya No.2</span>
                        <span className="mark">80%</span>
                    </div>
                    
                </div>
                <div class="education-box">
                    <div className="emble-container"><img className="emblem" src='kv2.png'/></div>
                    <div className="edu-details">
                        <h3 className="edu-title">SSCE</h3>
                        <span className="college">Kendriya Vidyalaya No.2</span>
                        <span className="mark">95%</span>
                    </div>
                    <br></br>
                </div>
            </div>
        </div>
        </div>
    
  );
};

export default Education;
