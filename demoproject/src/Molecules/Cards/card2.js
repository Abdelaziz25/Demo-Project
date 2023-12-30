import React from 'react';
import './card2.css'; // Make sure to create Card2.css for styling
import Google from '../../images/ibm.png'
const Card2 = () => {
  return (
    <div className="white2-card" >
    <div className="upper-part">
      <img src={Google} alt="certificate" className="centered-image" />
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

export default Card2;