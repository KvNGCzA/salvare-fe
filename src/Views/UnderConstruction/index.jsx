import React from 'react';
import under_construction from '../../images/under_construction.svg';
import './index.scss';

const UnderConstruction = () => {
  return (
    <div className="construction-page">
        <p>this page is under construction, please come back soon.</p>
        <img src={under_construction} alt="under construction"/>
    </div>
  );
}

export default UnderConstruction;
