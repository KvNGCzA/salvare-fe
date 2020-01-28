import React from 'react';
import mailSend from '../../images/mail-send.svg';
import './index.scss';

const reportSubmitButton = () => {
  return (
    <button className="btn--report-submit btn">
      submit
      <img src={mailSend} alt="send icon"/>
    </button>
  );
}

export default (props) => {
  switch (props.type) {
    case 'report submit button':
      return reportSubmitButton();
    default:
      return reportSubmitButton();
  }
}