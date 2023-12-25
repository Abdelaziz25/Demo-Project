// OurClientsSection.js

import React from 'react';
import './OurClientsSection.css';
import Apple from '../images/apple.png';
import Intel from '../images/intel.png';
import IBM from '../images/ibm.png';
import Microsoft from '../images/microsoft.png';
import Google from '../images/google.png';
const OurClientsSection = () => {
  return (
    <div className="our-clients-section">
      <div className="section-title shared-text-styles">Our Clients</div>
      <div className="additional-text shared-text-styles">View All</div>
      <img src={Apple} alt="Apple" className="image1" />
      <img src={Intel} alt="INTEL" className="image2" />
      <img src={IBM} alt="IBM" className="image3" />
      <img src={Microsoft} alt="MICROSOFT" className="image4" />
      <img src={Google} alt="GOOGLE" className="image5" />
    </div>
  );
};

export default OurClientsSection;
