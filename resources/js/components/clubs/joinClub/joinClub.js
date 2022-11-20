import axios from 'axios'
import React, { Component } from 'react'
import './joinClub.css'
function JoinClub() {
    return(
        <div>
        <div id="joinClub" className="info-content">
      <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> Join a Club
      </div>
      <div className="form">
        <form className="d-flex flex-direction-column w-100 align-items-center" action="#" method="post"
          enctype="text/plain">
          <div className="d-flex flex-direction-column joinClub-container">
            <div className="d-flex flex-direction-row justify-center media">
              <input type="text" id="fname" name="fname" placeholder="First Name" required/>
              <input type="text" id="lname" name="lname" placeholder="Last Name" required/>
            </div>
            <div className="d-flex flex-direction-row justify-center media">
              <input type="text" id="email" name="email" placeholder="Email" required/>
              <input type="number" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" required/>
            </div>
            <div className="d-flex flex-direction-row justify-center media">
              <select name="club" id="club" className="font-roboto clubSelect" required>
                <option hidden selected>Select a club</option>
                <option value="sports">Sports Club</option>
                <option value="social">Social Club</option>
                <option value="book">Book Club</option>
                <option value="tech">Tech Club</option>
              </select>
            </div>
            <div className="d-flex w-100 flexdirection-row justify-center joinClubButton">
              <button className="btn clear" type="reset">Clear</button>
              <button className="btn club" type="submit">Join</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
    )
}
export default JoinClub