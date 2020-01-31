import React from 'react';
import mailSend from '../../images/mail-send.svg';
import './index.scss';
import { Link } from 'react-router-dom';

const reportSubmitButton = () => {
  return (
    <button className="btn--report-submit btn">
      submit
      <img src={mailSend} alt="send icon"/>
    </button>
  );
}

const homeButton = (props) => {
  return (
    <Link className="landing-button" to={props.to}>{props.text}</Link>
  );
}

export default (props) => {
  switch (props.type) {
    case 'report submit button':
      return reportSubmitButton();
    case 'home button':
      return homeButton(props);
    default:
      return reportSubmitButton();
  }
}