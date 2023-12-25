import React from 'react';
import TopTemplate from '../Templates/TopTemplate';
import ThirdTemplate from '../Templates/ThirdTemplate';
import OurClientsTemplate from '../Templates/OurClientsTemplate';
import FooterTemplate from '../Templates/FooterTemplate';
import './FirstPage.css';
import MostPopularTemplate from '../Templates/MostPopularTemplate';
import MostPopularCertifacteTemplate from '../Templates/MostPopularCertifacteTemplate';
import LearningProcessTemplate from '../Templates/LearningProcessTemplate';
const FirstPage = () => {
    return (
      <div >
        <TopTemplate/>
        <LearningProcessTemplate/>
        <ThirdTemplate/>
        <MostPopularTemplate/>
        <OurClientsTemplate/>
        <MostPopularCertifacteTemplate/>
        <FooterTemplate/>
      </div>
    );
  }
  
export default FirstPage;