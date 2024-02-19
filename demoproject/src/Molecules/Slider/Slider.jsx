import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Slider.css';
import { fetchCourses} from '../../store';
const Slider = ({ texts, dispatch, handleSliderTextClick }) => {
  
  const [selectedText, setSelectedText] = useState(texts.length >= 2 ? texts[1] : '');
  const [startIndex, setStartIndex] = useState(0);
  
  const handleTextClick = (text) => {
    setSelectedText(text);
    console.log(text)
    dispatch(fetchCourses(text)); 
    if (handleSliderTextClick) {
      handleSliderTextClick(); 
    }
 
  };
  
  const handleArrowClick = (direction) => {
    const newStartIndex = direction === 'left' ? Math.max(0, startIndex - 1) : Math.min(texts.length - 5, startIndex + 1);
    setStartIndex(newStartIndex);
  };

  return (
    <div className="slider">
      <ArrowBackIosIcon className="slider-icon" onClick={() => handleArrowClick('left')} />
      <div className="slider-texts">
        {texts.slice(startIndex, startIndex + 5).map((text, index) => (
          <div
            key={index}
            className={`text-wrapper ${selectedText === text ? 'selected' : ''}`}
            onClick={() => handleTextClick(text)}
          >
            <span className="slider-text">{text}</span>
          </div>
        ))}
      </div>
      <ArrowForwardIosIcon className="slider-icon" onClick={() => handleArrowClick('right')} />
    </div>
  );
};

export default Slider;
