import React from 'react';
import './AppBar.css'; // Import the external CSS file
import InputBar from '../Atoms/InputSearch'; // Assuming InputBar is in the same directory
import Button from '../Atoms/Button'; // Assuming Button is in the same directory
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Logo from '../images/Logo.png';
const AppBar = () => {
  return (
    <div className="app-bar">
      <img
        src={Logo} // Replace with the actual path to your image
        alt="Logo"
        className="logo"
      />
      <InputBar />
      <div className="icon">
        <ShoppingCartOutlinedIcon className="cart-icon" />
      </div>
      <div className="login-text">
        <span className="login-label">Login</span>
      </div>
      <Button width="115px" height="38px">
        Sign Up
      </Button>
    </div>
  );
};

export default AppBar;
