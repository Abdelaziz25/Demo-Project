import React from 'react';
import './TopSection.css';
import TopSectionArc from '../images/TopSectionGIRL.png';
import TopSectionGIRL from '../images/TopSectionArc.png';
const TopSection = () => {
  return (
    <div className="TopSection">
      <div className="TextContainer">
        <span className="Text BlueText">Take The Next Step</span>
        <span className="Text YellowText"> Toward</span>
        <br />
        <span className="Text YellowText NewYellowText">Your Success</span>
        <br />
        <span className="AdditionalText">
          Join hundreds of learners from the Middle East already learning on E-learning <br />
          Platform! We qualify you to be a highly competent programmer through a myriad <br />
          of software development courses covering a variety of programming languages.
        </span>
      </div>
      <img
        src={TopSectionArc}  
        alt="Arc"
        className="Image1"
      />
        <img
        src= {TopSectionGIRL} 
        alt="Girl Studying"
        className="Image2"
      />
    </div>
  );
};

export default TopSection;
