import React, { useState,useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Slider.css';
import { useThunk } from '../../hooks/use-thunk';
import { fetchCourses} from '../../store';
import { useSelector } from 'react-redux';
const Slider = ({ texts }) => {
  
  const [selectedText, setSelectedText] = useState(texts.length >= 2 ? texts[1] : '');
  const [startIndex, setStartIndex] = useState(0);
  const [doFetchCourses, isLoadingCourses, loadingUsersError] =
  useThunk(fetchCourses);
  
  const courses = useSelector((state) => state.courses.courses);
  useEffect(() => {
    doFetchCourses();
  }, [doFetchCourses]);


  const filterCourses = (courses) => {
    return courses.map(course => {
      const { classified_product: { title, description, instructors, final_rating_from_reviews } } = course;
      const instructorNames = instructors.map(instructor => instructor.name);
      return {
        title,
        description,
        instructorNames,
        rating: final_rating_from_reviews ?? 0,
      };
    });
  };

  const handleTextClick = (text) => {
    setSelectedText(text);
    const filteredCourses = filterCourses(courses);
    console.log(filteredCourses);
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
