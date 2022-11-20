import {React} from "react";
import specialOffer from '../assets/images/special-offer.png'
import fivestars from '../assets/images/maverick-mentors.png'
import fourstars from '../assets/images/uta-radio.png'
import fourandhalfstars from '../assets/images/cse.jpg'
import threeandhalfstars from '../assets/images/3.png'

function Carousel() {
  var slideIndex = 1;
  setTimeout(() => {
    showSlides(slideIndex)
  },1000);
//   Thumbnail image controls
function currentSlide(n) {
  debugger
  slideIndex = n;
  showSlides(n);
}

function showSlides(n) {
  var i;
  debugger;
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
    //  carousel content
    <div className="carousel-container home-carousel d-flex flex-direction-column align-items-center">
      <div className="slides fade w-100">
        <div className="carousel d-flex align-items-center justify-around">
          <span>
            <p className="text-header font-damion offer-info">Flat 20% off</p> <span className="font-oswald"> first time
              customers only. Terms and Condtions apply.</span>
          </span>
          <img src={specialOffer} alt='special-offer' height="280px" width="280px"/>
        </div>
      </div>

      <div className="slides fade w-100">
        <div className="carousel review-content d-flex justify-around">
          <div className="font-oswald d-flex flex-direction-column justify-center">Post an advertisement</div>
          <div className="font-oswald d-flex flex-direction-column justify-evenly price-listing font-roboto">
            <span>Product advertisement: &ensp; 20$ per pound</span>
            <span>Club advertisement: &ensp; 10$ per pound</span>
            <span>Website advertisement: &ensp; 40$ per pound</span>
          </div>
          <div className="font-oswald d-flex flex-direction-column justify-evenly font-roboto">
            <span>Offers advertisement: &ensp; 15$</span>
            <span>Event advertisement: &ensp; 25$</span>
            <span>Service advertisement: &ensp; 30$</span>
          </div>
        </div>
      </div>

      <div className="slides fade w-100">
        <div className="carousel review-content d-flex flex-direction-column">
          <div className="font-oswald d-flex justify-center">Join the club</div>
          <div className="customer-review d-flex w-100"><span>Uta Radio<img src={fourstars} alt='fourstars'/></span>
            <span>Maverick Mentors<img src={fivestars} alt='fivestars'/></span></div>
          <div className="customer-review d-flex w-100"><span>cse dept<img src={fourandhalfstars} alt='four&halfstars'/></span>
            <span>Uta student orgs<img src={threeandhalfstars} alt='threeandhalfstars'/></span></div>
        </div>
      </div>

     {/* The pills  */}
      <div className="pill-container">
        <span className="pills" onClick={() => currentSlide(1)}></span>
        <span className="pills" onClick={() => currentSlide(2)}></span>
        <span className="pills" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
}
export default Carousel;