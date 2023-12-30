import React from 'react';
import './MainText.css'; // Import the external CSS file

const MainText = ({ children }) => {
  return <div className="golden-text main-text">{children}</div>;
};

export default MainText;