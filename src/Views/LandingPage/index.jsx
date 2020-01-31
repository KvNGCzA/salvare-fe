import React from 'react';
import { Link } from "react-router-dom";
import './index.scss';
import briefcase from '../../images/briefcase.svg';
import gautlet from '../../images/gautlet.svg';
import scale from '../../images/scale.svg';
import businessman from '../../images/businessman.svg';
import Buttons from '../../Components/Buttons';


const info = [{
  image: scale,
  title: 'active lawyers',
  number: 1500
}, {
  image: gautlet,
  title: 'cases in court',
  number: 150
}, {
  image: briefcase,
  title: 'open cases',
  number: 280
}];

const InfoCard = ({ image, title, number }) => {
  return (
    <div className="info-card">
      <img src={image} alt="icon"/>
      <p className="number">{number}</p>
      <p className="title">{title}</p>
    </div>
  );
}

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="page-content">
        <div className="left-content">
          <p className="content-title">let us help you find a lawyer for free</p>
          <Buttons type="home button" to='report-a-case' text='report a case'/>
          <div className="info-cards">
            {info.map(({ image, title, number }) => <InfoCard
              image={image} title={title} number={number} key={title}
            />)}
          </div>
          <p className="content-title">are you a lawyer?</p>
          <Buttons type="home button" to='solve-a-case' text='solve a case'/>
        </div>
        <div className="right-content">
          <img src={businessman} alt="business man"/>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
