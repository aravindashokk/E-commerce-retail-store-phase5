import React, {useEffect} from 'react'
import './payment.css'
import radio from '../assets/images/radio.jpg';
import Footer from "../footer/Footer";
// import '../../../Static website/src/themes/dark.css'
function Payment() {
    // useEffect(() => {
    //     document.getElementsByClassName('nav-item active')[0].classList.remove('active');
    //     document.getElementById('tray').classList.add('active');
    // });
    return (
        <div>
            <div className="container">
                <div className="font-oswald heading"> Billing Info </div>
            </div>
            <div className="row">
                <div className="col-75">
                <div className="container">
                    <form action="">
                    
                    <div className="row">
                        <div className="col-50">
                        <h3>Billing Address</h3>
                        <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Enter Full Name"/>
                        <label for="email"><i className="fa fa-envelope"></i> Email</label>
                        <input type="text" id="email" name="email" placeholder="Enter Email"/>
                        <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                        <input type="text" id="adr" name="address" placeholder="Enter Address"/>
                        <label for="city"><i className="fa fa-institution"></i> City</label>
                        <input type="text" id="city" name="city" placeholder="Enter City"/>
            
                        <div className="row">
                            <div className="col-50">
                            <label for="state">State</label>
                            <input type="text" id="state" name="state" placeholder="Enter State"/>
                            </div>
                            <div className="col-50">
                            <label for="zip">Zip Code</label>
                            <input type="text" id="zip" name="zip" placeholder="Enter Zip Code"/>
                            </div>
                        </div>
                        </div>
            
                        <div className="col-50">
                        <h3>Payment</h3>
                        <label for="fname">Accepted Cards</label>
                        <div className="icon-container">
                            <i className="fa fa-cc-visa" style={{color:'navy'}}></i>
                            <i className="fa fa-cc-amex" style={{color:'blue'}}></i>
                            <i className="fa fa-cc-mastercard" style={{color:'red'}}></i>
                            <i className="fa fa-cc-discover" style={{color:'orange'}}></i>
                        </div>
                        <label for="cname">Name on Card</label>
                        <input type="text" id="cname" name="cardname" placeholder="Enter Cardholder Name"/>
                        <label for="ccnum">Credit card number</label>
                        <input type="text" id="ccnum" name="cardnumber" placeholder="Enter 16-digit card number"/>
                        <div className="row">
                            <div className="col-50">
                            <label for="expyear">Expiry Month/Year</label>
                            <input type="text" id="expyear" name="expyear" placeholder="Enter expiry month/year"/>
                            </div>
                            <div className="col-50">
                            <label for="cvv">CVV</label>
                            <input type="text" id="cvv" name="cvv" placeholder="Enter CVV"/>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    <label>
                        <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
                    </label>
                    <input type="submit" value="Continue to checkout" className="btn"/>
                    </form>
                </div>
                </div>
                <div className="col-25">
                <div className="Cart">
                    <div className="Cart-Container">
                        <div className="Header">
                            <h3 className="Heading">Shopping Cart</h3>
                            <h5 className="Action">Remove all</h5>
                        </div>
                        <div className="Cart-Items">
                            <div className="image-box">
                            <img src={radio} style={{height:'80px'}} />
                            </div>
                            <div className="about">
                            <h1 className="title">Product 1</h1>
                            <h3 className="subtitle">details</h3>
                            </div>
                            <div className="prices">
                                <div className="amount">$2.99</div>
                                <div className="save"><u>Save for later</u></div>
                                <div className="remove"><u>Remove</u></div>
                            </div>
                        </div>
                        <div className="Cart-Items">
                            <div className="image-box">
                            <img src={radio} style={{height:'80px'}} />
                            </div>
                            <div className="about">
                            <h1 className="title">Product 2</h1>
                            <h3 className="subtitle">details</h3>
                            </div>
                            <div className="prices">
                                <div className="amount">$4.99</div>
                                <div className="save"><u>Save for later</u></div>
                                <div className="remove"><u>Remove</u></div>
                            </div>
                        </div>
                        <hr/>
                        <div className="checkout">
                            <div className="total">
                            <div>
                            <div className="Subtotal">Sub-Total</div>
                            <div className="items">2 items</div>
                            </div>
                            <div className="total-amount">$7.98</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
            <Footer/>
        </div>
    
    );
}
export default Payment;