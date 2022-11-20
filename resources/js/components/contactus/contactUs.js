import React, {useEffect} from 'react'
import './contactUs.css'
import Footer from "../footer/Footer";
// import '../../../Static website/src/themes/dark.css'
function ContactUs() {
    useEffect(() => {
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('contactTab').classList.add('active');
        document.getElementById('cart').style.display='none';

    });
    return (
        <div>
            <div className="container">
                <div className="font-oswald heading"> Contact Us </div>
            </div>
            <div className="formContainer contact-form">
                <div className="field-container">  
                <div className="innerHeading">
                    <p>Your feedback matters. Write to us if you have any questions, queries or suggestions regarding any
                    page/content </p>
                </div>  
                <div className="form">
                    <form class="d-flex flex-direction-column w-100" action="admin@Mercado Escolar.com" method="post" enctype="text/plain">
                        <div class="d-flex flex-direction-row mediaPhone">
                            <input type="text" id="fname" name="fname" placeholder="Enter Full Name" required/>
                        </div>
                        <div class="d-flex flex-direction-row mediaPhone">
                            <input type="text" id="email" name="email" placeholder="Enter Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                        </div>
                        <div class="d-flex flex-direction-row mediaPhone">
                            <input type="text" id="PhoneNumber" name="PhoneNumber" placeholder="Enter Phone Number" required/>
                        </div>
                        <div class="d-flex flex-direction-row mediaPhone">
                        <textarea id="query" class="font-roboto" name="query" placeholder="Enter your query" required></textarea>
                        </div>
                        <div class="d-flex flex-direction-row buttons mediaPhone">
                        <button class="btn clear" type="reset">Clear</button>
                        <button class="btn submit" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    
    );
}
export default ContactUs