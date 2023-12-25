import React from 'react';
import TopTemplate from '../Templates/TopTemplate';
import ThirdTemplate from '../Templates/ThirdTemplate';
import OurClientsTemplate from '../Templates/OurClientsTemplate';
import FooterTemplate from '../Templates/FooterTemplate';
import './FirstPage.css';
import MostPopularSection from '../Organisms/MostPopularSection';
const FirstPage = () => {
    return (
      <div >
        <TopTemplate/>
        <ThirdTemplate/>
        <MostPopularSection/>
        <OurClientsTemplate/>
        <FooterTemplate/>
      </div>
    );
  }
  
export default FirstPage;