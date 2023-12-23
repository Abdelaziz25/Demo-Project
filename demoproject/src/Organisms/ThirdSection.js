import React from 'react';
import './ThirdSection.css'; 
import ThirdSectionImage from '../images/Group 248.png'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
const YourComponent = () => {
  return (
    <div className="section3">
     <img src={ThirdSectionImage} alt="girl on laptop"/>

     <div className="text-container">
       <h1>
          <span style={{ color: '#FFBA00' }}>Benefits Of Learning From</span> <span className="highlighted-text">Edugram</span>
        </h1>
      </div>
      <div className="icon-container">
        <CheckCircleOutlineOutlinedIcon  />
      </div>
      <div className="info-text">
        Access 16,000+ expert-led courses.
      </div>
      <div className="second-icon-container">
        <CheckCircleOutlineOutlinedIcon />
      </div>
      <div className="second-info-text">
        Expert instructors with lifetime access on your courses.
      </div>
      <div className="third-icon-container">
        <CheckCircleOutlineOutlinedIcon  />
      </div>
      <div className="third-info-text">
        Use project files and quizzes to practice while you learn.
      </div>
      <div className="fourth-icon-container">
        <CheckCircleOutlineOutlinedIcon  />
      </div>
      <div className="fourth-info-text">
      View courses anytime on your computer or phone
      </div>
      <div className="fifth-icon-container">
        <CheckCircleOutlineOutlinedIcon  />
      </div>
      <div className="fifth-info-text">
      Earn a certificate when you complete a course.
      </div>
    </div>
  );
};

export default YourComponent;