// CheckSentence.js

import React from 'react';
import PropTypes from 'prop-types';
import './CheckSentence.css';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const CheckSentence = ({ text }) => {
  return (
    <div className="check-sentence">
      <div className="check-icon">
        <CheckCircleOutlineOutlinedIcon style={{ width: '25px', height: '25px', color: '#343434' }} />
      </div>
      <div className="check-text">
        <p>
          {text}
        </p>
      </div>
    </div>
  );
};

CheckSentence.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CheckSentence;
