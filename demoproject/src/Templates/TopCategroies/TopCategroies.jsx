import React, { useEffect } from 'react';
import '../TopCategroies/TopCategroies.css';
import MainText from '../../Atoms/MainText/MainText';
import SubText from '../../Atoms/SubText/SubText';
import Slider from '../../Molecules/Slider/Slider';
import Card from '../../Molecules/Cards/LargeCard/LargeCard';
import Button from '../../Atoms/Button/Button';
import { fetchCourses } from '../../store'; // Import fetchCourses action creator
import { useDispatch, useSelector } from 'react-redux';
const TopCategroies = () => {
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
  const filteredCourses = filterCourses(courses);
  console.log(filteredCourses);
  const renderedCourses = filteredCourses.length > 0 ? (
    filteredCourses.map((course, index) => (
        <Card
            key={index}
            title={course.title}
            instructors={course.instructorNames}
            description={course.description}
            rating={course.rating}
            style = {{marginTop: '20px'}}
        />
    ))
) : (
    Array.from({ length: 4 }).map((_, index) => (
        <Card key={index}  style = {{marginTop: '20px'}}/>
    ))
);
  return (
    <div >
            <div className="center-container">
        <MainText>Top Categories</MainText>
        <SubText> Learn the latest skills to reach your <br/> professional goals</SubText>
      </div>
      <Slider
        texts={['English','Steam','Math','Science','Arabic','Social Studies','Thermodynamics','Electronic Engineering']}
        dispatch={dispatch} 
         
      />
      <div className="card-container">
         {renderedCourses}
      </div>
      <div className="button-container">
        <Button width="314px" height="52px">
          View More Courses
        </Button>
      </div>
    </div>
  );
};

export default TopCategroies;
