// SearchInput.js
import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './InputSearch.css'; 

const InputSearch = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="What do you want to learn?"
        className="input-field"
      />
    <button className="search-button">
        <SearchRoundedIcon className="search-icon" />
      </button>
    </div>
  );
};

export default InputSearch;
