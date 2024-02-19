

import React from 'react';
import '../LearningProcess/LearningProcess.css'; 
import whatpp from '../../images/Group 1164.png';
import MainText from '../../Atoms/MainText/MainText';
import SubText from '../../Atoms/SubText/SubText';
import yoursecondimage from '../../images/Group 1094.png';
import yourThirdimage from '../../images/Group 1095.png';
import yourFourthimage from '../../images/Group 1096.png';
const LearningProcess = () => {
  return (
    <div className="second-template">
      <div className="top-corner-image">
        <img
          src={whatpp} 
          alt="corner-icon"
          width="56"
          height="56"
        />
      </div>
      <div className="center-container">
        <MainText>Learning Process</MainText>
        <SubText> Learn the latest skills to reach your <br/> professional goals</SubText>
      </div>
      <div className="white-div">
        <div className="image-container">
          <div className="image-wrapper">
            <img src={yoursecondimage} alt="Image2" width="137" height="137" />
            <p className="image-text">Choose course</p>
          </div>
          <div className="image-wrapper">
            <img src={yourThirdimage} alt="Image2" width="137" height="137" />
            <p className="image-text">Start learning</p>
          </div>
          <div className="image-wrapper">
            <img src={yourFourthimage} alt="Image3" width="137" height="137" />
            <p className="image-text">Get Certificate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningProcess;
