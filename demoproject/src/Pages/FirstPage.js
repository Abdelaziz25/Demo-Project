import React from 'react';
import TopTemplate from '../Templates/TopTemplate';
import ThirdTemplate from '../Templates/ThirdTemplate';
import OurClientsTemplate from '../Templates/OurClientsTemplate';
import FooterTemplate from '../Templates/FooterTemplate';
import './FirstPage.css';
const FirstPage = () => {
    return (
      <div >
        <TopTemplate/>
        <ThirdTemplate/>
        <OurClientsTemplate/>
        <FooterTemplate/>
      </div>
    );
  }
  
export default FirstPage;