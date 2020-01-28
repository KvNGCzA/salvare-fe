import React from 'react';
import view from '../../images/view.svg';
import './index.scss';

export default ({ data: {shortDescription, state, status}, index }) => {
  return (
    <div className="case-card" key={index}>
      <div className="card-details">
        <p className="short-description">{shortDescription}</p>
        <div className="more-details">
          <p className="state">{state}, Nigeria</p>
          <p className={`status ${status === 'in court' ? 'active' : 'inactive'}`}>
            {status === 'in court' ? 'This case has been charged to court' : 'This case has not been charged to court'}
          </p>
        </div>
      </div>
      <button>
        view
        <img src={view} alt="view"/>
      </button>
    </div>
  );
}
