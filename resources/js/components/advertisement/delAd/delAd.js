import axios from 'axios'
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import './delAd.css';
function DeleteAdvertisement() {
    const initialState = { AdvertisementId: '', AdvertisementName: '', AdvertisementDescription: '' };
    const [state, setState] = useState({});
    const [productInfo, setadInfo] = useState(initialState);
    function handleChange(event) {
        const { name, value } = event.target;
        setadInfo({ ...productInfo, [name]: value })
    }

    function onSubmit(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api/' + 'delAd.php',
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
                setadInfo(initialState);
                var x = document.getElementById("snackbar");
                x.className = "show";
                x.innerText = 'Advertisement deleted Successfully';
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
                x.innerText = 'Advertisement already deleted';
                setTimeout(function(){
                     x.className = x.className.replace("show", "");
            }, 5000);
                console.log(state['error']);
            });
    }

    return(
        <div>
        <div id="Addproduct" className="info-content">
      <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> Delete Advertisement
      </div>
      <div className="form">
        <form className="d-flex flex-direction-column w-100 align-items-center" action="#" method="post" onSubmit={onSubmit}
          enctype="text/plain">
          <div className="d-flex flex-direction-column createClub-container">
            <div className="d-flex flex-direction-row justify-center media">
              <input type="text" id="AdvertisementName" name="AdvertisementName" placeholder="Advertisement Name" value={productInfo['AdvertisementName']} onChange={handleChange} />
            </div>
            <div className="d-flex flex-direction-row justify-center media">
              <input type="text" id="AdvertisementId" name="AdvertisementId" placeholder="Advertisement ID" required value={productInfo['AdvertisementId']} onChange={handleChange}/>
            </div>
            <div className="d-flex flex-direction-row justify-center media">
              <textarea id="text" name="AdvertisementDescription" rows="5" cols="40" placeholder="Advertisement Description" required value={productInfo['AdvertisementDescription']} onChange={handleChange}></textarea>
            </div>
            <div className="d-flex w-100 flexdirection-row justify-center joinClubButton">
              <button className="btn clear" type="reset">Clear</button>
              <button className="btn club" type="submit">Delete Advertisement</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
    )
}
export default DeleteAdvertisement