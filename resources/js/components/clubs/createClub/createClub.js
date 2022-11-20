import axios from 'axios'
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import './createClub.css'
function CreateClub() {
    const initialState = { clubName: '', email: '', schoolId: '', clubDes: '' };
    const [state, setState] = useState({});
    const [clubInfo, setClubInfo] = useState(initialState);
    function handleChange(event) {
        const { name, value } = event.target;
        setClubInfo({ ...clubInfo, [name]: value })
    }

    function onSubmit(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api/' + 'createClub.php',
            headers: {
                'content-type': 'application/json'
            },
            data: clubInfo
        })
            .then(result => {
                console.log(result.data)
                setState({
                    dataSent: result.data.sent,
                });
                setClubInfo(initialState);
                var x = document.getElementById("snackbar");
                x.className = "show";
                x.innerText = 'Club Created Successfully';
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
                x.innerText = 'Club Email Address already present';
                setTimeout(function(){
                     x.className = x.className.replace("show", "");
            }, 5000);
                console.log(state['error']);
            });
    }

    return(
        <div>
        <div id="createClub" className="info-content">
      <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> Create a Club
      </div>
      <div className="form">
        <form className="d-flex flex-direction-column w-100 align-items-center" action="#" method="post" onSubmit={onSubmit}
          enctype="text/plain">
          <div className="d-flex flex-direction-column createClub-container">
            <div className="d-flex flex-direction-row justify-center media">
              <input type="text" id="clubName" name="clubName" placeholder="Club Name" value={clubInfo['clubName']} onChange={handleChange} />
            </div>
            <div className="d-flex flex-direction-row justify-center media">
              <input type="text" id="email" name="email" placeholder="Club Email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={handleChange} onInvalid={(event) => event.target.setCustomValidity('Please provide a valid email address')}
              onInput={(event) => event.target.setCustomValidity('')}
                  value={clubInfo['email']}  />
            </div>
            <div className="d-flex flex-direction-row justify-center media">
              <input type="text" id="schoolId" name="schoolId" placeholder="School ID" required value={clubInfo['schoolId']} onChange={handleChange}/>
            </div>
            <div className="d-flex flex-direction-row justify-center media">
              <textarea id="clubDes" name="clubDes" rows="5" cols="40" placeholder="Club Description" required value={clubInfo['clubDes']} onChange={handleChange}></textarea>
            </div>
            <div className="d-flex w-100 flexdirection-row justify-center joinClubButton">
              <button className="btn clear" type="reset">Clear</button>
              <button className="btn club" type="submit">Create Club</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
    )
}
export default CreateClub