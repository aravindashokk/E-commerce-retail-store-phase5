import React, {useEffect} from 'react'
import './service.css'
import adv from '../assets/images/adv.gif'
import clubs from '../assets/images/clubs.png'
import radio from '../assets/images/radio.jpg'
import razer from '../assets/images/razer.jpg'
import cdc from '../assets/images/cdc.jpg'
import posts from '../assets/images/posts.gif'
import Footer from "../footer/Footer";
function Service() {
    useEffect(() => {
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('servicesTab').classList.add('active');
        document.getElementById('cart').style.display='none';
    });
    return (
        <div>
            <div className="container">
                <div className="font-oswald heading"> Services </div>
            </div>
            <div className="flex-container">
                <div className="inner-flex-container" style={{ backgroundColor: "#3e3e3e", maxWidth: "30%" }}>
                    <div className="responsive"><a href="../../authentication"><img src={posts} style={{ height: "100%", width: "100%", objectFit: "contain" }} alt='posts'/></a></div>
                    <div className="services-heading"><p className="font-oswald" style={{ fontSize: "1.5rem" }}>Post.</p></div>
                    <div className="services-text"><p >Content can be shared using Mercado Escolar services among the community and help's in building socio-relationships with your 
      audience when they engage with your posts</p></div>
                </div>
                <div className="inner-flex-container" style={{ backgroundColor: "#3e3e3e", maxWidth: "30%" }}>
                    <div className="responsive"><a href="../../authentication"><img src={adv} style={{ height: "100%", width: "100%", objectFit: "contain" }} alt='adv' /></a></div>
                    <div className="services-heading"><p className="font-oswald" style={{ fontSize: "1.5rem" }}>Advertisement</p></div>
                    <div className="services-text"><p >Mercado Escolar provides advertisement services of communication in which a product, brand or service is promoted to a viewership in order to attract
       interest, engagement, and sales </p></div>
                </div>
                <div className="inner-flex-container" style={{ backgroundColor: "#3e3e3e", maxWidth: "30%" }}>
                    <div className="responsive"><a href="../../authentication"><img src={clubs}  style={{ height: "100%", width: "100%", objectFit: "contain" }} /></a></div>
                    <div className="services-heading"><p className="font-oswald" style={{ fontSize: "1.5rem" }}>Clubs</p></div>
                    <div className="services-text"><p >Student clubs are a fundamental part of the diverse and dynamic community and Mercado Escolar provides wide range 
      of leadership development and enhance collegiate experience</p></div>
                </div>
            </div>
            <div className="flex-container">
                <div className="inner-flex-container" style={{ backgroundColor: "#3e3e3e", maxWidth: "30%" }}>
                    <div className="responsive"><a href="../../authentication"><img src={razer} style={{ height: "100%", width: "100%", objectFit: "contain" }} alt='razer'/></a></div>
                    <div className="services-heading"><p className="font-oswald" style={{ fontSize: "1.5rem" }}>Razer Deathadder gaming mouse</p></div>
                    <div className="services-text"><p >Faster, durable and enrichng mouse experience at your fingertips at $14.99</p></div>
                </div>
                <div className="inner-flex-container" style={{ backgroundColor: "#3e3e3e", maxWidth: "30%" }}>
                    <div className="responsive"><a href="../../authentication"><img src={radio} style={{ height: "100%", width: "100%", objectFit: "contain" }} alt='radio' /></a></div>
                    <div className="services-heading"><p className="font-oswald" style={{ fontSize: "1.5rem" }}>Portable CD Player</p></div>
                    <div className="services-text"><p >Redefine music experience with portability at just $12.99</p></div>
                </div>
                <div className="inner-flex-container" style={{ backgroundColor: "#3e3e3e", maxWidth: "30%" }}>
                    <div className="responsive"><a href="../../authentication"><img src={cdc}  style={{ height: "100%", width: "100%", objectFit: "contain" }} /></a></div>
                    <div className="services-heading"><p className="font-oswald" style={{ fontSize: "1.5rem" }}>Cracking the Coding Interview Book</p></div>
                    <div className="services-text"><p >Unlock your true potential at $19.99</p></div>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}
export default Service