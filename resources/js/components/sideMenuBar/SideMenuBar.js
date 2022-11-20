import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Chat from '../chat/chat';
import JoinClub from '../clubs/joinClub/joinClub';
import CreateClub from '../clubs/createClub/createClub';

import PlaceOrder from '../placeorder/placeorder';
import RegisterIncident from '../registerIncident/registerIncident';
import SubscribeService from '../subscribeService/subscribeService';
import './SideMenuBar.css'
function SideMenuBar () {
    return (
        <Router>
            <div className="d-flex flex-direction-row container">
                <div className="font-oswald heading "> Hello User </div>
            </div>
            <div className="user-dashboard-container h-100 d-flex flex-direction-row">
                <div className="sideNav">
                    <ul className="d-fle flex-direction-column space-between">
                        <li className="sideNavItem " id="order">
                            <Link className="sideNav-link" name="products" to="/user">Products</Link>
                        </li>
                        <li className="sideNavItem" id="subscribe" >
                            <Link className="sideNav-link" name="clubs" to="/CreateClub">Clubs</Link>
                        </li>
                        <li className="sideNavItem" id="createClub" >
                            <Link className="sideNav-link" name="createClubs" to="/CreateClub">Create a Club</Link>
                        </li>
                        <li className="sideNavItem" id="joinClub" >
                            <Link className="sideNav-link" name="joinClubs" to="/JoinClub">Join a Club</Link>
                        </li>
                        <li className="sideNavItem" id="register" >
                            <Link className="sideNav-link" name="profile" to="/Register">My Profile</Link>
                        </li>
                        <li className="sideNavItem" id="register" >
                            <Link className="sideNav-link" name="orders" to="/Register">My Orders</Link>
                        </li>
                        <li className="sideNavItem" id="chat">
                            <Link className="sideNav-link" name="chats" to="/Chat">Chat</Link>
                        </li>
                    </ul>
                </div>
                <section className='d-flex w-100 justify-center'>
            <Switch>
                <Route exact path='/JoinClub'><JoinClub/></Route>
                <Route exact path='/CreateClub'><CreateClub/></Route>
                <Route exact path='/user'><PlaceOrder/></Route>
                <Route exact path='/Subscribe'><SubscribeService/></Route>
                <Route exact path='/Register'><RegisterIncident/></Route>
                <Route exact path='/Chat'><Chat/></Route>
            </Switch>
            </section>
            </div>
            
        </Router>
    )
}
export default SideMenuBar