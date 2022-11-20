import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Chat from '../chat/chat';
import AddProduct from '../products/addProduct/addProduct';
import DelProduct from '../products/delProduct/delProduct'
import AddAd from '../advertisement/addAd/addAd';
import DelAd from '../advertisement/delAd/delAd';
// import JoinClub from '../advertisement/addAd/addAd';
// import CreateClub from '../advertisement/deleteAd/deleteAd';

import './sideMenuBarBO.css'
function SideMenuBarBO () {
    return (
        <Router>
            <div className="d-flex flex-direction-row container">
                <div className="font-oswald heading "> Hello Business Owner </div>
            </div>
            <div className="user-dashboard-container h-100 d-flex flex-direction-row">
                <div className="sideNav">
                    <ul className="d-fle flex-direction-column space-between">
                        <li className="sideNavItem" id="addProduct" >
                            <Link className="sideNav-link" name="addProduct" to="/addProduct">Add Product</Link>
                        </li>
                        <li className="sideNavItem" id="delProduct" >
                            <Link className="sideNav-link" name="delProduct" to="/delProduct">Delete Product</Link>
                        </li>
                        <li className="sideNavItem" id="addAd" >
                            <Link className="sideNav-link" name="addAd" to="/addAd">Add Advertisement</Link>
                        </li>
                        <li className="sideNavItem" id="delAd" >
                            <Link className="sideNav-link" name="delAd" to="/delAd">Delete Advertisement</Link>
                        </li>
                        <li className="sideNavItem" id="chat">
                            <Link className="sideNav-link" name="chats" to="/Chat">Chat</Link>
                        </li>
                    </ul>
                </div>
                <section className='d-flex w-100 justify-center'>
            <Switch>
                <Route exact path='/addProduct'><AddProduct/></Route>
                <Route exact path='/delProduct'><DelProduct/></Route>
                <Route exact path='/addAd'><AddAd/></Route>
                <Route exact path='/delAd'><DelAd/></Route>
                <Route exact path='/Chat'><Chat/></Route>
            </Switch>
            </section>
            </div>
            
        </Router>
    )
}
export default SideMenuBarBO;