import React, { Component } from 'react';
import './index.scss';
import warning from '../../images/warning.svg';
import Buttons from '../../Components/Buttons';

class ReportACase extends Component {

  renderFormInput = ({ label, placeholder, type }) => {
    return (
      <div className="form-input" key={label}>
        <span>{label}</span>
        <input className="" placeholder={placeholder} type={type} required/>
      </div>
    );
  }

  render() {
    const fields = [
      { label: 'your full name', placeholder: 'e.g Christopher Akanmu', type: 'text' },
      { label: 'your phone number', placeholder: 'e.g 09000000011', type: 'tel' },
      { label: 'your email', placeholder: 'e.g christopher@example.com', type: 'email' },
      { label: 'state', placeholder: 'e.g Lagos', type: 'text' }
    ];

    return (
      <div className="report-page">
        <div className="header-title">
          <p className="title">report a case</p>
          <div className="warning">
            <img src={warning} alt="warning" className="warning-sign"/>
            <p>
              all your personal information will be kept private and will only be revealed to the lawyer who picks up your case
            </p>
          </div>
        </div>
        
        <div className="form-container">
          <form>
            <div className="form-body form-left">
              {fields.map(field => this.renderFormInput({...field }))}
              <div className="form-input radio-buttons">
                <span>is this case in court already?</span>
                <div>
                  <input className="" name="incourt" type="radio" value="yes"/>yes
                  <input className="" name="incourt" type="radio" value="no"/>no
                </div>
              </div>
            </div>
            <div className="form-body form-right">
              <div className="form-input">
                <span>short description</span>
                <textarea placeholder="e.g Young boy assaulted and extorted by Federal Sars"/>
              </div>
              <div className="form-input">
                <span>long description</span>
                <textarea className="last-textarea" placeholder="Try to provide as much information as possible including date of incident, location, etc"/>
              </div>
              <Buttons type="report submit button" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ReportACase;
