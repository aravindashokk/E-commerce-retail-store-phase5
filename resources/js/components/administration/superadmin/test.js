import React, {useEffect} from "react";
import '../administration.css'
import add from '../../assets/images/plus.png';
import customerGraph from '../../assets/images/customer-graph-1.png';
import businessGraph from '../../assets/images/business-graph.svg';
import stackedArea from '../../assets/images/700px-7.1_stacked_area_chart.png';
import { addCustomer } from '../administration';
import { addDeliveries } from '../administration';
import { addproducts } from '../administration';
import { addOrder } from '../administration';
import { addManager } from '../administration';
import { populateTables } from "../administration";
import validateSession from "../../session/session";
function SuperAdmin () {
    var slideIndex = 1;
    useEffect(() => {
        validateSession('SuperAdmin');
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('authenticationTab').classList.add('active');
        document.getElementById('authenticationTab').childNodes[0].innerText = 'Super Admin';
        document.getElementById('cart').style.display='none';
    });
    setTimeout(()=> {
        populateTables();
        showSlides(slideIndex);
    },500);

     // Thumbnail image controls
     function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slides");
        var pills = document.getElementsByClassName("pills");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < pills.length; i++) {
            pills[i].className = pills[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "flex";
        pills[slideIndex - 1].className += " active";
    }
    return (
      <section className='administration-bg'>
      <div className="container" id="heading-container">
            <div className="font-oswald heading"> Mercado Escolar Super Admin </div>
        </div>
       {/* Admin page graph ans stats */}
        <div id="graph-view" className="graph-view d-flex flex-direction-column w-100">
            <div className="d-flex w-100 number-container">
                <div className="number-card font-oswald">
                    <span>Total No of users:</span>
                    <span className="font-roboto">598</span>
                </div>
                <div className="number-card font-oswald">
                    <span>Active users:</span>
                    <span className="font-roboto">422</span>
                </div>
                <div className="number-card font-oswald">
                    <span>Total No of employees:</span>
                    <span className="font-roboto">13</span>
                </div>
                <div className="number-card font-oswald">
                    <span>No of School Clients:</span>
                    <span className="font-roboto">45</span>
                </div>
            </div>
            <div className="carousel-container admin-container d-flex flex-direction-column align-items-center">
                <div className="slides fade w-100">
                    <img src={customerGraph} alt='add-record'/>
                </div>

                <div className="slides fade w-100">
                    <img src={businessGraph} alt='add-record'/>
                </div>

                <div className="slides fade w-100">
                    <img src={stackedArea} alt='add-record'/>
                </div>

                {/* The pills  */}
                <div className="pill-container">
                    <span className="pills" onClick={() => currentSlide(1)}></span>
                    <span className="pills" onClick={() => currentSlide(2)}></span>
                    <span className="pills" onClick={() => currentSlide(3)}></span>
                </div>
            </div>
        </div>
         {/* Admin and manager section tables structure  */}
        <div className="manage-container d-flex flex-direction-column align-items-around justify-evenly">

             {/* Horizontal row section containing multiple tables  */}
            <div className="d-flex flex-direction-row justify-around section-container">

                 {/* Manage Student table  */}
                <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Students</span>
                    <div className="table-container">
                        <table id="student-table" className="material-table">
                            <tbody>
                                <tr>
                                    <th>Student ID</th>
                                    <th>Student Name</th>
                                    <th>School Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={addOrder} src={add} height="13px"
                                            width="13px" alt='add records'/></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                 {/* Manage School table  */}
                <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Schools</span>
                    <div className="table-container">
                        <table id="products-table" className="material-table">
                        <tbody>
                            <tr>
                                <th>School ID</th>
                                <th>School Name</th>
                                <th>Address</th>
                                <th>Phone No</th>
                                <th>Email</th>
                                <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                        onClick={addproducts} src={add} height="13px"
                                        width="13px" alt='add-record'/></th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

             {/* Horizontal row section containing multiple tables  */}
            <div className="d-flex flex-direction-row justify-around section-container">

                 {/* Manage Business table  */}
                <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Business</span>
                    <div className="table-container">
                        <table id="customer-table" className="material-table">
                            <tbody>
                                <tr>
                                    <th>Business ID</th>
                                    <th>Business Name</th>
                                    <th>Business Owner</th>
                                    <th>Email</th>
                                    <th>Phone no</th>
                                    <th className="text-align-center"><img className="cursor-pointer" onClick={addCustomer}
                                            title="Add Record" src={add} height="13px"
                                            width="13px" alt='add-record'/></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                 {/* Manage Posts  */}
                <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Posts</span>
                    <div className="table-container">
                        <table id="delivery-table" className="material-table">
                        <tbody>
                            <tr>
                                <th>Post ID</th>
                                <th>Post Name</th>
                                <th>Posted By</th>
                                <th>Posted Time</th>
                                <th>Post Description</th>
                                <th className="text-align-center"><img className="cursor-pointer" onClick={addCustomer}
                                        title="Add Record" src={add}
                                        height="13px" width="13px" alt='add-record'/></th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}
export default SuperAdmin;