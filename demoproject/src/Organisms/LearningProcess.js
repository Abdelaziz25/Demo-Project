import React, { useState } from 'react';
import './LearningProcess.css'; // Import the external CSS file
import whatpp from '../images/Group 1164.png';
import yoursecondimage from '../images/Group 1094.png';
import yourThirdimage from '../images/Group 1095.png';
import yourFourthimage from '../images/Group 1096.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from './Cards/Card';
import Card2 from './Cards/Card2';
import Rectangle67 from '../images/Path 583.png';
import Path583 from '../images/Rectangle 67.png';
import Rectangle78 from '../images/Rectangle 78.png';
const LearningProcess = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleForwardClick = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
    };
    const handleBackwardClick = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + 5) % 5);
      };
  
  return (
    <div className="learning-process-container">
       <img
        src={whatpp} 
        alt="what-app"
        className="learning-process-image"
      />
       <div className="learning-process-text">
        Learning Process
      </div>
      <div className="learn-additional-text">
        Learn the latest skills to reach your<br/> professional goals
      </div>
      <div className="new-div">
      <img
          src={yoursecondimage} 
          alt="Your Second Alt Text"
          className="new-div-image"
        />
        <div className="new-div-text">
          Choose course
        </div>

        <img
          src={yourThirdimage} 
          alt="Your Second Alt Text"
          className="new2-div-image"
        />
        <div className="new2-div-text">
        Start learning
        </div>
        <img
          src={yourFourthimage} 
          alt="Your Second Alt Text"
          className="new3-div-image"
        />
        <div className="new3-div-text">
        Get Certificate
        </div>
      </div>
      <div className="top-categories">
        Top Categories
      </div>
      <div className="additional-text2">
        Learn the latest skills to reach your <br/> professional goals
      </div>
      <ArrowBackIosIcon className="arrow-back-icon" onClick={handleBackwardClick} />
      <ArrowForwardIosIcon className="arrow-front-icon" onClick={handleForwardClick} />

      <div className={`additional1-div ${activeIndex === 0 ? 'active' : ''}`}>
        <div className="additional-text3">Development</div>
      </div>

      <div className={`additional-div ${activeIndex === 1 ? 'active' : ''}`}>
        <div className="additional-div-text">Design</div>
      </div>

      <div className={`additional2-div ${activeIndex === 2 ? 'active' : ''}`}>
        <div className="additional-text5">Marketing</div>
      </div>

      <div className={`additional3-div ${activeIndex === 3 ? 'active' : ''}`}>
        <div className="additional-text6">Business</div>
      </div>

      <div className={`additional4-div ${activeIndex === 4 ? 'active' : ''}`}>
        <div className="additional-text7">Languages</div>
      </div>
    
      <Card image={Rectangle67} top={939} left={80}/>
      <Card2 image={Path583} top={939} left={391}/>
      <Card image={Rectangle78} top={939} left={703}/>
      <Card image={Rectangle67} top={939} left={1014}/>
      <div className="custom2-button">
        <div className="button2-text">
          View More Courses
        </div>
      </div>
    </div>
  );
};

export default LearningProcess;