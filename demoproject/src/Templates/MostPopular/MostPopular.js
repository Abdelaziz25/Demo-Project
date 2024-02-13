import React from 'react';
import '../MostPopular/MostPopular.css';
import MainText from '../../Atoms/MainText/MainText';
import SubText from '../../Atoms/SubText/SubText';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from '../../Molecules/Cards/LargeCard/LargeCard';
const MostPopular = () => {
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

export default MostPopular;