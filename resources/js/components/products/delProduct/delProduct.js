import axios from 'axios'
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import './delProduct.css';
function DelProduct() {
    const initialState = { ProductName: '', ProductId: '', Price: '' };
    const [state, setState] = useState({});
    const [productInfo, setproductInfo] = useState(initialState);
    function handleChange(event) {
        const { name, value } = event.target;
        setproductInfo({ ...productInfo, [name]: value })
    }

    function onSubmit(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api/' + 'delProduct.php',
            headers: {
                'content-type': 'application/json'
            },
            data: productInfo
        })
            .then(result => {
                console.log(result.data)
                setState({
                    dataSent: result.data.sent,
                });
                setproductInfo(initialState);
                var x = document.getElementById("snackbar");
                x.className = "show";
                x.innerText = 'Product deleted Successfully';
                setTimeout(function(){
                     x.className = x.className.replace("show", "");
            }, 3000);
            })
            .catch(error => {
                setState({
                    error: error.message
                });
                var x = document.getElementById("snackbar");
                x.className = "show danger";
                x.innerText = 'Product already deleted';
                setTimeout(function(){
                     x.className = x.className.replace("show", "");
            }, 5000);
                console.log(state['error']);
            });
    }

    return(
        <div>
        <div id="Addproduct" className="info-content">
      <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> Delete Product
      </div>
      <div className="form">
        <form className="d-flex flex-direction-column w-100 align-items-center" action="#" method="post" onSubmit={onSubmit}
          enctype="text/plain">
          <div className="d-flex flex-direction-column createClub-container">
            <div className="d-flex flex-direction-row justify-center media">
              <input type="text" id="ProductName" name="ProductName" placeholder="Product Name" value={productInfo['ProductName']} onChange={handleChange} />
            </div>
            <div className="d-flex flex-direction-row justify-center media">
              <input type="text" id="ProductId" name="ProductId" placeholder="Product ID" required value={productInfo['ProductId']} onChange={handleChange}/>
            </div>
            <div className="d-flex flex-direction-row justify-center media">
              <textarea id="Price" name="Price" rows="5" cols="40" placeholder="Price" required value={productInfo['Price']} onChange={handleChange}></textarea>
            </div>
            <div className="d-flex w-100 flexdirection-row justify-center joinClubButton">
              <button className="btn clear" type="reset">Clear</button>
              <button className="btn club" type="submit">Delete Product</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
    )
}
export default DelProduct