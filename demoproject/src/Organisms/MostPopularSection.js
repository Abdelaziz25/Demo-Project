import React from 'react';
import './MostPopularSection.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Rectangle67 from '../images/Path 583.png';
import Path583 from '../images/Rectangle 67.png';
import Rectangle78 from '../images/Rectangle 78.png';
import Card from './Cards/Card';
import Card2 from './Cards/Card2';
const MostPopularSection = () => {
  return (
    <div className="most-popular-section">
       <div className="most-popular-text">
        Most Popular
      </div>
      <div className="secondary-text">
        Learn the latest skills to reach your<br/> professional goals
      </div>
      <div className="icon-container">
        <ArrowBackIosIcon className="back-icon" />
      </div>
      <div className="icon2-container">
        <ArrowForwardIosIcon className="back-icon" />
      </div>
      <Card image={Rectangle67} top={280} left={221} />
      <Card2 image={Path583} top={280} left={547} />
      <Card image={Rectangle78} top={280} left={867} />
    </div>
  );
};

export default MostPopularSection;