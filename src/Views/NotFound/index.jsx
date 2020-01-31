import React from 'react';
import page_not_found from '../../images/page_not_found.svg';
import '../UnderConstruction/index.scss';
import { Link } from 'react-router-dom';
import Buttons from '../../Components/Buttons';

const NotFound = () => {
  return (
    <div className="construction-page">
        <img src={page_not_found} style={{ marginBottom: 30 }}alt="not found"/>
        <Buttons type="home button" to='/' text='go back home'/>
    </div>
  );
}

export default NotFound;
