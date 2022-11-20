import React, {useEffect} from "react";
import UserSideMenul from '../../sideMenuBarBO/SideMenuBarBO';
// import '../administration.css';
import add from '../../assets/images/plus.png';
import { addCustomer } from '../administration';
import { addDeliveries } from '../administration';
import { addEmployee } from '../administration';
import { addOrder } from '../administration';
import { addTasks } from '../administration';
import { addproducts } from '../administration';
import { populateTables } from "../administration";
import validateSession from "../../session/session";
function BusinessOwner () {
    
    useEffect(() => {
        validateSession('BusinessOwner');
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('authenticationTab').classList.add('active');
    });
    return(
        <section className="user-page hide-section">
        <UserSideMenul/>
        </section>
    )
}
export default BusinessOwner 