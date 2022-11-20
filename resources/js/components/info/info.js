import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import laundryWoman from '../assets/images/2.png';
import arrowRight from '../assets/images/1.png';
import pickupDelivery from '../assets/images/Advertise.jpg';
function HeaderInfo() {
    return (
        <Router>
        {/* Info section below header */}
            <section className='info-section-container'>
                <div className="d-flex flex-direction-row justify-around info-link">
                    <p>
                        <span className="font-oswald text-header"> We help you sell, buy products and also post advertisements</span><br /><br />
                        <span className="about-description">Ease and quality are the core values of Mercado Escolar .<br />
                        Our mission is to provide convinence, effortless shopping experience with a level of service that exceeds your
          expectations</span><br />
                        <br /><Link to="/about" className="services-link">Read more about us <img className="arrow-right" alt='right arrow'
                            src={arrowRight} /></Link>
                    </p>
                    <img src={laundryWoman} alt='laundry and woman' />
                </div>
                <div className="d-flex flex-direction-row justify-around info-link">
                    <img src={pickupDelivery} alt='pickup and delivery'/>
                    <p>
                        <span className="font-oswald text-header"> And the cherry on top </span><br/>
                        <span className="about-description"> You can view posts, products and advertisements with one click </span><br />
                        <Link className="services-link" to="/services">Explore our Services <img className="arrow-right" alt='right arrow'
                            src={arrowRight} /></Link>
                    </p>
                </div>
                <hr className="page-break" />
            </section>
            <Switch>
                <Route path='/about'></Route>
                <Route path='/services'></Route>
            </Switch>
        </Router>
    );
}

export default HeaderInfo;