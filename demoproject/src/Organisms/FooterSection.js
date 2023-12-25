// FooterSection.js

import React from 'react';
import './FooterSection.css'; // Import the external CSS file
import footerImage from '../images/Logo.png'; // Replace with the actual path to your image
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const FooterSection = () => {
  return (
    <div>
    <div className="footer-section">
      <img
        src={footerImage}
        alt="Footer Logo"
        className="footer-image"
      />
      <div className="text-subimage">
        <p>Discover the fastest, most effective<br/> way to build your skills with courses, <br/>certificates, and degrees. Get started with us.</p>
      </div>
      <div className="facebook-icon">
        <FacebookRoundedIcon className="icon" />
      </div>
      <div className="twitter-icon">
        <TwitterIcon className="icon" />
      </div>
      <div className="youtube-icon">
        <YouTubeIcon className="icon" />
      </div>
      <div className="linkdin-icon">
        <LinkedInIcon className="icon" />
      </div>
      <div className="whatapp-icon">
        <WhatsAppIcon className="icon" />
      </div>
      <div className="footer-text">
        <div className="main-text">Sitemap</div>
        <div className="additionalll-text">Home</div>
        <div className="additional2-text">About us</div>
        <div className="additional3-text">Contact us</div>
      </div>
      <div className="footer2-text">
        <div className="main-footer2-text">Our Clients</div>
        <div className="additional-footer2-text">IBM</div>
        <div className="additional2-footer2-text">Intell</div>
        <div className="additional3-footer2-text">Apple</div>
      </div>
      <div className="footer3-text">
        <div className="main-footer3-text">Support</div>
        <div className="additional-footer3-text">Terms & Conditions</div>
        <div className="additional2-footer3-text">Privacy Policy</div>
      </div>
    </div>
    <div className="parent-container">
      <div className="end-text">
      Designed and developed at inova LLC
      </div>
    </div>
  </div>
    
    
  );
};

export default FooterSection;
