import React from 'react';
import './LandingPage.css';
import HeroSection from '../../Templates/HeroSection/HeroSection';
import LearningProcess from '../../Templates/LearningProcess/LearningProcess';
import TopCategroies from '../../Templates/TopCategroies/TopCategroies';
import BenefitsOfLearning from '../../Templates/BenefitsOfLearning/BenefitsOfLearning';
import MostPopular from "../../Templates/MostPopular/MostPopular";
import OurClients from '../../Templates/OurClients/OurClients';
import PopularCertifcate from '../../Templates/PopularCertifcate/PopularCertifcate';
import Footer from '../../Templates/Footer/Footer';
import DesginandDeveloped from '../../Templates/DesginandDeveloped/DesginandDeveloped';
const LandingPage = () => {
    return (
      <div >
            <HeroSection/>
            <LearningProcess/>
            <TopCategroies/>
            <BenefitsOfLearning/>
            <MostPopular/>
            <OurClients/>
            <PopularCertifcate/>
            <Footer/>
            <DesginandDeveloped/>

            
      </div>
    );
  }
  
export default LandingPage;