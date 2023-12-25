import React from 'react';
import './CardCertifcate.css';

const CardCertificate = ({ top, left, image }) => {
    return (
      <div className="white2-card" style={{ top, left }}>
        <div className="upper-part">
          <img src={image} alt="certificate" className="centered-image" />
        </div>
        <div className="lower-part">
          Google IT Support Professional Certificate
        </div>
        <div className="google-text">
          Google
        </div>
      </div>
    );
  };

export default CardCertificate;