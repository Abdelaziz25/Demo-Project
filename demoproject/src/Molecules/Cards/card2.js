import React from 'react';
import '../Cards/card2.css'; 
import Google from '../../images/ibm.png'
const Card2 = () => {
  return (
    <div className="white2-card" >
    <div className="upper-part">
      <img src={Google} alt="certificate" className="centered-image" />
    </div>
    <div className="lower-part lower2-part">
      Google IT Support 
    </div>
    <div className="lower-part lower3-part">
    Professional Certificate
    </div>
    <div className="google-text">
      Google
    </div>
  </div>
  );
};

export default Card2;