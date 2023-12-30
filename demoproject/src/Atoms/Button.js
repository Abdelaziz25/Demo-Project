import React from 'react';
import './Button.css'; // Import the external CSS file

const Button = ({ width, height, children, onClick }) => {
  const buttonStyle = {
    width,
    height,
  };

  return (
    <button className="button" style={buttonStyle} onClick={onClick}>
    <span className="button-text">{children}</span>
  </button>
  );
};

export default Button;