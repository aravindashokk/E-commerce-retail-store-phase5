import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './authentication.css'
import Login from "./login/login";
import Footer from "../footer/Footer";
function Authentication() {
    return(
        <Router>
        <section className='authentication-section'>
        <Switch>
        <Route exact path='/authentication'><Login/></Route>
        </Switch>
        <Footer/>
        </section>
        </Router>
    )
}

export default Authentication;