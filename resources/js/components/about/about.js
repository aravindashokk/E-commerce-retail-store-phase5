import React, {useEffect} from 'react'
import './about.css'
import Footer from "../footer/Footer";
function About() {
    useEffect(() => {
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('aboutTab').classList.add('active');
    });
    return (
        <div>
            <div className="container">
                <div className="font-oswald headings" style={{ marginTop: "0%" }}> Welcome to <br />Mercado Escolar</div>
                <div style={{ marginLeft: "10%", paddingLeft: "30px;" }}>
                    <p>
                    No more waiting. No more struggle. Sell or Buy your products at ease with Mercado Escolar.<br></br>
                    Your one-stop solution for selling products, purchasing products, posting advertisements, joining clubs and much more.
                    </p>
                </div>
            </div>
            <div>
                <h1 className="side-Heading">About Mercado Escolar</h1>
                <div className="about-content">
                    <p>
                    Mercado Escolar/ Marketplace is a start up Online Shopping Management Company with two branches one in Arlington, Texas and one in Irving, Texas.
                    We are planning to expand our business to other cities in the Texas.
                        <p>
                            The Main Philosophy of Mercado Escolar is to provide quality service to our students. At Insta Wash we provide various services to our students which will help them to do laundry at the comfort of their home. Look into our service page for more information regarding the service provided at Insta Wash.
                        </p>
                        <p>
                        The Main Philosophy of Mercado Escolar is to provide quality service to our students. At Mercado Escolar we provide various services to our students which will help them buy or sell products with one click. Look into our services page for more information regarding the services we provide.
                        </p>
                        <b>Our Motto at Mercado Escolar : No task is too difficult, no request is too demanding. We rise to the challenge, day by day and year after year. </b>
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default About