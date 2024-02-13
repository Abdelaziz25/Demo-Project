

import React from 'react';
import '../BenefitsOfLearning/BenefitsOfLearning.css';
import FourthSectionImage from '../../images/Group 248.png'
import CheckSentence from "../../Organisms/CheckSentence";
const FourthTemplate = () => {
  return (
    <div className="fourth-template">
      <div className="Image-container">
    
        <img
          src={FourthSectionImage}
          alt="YourImageDescription"
          width="488"
          height="417"
        />
      </div>
      <div className="Text-container">
       
        <h2>
          Benefits Of Learning <br />
          <span className="edugram-text">From Edugram</span>
        </h2>
        <CheckSentence text="Access 16,000+ expert-led courses." />
      <CheckSentence text="Expert instructors with lifetime access on your courses." />
      <CheckSentence text="Use project files and quizzes to practice while you learn." />
      <CheckSentence text="View courses anytime on your computer or phone" />
      <CheckSentence text="Earn a certificate when you complete a course." />
      </div>
    </div>
  );
};

export default FourthTemplate;
