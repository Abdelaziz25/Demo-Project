// Slider.js

import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListCourses from '../../api';
import './Slider.css';

const Slider = ({ texts }) => {
  const [selectedText, setSelectedText] = useState(texts.length >= 2 ? texts[1] : '');
  const [startIndex, setStartIndex] = useState(0);
  const handleTextClick = async (text) => {
    setSelectedText(text);
    const result = await ListCourses();
    const courseDetails = result.map(course => {
      const { classified_product: { title, description, instructors } } = course;
      const instructorNames = instructors.map(instructor => instructor.name);
      return {
        title,
        description,
        instructorNames,
      };
    });

    console.log(courseDetails);
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
