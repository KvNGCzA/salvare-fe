import React from 'react';
import { Link } from 'react-router-dom';

import mailSend from '../../images/mail-send.svg';
import linkedin_icon from '../../images/linkedin_icon.svg';
import google_icon from '../../images/google_icon.svg';
import './index.scss';

const reportSubmitButton = () => {
  return (
    <button className="btn--report-submit btn">
      submit
      <img src={mailSend} alt="send icon"/>
    </button>
  );
}

const homeButton = ({ to, text }) => {
  return (
    <Link className="landing-button" to={to}>{text}</Link>
  );
}

const googleButton = ({ text }) => {
  return(
    <button id="google-signin" className="social-button social-button--google">
      <div>
        <img src={google_icon} alt="google sign in"/>
      </div>
      <div>{text}</div>
    </button>
  );
}

const linkedinButton = ({ text }) => {
  return(
    <button className="social-button social-button--linkedin">
      <div>
        <img src={linkedin_icon} alt="google sign in"/>
      </div>
      <div>{text}</div>
    </button>
  );
}

export default (props) => {
  switch (props.type) {
    case 'report submit button':
      return reportSubmitButton();
    case 'home button':
      return homeButton(props);
    case 'google button':
      return googleButton(props);
    case 'linkedin button':
      return linkedinButton(props);
    default:
      return reportSubmitButton();
  }
}