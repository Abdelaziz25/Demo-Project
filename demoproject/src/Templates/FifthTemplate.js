import React from 'react';
import './FifthTemplate.css';
import MainText from '../Atoms/MainText';
import SubText from '../Atoms/SubText';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from '../Molecules/Cards/card';
const FifthTemplate = () => {
  return (
    <div>
             <div className="center-container">
        <MainText>Most Popular</MainText>
        <SubText> Learn the latest skills to reach your <br/> professional goals</SubText>
      </div>
      <div className="content-container">
        <ArrowBackIosIcon className="arrow-icon arrow-margin" />
        <Card />
        <Card />
        <Card />
        <ArrowForwardIosIcon className="arrow-icon arrow2-margin" />
      </div>
    </div>
  );
};

export default FifthTemplate;