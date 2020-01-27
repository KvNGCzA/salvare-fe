import React, { Component, Fragment } from 'react';
import { Link, withRouter } from "react-router-dom";
import './index.scss';
import logo from '../../images/logo.png';
import menu from '../../images/menu.svg';

class Header extends Component {
  showSidebar = () => {

  }

  render() {
    const { location: { pathname } } = this.props;
    return (
      <Fragment>
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
              <li>
                <Link to='/donate' className={pathname === '/donate' ? 'active' : ''}>donate</Link>
              </li>
              <li>
                <Link to='/about' className={pathname === '/about' ? 'active' : ''}>about us</Link>
              </li>
            </ul>
          </nav>
  
          <nav>
            <ul>
              <li>login</li>
              <li>sign up</li>
            </ul>
          </nav>
        </div>
        <div className="header mobile-header">
          <img src={menu} alt="salvare menu-icon" className="menu-icon" />
          <Link to="/"><img src={logo} alt="salvare logo" className="logo"/></Link>
          <div className="profile-image"/>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Header);
