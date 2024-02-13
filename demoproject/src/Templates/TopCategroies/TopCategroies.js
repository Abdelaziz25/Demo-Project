

import React, { useEffect } from 'react';
import '../TopCategroies/TopCategroies.css';
import MainText from '../../Atoms/MainText';
import SubText from '../../Atoms/SubText';
import Slider from '../../Molecules/Slider/Slider';
import Card from '../../Molecules/Cards/card';
import Button from '../../Atoms/Button';
import { fetchCourses } from '../../store'; // Import fetchCourses action creator
import { useDispatch, useSelector } from 'react-redux';
const ThirdTemplate = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

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
  }
  const handleSliderTextClick = () => {
    // Optionally, you can dispatch additional actions related to the slider text click here
    const filteredCourses = filterCourses(courses);
    console.log(filteredCourses);
  }
  return (
    <div >
            <div className="center-container">
        <MainText>Top Categories</MainText>
        <SubText> Learn the latest skills to reach your <br/> professional goals</SubText>
      </div>
      <Slider
        texts={['English','Steam','Math','Science','Arabic','Social Studies','Thermodynamics','Electronic Engineering']}
        dispatch={dispatch} // Pass dispatch function as a prop to the Slider component
        handleSliderTextClick={handleSliderTextClick} // Optionally pass a handler function for slider text click
      />
      <div className="card-container">
        <Card style={{ marginTop: '20px' }} /> 
        <Card style={{ marginTop: '20px' }} />
        <Card style={{ marginTop: '20px' }} />
        <Card style={{ marginTop: '20px' }} />
      </div>
      <div className="button-container">
        <Button width="314px" height="52px">
          View More Courses
        </Button>
      </div>
    </div>
  );
};

export default ThirdTemplate;
