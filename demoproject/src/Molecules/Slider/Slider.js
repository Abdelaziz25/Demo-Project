// Slider.js

import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Slider.css';

const Slider = ({ texts }) => {
  const [selectedText, setSelectedText] = useState(texts.length >= 2 ? texts[1] : '');

  const handleTextClick = (text) => {
    setSelectedText(text);
  };

  return (
    <div className="slider">
      <ArrowBackIosIcon className="slider-icon" />
      <div className="slider-texts">
        {texts.map((text, index) => (
          <div
            key={index}
            className={`text-wrapper ${selectedText === text ? 'selected' : ''}`}
            onClick={() => handleTextClick(text)}
          >
            <span className="slider-text">{text}</span>
          </div>
        ))}
      </div>
      <ArrowForwardIosIcon className="slider-icon" />
    </div>
  );
};

export default Slider;
