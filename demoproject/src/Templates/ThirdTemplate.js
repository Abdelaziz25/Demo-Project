

import React from 'react';
import './ThirdTemplate.css';
import MainText from '../Atoms/MainText';
import SubText from '../Atoms/SubText';
import Slider from '../Molecules/Slider/Slider';
import Card from '../Molecules/Cards/card';
import Button from '../Atoms/Button';
const ThirdTemplate = () => {
  return (
    <div >
            <div className="center-container">
        <MainText>Top Categories</MainText>
        <SubText> Learn the latest skills to reach your <br/> professional goals</SubText>
      </div>
      <Slider texts={['Development', 'Design', 'Marketing', 'Business']} />
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
