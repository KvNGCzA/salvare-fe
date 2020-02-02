import React, { Component, Fragment } from 'react';
import { Link, withRouter } from "react-router-dom";
import './index.scss';
import logo from '../../images/logo.png';
import menu from '../../images/menu.svg';
import closeMenu from '../../images/close-menu.svg';
import Buttons from '../Buttons';

class Header extends Component {
  state = {
    sidebarLeft: '-100vw',
    showSignupModal: 'flex'
  }

  showSidebar = () => {
    const { sidebarLeft } = this.state;
    if (sidebarLeft === '-100vw') {
      return this.setState({  sidebarLeft: 0 })
    }
    return this.setState({  sidebarLeft: '-100vw' })
  }

  resetSidebar = () => this.setState({  sidebarLeft: '-100vw' })

  renderFormInput = ({ label, placeholder, type }) => {
    return (
      <div className="form-input" key={label}>
        <span>{label}</span>
        <input className="" placeholder={placeholder} type={type} required/>
      </div>
    );
  }

  toggleSignupModal = () => {
    if (this.state.showSignupModal === 'none') {
      return this.setState({ showSignupModal: 'flex' })
    }
    return this.setState({ showSignupModal: 'none' })
  }

  render() {
    const { location: { pathname } } = this.props;
    const fields = [
      { label: 'full name', placeholder: 'e.g Christopher Akanmu', type: 'text' },
      { label: 'email', placeholder: 'e.g christopher@example.com', type: 'email' },
      { label: 'phone number', placeholder: 'e.g 09000000011', type: 'tel' },
      { label: 'password', placeholder: '', type: 'passwordd' }
    ];
    return (
      <header>
        <div className="header">
          <img src={logo} alt="salvare logo"/>
          <nav>
            <ul>
              <li>
                <Link to='/' className={pathname === '/' ? 'active' : ''}>home</Link>
              </li>
              <li>
                <Link to='/report-a-case' className={pathname === '/report-a-case' ? 'active' : ''}>report a case</Link>
              </li>
              <li>
                <Link to='/solve-a-case' className={pathname === '/solve-a-case' ? 'active' : ''}>solve a case</Link>
              </li>
              {/* <li>
                <Link to='/donate' className={pathname === '/donate' ? 'active' : ''}>donate</Link>
              </li> */}
              <li>
                <Link to='/about' className={pathname === '/about' ? 'active' : ''}>about us</Link>
              </li>
            </ul>
          </nav>
  
          <nav>
            <ul>
              <li>login</li>
              <li onClick={this.toggleSignupModal}>sign up</li>
            </ul>
          </nav>

          <div className="signup-overlay" style={{ display: this.state.showSignupModal }}>
            <div className="modal modal--signup">
            <img onClick={this.toggleSignupModal} src={closeMenu} alt="salvare closemenu-icon" className="menu-icon menu-icon--close" />
              <div className="modal-image signup-image" />
              <div className="form-content">
                <p>are you a lawyer?</p>
                <p>register to help</p>
                <Buttons type="linkedin button" text="register with linkedin"/>
                <Buttons type="google button" text="register with google"/>
                <form>
                  {fields.map(field => this.renderFormInput({...field }))}
                  <p>By clicking register you agree to all <span>Terms and Conditions</span></p>
                  <button>register</button>
                </form>
                <p>already have an account? <span>login</span></p>
              </div>
            </div>
          </div>

        </div>

        <div className="header mobile-header">
          <img src={menu} alt="salvare menu-icon" className="menu-icon" onClick={this.showSidebar}/>
          <Link to="/">
            <img src={logo} alt="salvare logo" className="logo"/>
          </Link>
          <Link to="/profile">
            <div className="profile-image"/>
          </Link>
          <div className="side-bar" style={{ left: this.state.sidebarLeft }}>
            <nav>
              <img src={closeMenu} alt="salvare closemenu-icon" className="menu-icon menu-icon--close" onClick={this.showSidebar}/>
              <ul>
                <li onClick={this.resetSidebar}>
                  <Link to='/' className={pathname === '/' ? 'active' : ''}>home</Link>
                </li>
                <li onClick={this.resetSidebar}>
                  <Link to='/report-a-case' className={pathname === '/report-a-case' ? 'active' : ''}>report a case</Link>
                </li>
                <li onClick={this.resetSidebar}>
                  <Link to='/solve-a-case' className={pathname === '/solve-a-case' ? 'active' : ''}>solve a case</Link>
                </li>
                {/* <li onClick={this.resetSidebar}>
                  <Link to='/donate' className={pathname === '/donate' ? 'active' : ''}>donate</Link>
                </li> */}
                <li onClick={this.resetSidebar}>
                  <Link to='/about' className={pathname === '/about' ? 'active' : ''}>about us</Link>
                </li>
              </ul>
            </nav>
            <nav>
              <ul>
                <li onClick={this.resetSidebar}>
                  <Link to='/' className={pathname === '/login' ? 'active' : ''}>login</Link>
                </li>
                <li onClick={this.resetSidebar}>
                  <Link to='/' className={pathname === '/signup' ? 'active' : ''}>signup</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
