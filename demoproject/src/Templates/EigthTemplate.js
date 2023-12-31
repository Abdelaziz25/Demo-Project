import React from 'react';
import './EightTemplate.css'; 
import Logo from '../images/Logo.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const EightTemplate = () => {
  return (
    <div className="custom-div">
      <div className='footer-conatiner'>
        <div>
        <img className='img-footer'
      src={Logo}
      alt="Logo"
      style={{ width: '266px', height: '59px' }}
    />
        
        <div className="additional-text">
        Discover the fastest, most effective<br/>
         way to build your skills with courses,<br/> certificates, and degrees.
         <br/> Get started with us.
      </div>
      <div className="social-icons">
        <FacebookRoundedIcon className='iconStyle' />
        <TwitterIcon className='iconStyle' />
        <YouTubeIcon className='iconStyle' />
        <WhatsAppIcon className='iconStyle' />
        <LinkedInIcon className='iconStyle' />
      </div>
        </div>
     
      <div className="text ">
        Sitemap
        <div className='add-margin'>
        <div className="sub-text style-2">Home</div>
            <div className="sub-text style-1">About us</div>
            <div className="sub-text">Contact us</div>
        </div>
        
        </div>
      <div className="text">Our Clients
      <div className='style-3 add-margin'>
      <div className="sub-text style-1">IBM</div>
            <div className="sub-text ">Intell</div>
            <div className="sub-text">Apple</div>
      </div>
      
      </div>
      <div className='margin-right'>
      <div className="text">Support
      <div  className='margin-left add-margin2'>
      <div className="sub-text ">Terms & Conditions</div>
      <div className="sub-text style-4">Privacy Policy</div>
      </div>
     
      </div>
     
      
      </div>
      </div>
  </div>
  );
};

export default EightTemplate;
