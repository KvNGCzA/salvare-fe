import React, { Component, Fragment } from 'react';
import { Link, withRouter } from "react-router-dom";
import './index.scss';
import logo from '../../images/logo.png';
import menu from '../../images/menu.svg';
import closeMenu from '../../images/close-menu.svg';

class Header extends Component {
  state = {
    sidebarLeft: '-100vw'
  }

  showSidebar = () => {
    const { sidebarLeft } = this.state;
    if (sidebarLeft === '-100vw') {
      return this.setState({  sidebarLeft: 0 })
    }
    return this.setState({  sidebarLeft: '-100vw' })
  }

  resetSidebar = () => this.setState({  sidebarLeft: '-100vw' })

  render() {
    const { location: { pathname } } = this.props;
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
                <li onClick={this.resetSidebar}>
                  <Link to='/donate' className={pathname === '/donate' ? 'active' : ''}>donate</Link>
                </li>
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
