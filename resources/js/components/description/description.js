import React from "react";
import laundry from '../assets/images/1.png'
function HeaderDescription() {
  return (
    // header seaction describing Mercado Escolar 
    <div className="poster d-flex justify-around">
      <img src={laundry} height="400" width="400" alt='laundy-done'/>
      <div className="d-flex flex-direction-column justify-center">
        <p className="font-oswald text-header">Sell or Buy products in no time.</p>
        <p className="text-description">No more waiting. No more struggle. Sell or Buy your products at ease with Mercado Escolar.<br />
        Your one-stop solution for selling products, purchasing products, posting advertisements, joining clubs and much more.</p>
      </div>
    </div>
  );
}

export default HeaderDescription;