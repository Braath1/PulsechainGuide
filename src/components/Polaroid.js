import React from 'react';
import './Polaroid.css';

const Polaroid = ({ imageSrc, caption }) => {
  return (
    <div className="polaroid-container">
      <div className="polaroid-frame">
        <img className="polaroid-image" src={imageSrc} alt="Polaroid" />
        <div className="polaroid-caption">{caption}</div>
      </div>
    </div>
  );
};

export default Polaroid;
