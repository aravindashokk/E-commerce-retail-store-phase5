import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import hamBurger from '../assets/images/hmaburger-menu.png'
import logoutImg from '../assets/images/logout.png';
import './Header.css';
import Home from '../home/Home';
import React, {useEffect} from 'react';
import Authentication from '../authentication/authentication';
import Registration from '../authentication/registration/registration';
import SuperAdmin from '../administration/superadmin/superadmin';
import SchoolAdmin from '../administration/schooladmin/schooladmin';
import BusinessOwner from '../administration/businessowner/businessowner';
import Student from '../student/student';
import ContactUs from  '../contactus/contactUs'
import About from '../about/about';
import Service from '../services/service';
import User from '../user/user';
import Visitor from '../visitor/visitor';
import Payment from '../payment/payment';
import { logout } from '../session/session';
function Header() {
  return (
    <Router>
    {/* navigation bar and links */}
    <header className="d-flex justify-between nav-header">
    <div className="header-title d-flex"><Link className="logo font-oswald" to="/">Mercado Escolar</Link></div>
    <nav className="navbar">
      <ul className="d-flex justify-around flex-direction-row">
        <li className="nav-item active" id="homeTab">
          <Link className="nav-Link" to="/">Home</Link>
        </li>
        <li className="nav-item" id="aboutTab">
          <Link className="nav-Link" to="/about">About</Link>
        </li>
        <li className="nav-item" id="servicesTab">
          <Link className="nav-Link" to="/services">Services</Link>
        </li>
        <li className="nav-item" id="contactTab">
          <Link className="nav-Link" to="/contactus">Contact</Link>
        </li>
        <li className="nav-item">
          <a className="nav-Link" href="http://axa4889.uta.cloud/wdmblog/">Blog</a>
        </li>
        <li className="nav-item" id="authenticationTab">
          <Link className="nav-Link" to="/authentication">Login/Register</Link>
        </li>
        <li className="nav-item" id="logout-tab"  onClick={logout}>
          <p>Logout</p>
          <img src={logoutImg} height="20px" width="20px" ></img>
        </li>
        <li id="cart">
          <div id="tray">
            <div className="count">
            
            </div>
            <Link className="nav-Link" to="/Payment">
              <i className="fa fa-shopping-basket fa-2x" aria-hidden="true"></i>
            </Link>
           </div>
        </li>
      </ul>
    </nav>
  </header>

  {/* side menu navigation for responsiveness  */}
  <header className="d-flex justify-between menu-header" style={{display: 'none'}}>
    <div className="header-title d-flex justify-between"><img alt='hamburger menu icon' className="logo font-oswald cursor-pointer" src= {hamBurger} height="28px" width="28px" onClick={showSideNav}/> 
      <div className="header-title d-flex"><a className="logo font-oswald" href="./index.html">Mercado Escolar</a></div></div>
    <div className="side-bar-navigation fade" id="side-bar-navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><a href='http://axa4889.uta.cloud/wdmblog/'></a></li>
        <li><Link to="/authentication">Login / Register</Link></li>
      </ul>
    </div>
  </header>
  <div id="snackbar">Toaster Message</div>
  <Switch>
      <Route exact path='/'><Home/></Route> 
      <Route exact path='/about'><About/></Route>
      <Route exact path='/services'><Service/></Route>
      <Route exact path='/contactus' component={ContactUs}></Route>
      <Route exact path='/authentication'><Authentication/></Route>
      <Route exact path='/registration'><Registration/></Route>
      <Route exact path='/superadmin'><SuperAdmin/></Route>
      <Route exact path='/schooladmin'><SchoolAdmin/></Route>
      <Route exact path='/businessowner'><BusinessOwner/></Route>
      <Route exact path='/student'><Student/></Route>
      <Route exact path='/user'><User/></Route>
      <Route exact path='/visitor'><Visitor/></Route>
      <Route exact path='/payment'><Payment/></Route>
  </Switch>
  </Router>
  );

  function showSideNav() {
    let displayValue = document.getElementById('side-bar-navigation').style.display;
    if (displayValue === 'none' || displayValue === '') { document.getElementById('side-bar-navigation').style.display = 'flex'; } else {
      document.getElementById('side-bar-navigation').style.display = 'none';
    }
  }
}

export default Header;
