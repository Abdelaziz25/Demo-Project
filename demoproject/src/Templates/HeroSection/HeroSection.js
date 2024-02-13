import React from 'react';
import '../HeroSection/HeroSection.css';
import AppBar from '../../Organisms/AppBar';
import TopSectionGirl from '../../images/Group 10448.jpg';
import '../../style.css';
const FirstTemplate = () => {
  return (
    <div className='div' >
      <AppBar />
      <section className="content-section">
        <div className="combined-section">
      <div className="left-section">
          <p className="main-text green-text">
            Take The Next Step <span className="main-text gold-text">Toward</span>
          </p>
          <p className="main-text gold-text text-subb">
            Your Success
          </p>
          <p className="section-text">
            Join hundreds of learners from the middle-east already learning on E-learning
            <br /> Platform! We qualify you to be a highly competent programmer through a myriad
            <br /> of software development courses covering a variety of programming languages.
          </p>
        </div>
        <div className="right-section">
          <img
            src={TopSectionGirl} 
            alt="girl reading"
            className="success-image"
          />
         </div>
        </div>
      </section>
    </div>
  );
};

export default FirstTemplate;
