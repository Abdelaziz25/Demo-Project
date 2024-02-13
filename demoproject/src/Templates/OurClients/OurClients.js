

import React from 'react';
import '../OurClients/OurClients.css';
import MainText from '../../Atoms/MainText';
import Apple from '../../images/apple.png';
import Intel from '../../images/intel.png';
import IBM from '../../images/ibm.png';
import Microsoft from '../../images/microsoft.png';
import Google from '../../images/google.png';
const SixthTemplate = () => {
  return (
    <div >
    <div className="white-box">
     
      <MainText className="MainText">Our Clients</MainText>
      <div className="view-all-text">View All</div>
      <div className="photo-container">
          <img src={Apple} alt="Apple" />
          <img src={Intel} alt="Intel" />
          <img src={IBM} alt="IBM" />
          <img src={Microsoft} alt="MICRO" />
          <img src= {Google} alt="GOOGLE" />
        </div>
    </div>
  </div>
  );
};

export default SixthTemplate;
