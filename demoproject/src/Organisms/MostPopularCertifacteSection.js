import React from 'react';
import './MostPopularCertifacteSection.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Search from'../images/search (2).png';
import IBM from'../images/ibm.png';
import Drive from '../images/Image 1.png';
import CardCertificate from './Cards/CardCertifcate';
const MostPopularCertificateSection = () => {
  return (
    <div className="most-popular-certificate-section">
          <ArrowBackIosIcon className="back2-icon" />
          <ArrowForwardIosIcon className='front2-icon'/>
       <div className="certificate-text">
        Popular Certificates
      </div>
      <div className="Secondary-text">
        Break into a new field. No prior experience <br/> necessary to get started
      </div>
      <div className="label-text">
        Master Track Certificates
      </div>
      <div className="custom-div">
      <div className="custom-div-text">
          IT Certificates
        </div>
      </div>
      <div className="label2-text">
        University Certificates
      </div>
      <div className="label3-text">
      Master Certificates
      </div>
      
      <CardCertificate top={385} left={80} image={Search}/>
      <CardCertificate top={385} left={391} image={IBM}/>
      <CardCertificate top={385} left={703} image={Drive}/>
      <CardCertificate top={385} left={1014} image={IBM}/>
      <button className="view2-more-btn">
        View More Certificates
      </button>
    </div>
  );
};

export default MostPopularCertificateSection;