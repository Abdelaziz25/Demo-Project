import React from 'react';
import '../PopularCertifcate/PopularCertifcate.css';
import MainText from '../../Atoms/MainText/MainText';
import SubText from '../../Atoms/SubText/SubText';
import Slider from '../../Molecules/Slider/Slider';
import Card2 from '../../Molecules/Cards/ModifyCard/NewCard';
import Button from '../../Atoms/Button/Button';
const PopularCertifcate = () => {
  return (
    <div className="seventh-template">
        <div className="center-container">
            <MainText>Popular Certificates</MainText>
            <SubText> Learn the latest skills to reach your <br/> professional goals</SubText>
            <Slider texts={['Master Track Certificates', 'IT Certificates', 'University Certificates', 'Master Certificates']} />
            <div className="card-container">
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
             
            </div>
            <div className="button-container">
        <Button width="314px" height="52px">
        View More Certificates
        </Button>
      </div>
        </div>
    </div>
    );
  };
  
  export default PopularCertifcate;