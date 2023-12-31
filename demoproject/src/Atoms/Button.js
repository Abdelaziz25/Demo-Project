import React from 'react';
import './Button.css'; 

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