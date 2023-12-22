import React from 'react';
import Button from '../Buttons/SignupButton';
import Logo from '../../images/Logo.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './AppBar.css';
import InputBar from '../Input/InputBar';

const AppBar = () => {
  return (
    <div className="app-bar">
      <div className="app-bar-left">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="app-bar-center">
        <InputBar className="centered-input" />
      </div>
      <div className="app-bar-center">
        <div className="shopping-cart">
          <ShoppingCartOutlinedIcon className="icon" />
          <span className="login-text">Login</span>
        </div>
      </div>
      <div className="app-bar-right">
        <Button />
      </div>
    </div>
  );
};

export default AppBar;
