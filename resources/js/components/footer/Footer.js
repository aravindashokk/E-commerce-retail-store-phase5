import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Footer.css';
import instagram from '../assets/images/instagram.png'
import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.png'
import yelp from '../assets/images/yelp.png'
// import Home from './Home';
function Footer() {
return(
    //footer containing links and copyright information 
    <Router>
    <footer className="w-100 d-flex flex-direction-column align-items-center">
      <div className="social-media-links d-flex flex-direction-row justify-around">
        <a href = 'https://www.instagram.com'><img src= {instagram} alt='logo-instagram'/></a>
        <a href = 'https://www.fb.com'><img src= {facebook} alt='logo-facebook'/></a>
        <a href = 'https://www.twitter.com'><img src= {twitter} alt='logo-twitter'/></a>
        <a href = 'https://www.yelp.com'><img src= {yelp} alt='logo-yelp'/></a>
      </div>
      <ul className="footer-links d-flex flex-direction-row justify-around">
        <li className="footer-link-item"><a href='/'>Home</a></li>
        <li className="footer-link-item"><a href='/services'>Services</a></li>
        <li className="footer-link-item"><a href='/about'>About</a></li>
        <li className="footer-link-item"><a href='/'>Terms</a></li>
        <li className="footer-link-item"><a href='/'>Privacy Policy</a></li>
      </ul>
      <p className="copyright d-flex justify-center">Mercado Escolar © 2022. All Rights Reserved.</p>
    </footer>
    </Router>);
}

export default Footer;