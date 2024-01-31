// Slider.js

import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListCourses from '../../api';
import './Slider.css';

const Slider = ({ texts }) => {
  const [selectedText, setSelectedText] = useState(texts.length >= 2 ? texts[1] : '');

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
