// components/Placeholder.js
import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import '../styles/placeholder.css';

const Placeholder = () => (
  <div className="placeholder">
    <ClipLoader color={"#2ecc71"} loading={true} size={50} />
  </div>
);

export default Placeholder;
