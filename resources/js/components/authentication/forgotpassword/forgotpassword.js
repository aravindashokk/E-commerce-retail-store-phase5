import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import signup from '../../assets/images/signup.png'
import Authentication from "../authentication";
import axios from 'axios';
function Forgotpassword() {
    const initialState = { email: '' };
    const [state, setState] = useState({});
    const [emailInfo, setEmailInfo] = useState(initialState);
    function handleChange(event) {
        const { name, value } = event.target;
        setEmailInfo({ ...emailInfo, [name]: value })
    }

    function onSubmit(event) {
        event.preventDefault();
        var re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        debugger;
        if(!re.test(emailInfo.email)) {
            var x = document.getElementById("snackbar");
            x.className = "show danger";
            x.innerText = 'Enter a valid Email ID';
            setTimeout(function(){
                 x.className = x.className.replace("show", "");
        }, 8000);
        return;
        }
        axios({
            method: 'post',
            url: 'http://localhost/wdm_phase4/React/src/api/' + 'forgotPassword.php',
            headers: {
                'content-type': 'application/json'
            },
            data: emailInfo
        })
            .then(result => {
                console.log(result.data)
                setState({
                    dataSent: result.data.sent,
                });
                setEmailInfo(initialState);
                var x = document.getElementById("snackbar");
                x.className = "show";
                x.innerText = 'Login Details have been sent to your email';
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
                x.innerText = 'Account not found. Please Register';
                setTimeout(function(){
                     x.className = x.className.replace("show", "");
            }, 5000);
                console.log(state['error']);
            });
    }
    return (
        <Router>
        <Switch>
        <Route exact path='/forgotpassword'>
        {/* forgot password section */}
        <div className="d-flex flex-direction-row justify-around forgotPassword-section fade">
            <div className="forgotPassword-container">
                <div className="d-flex justify-center forgotPassword-header font-oswald">Password Assistance</div>
                <form className="d-flex flex-direction-column w-100" onSubmit={onSubmit} encType="text/html">
                <div class="d-flex flex-direction-column">
                    <input type="email" id="email" name="email" placeholder="Username / Email"  value={emailInfo['email']} onChange={handleChange}></input>
                </div>
                    <div className="d-flex flex-direction-column align-items-center">
                        <button className="btn continue-btn" type="submit">Continue</button>
                        <br />
                        <p>Changed your mind? <Link className='link-style'
                            to="/authentication">Click</Link> here</p>
                    </div>
                </form>
            </div>
            <div className="image-container">
                <img src={signup} width="550px" height="500px" alt="registrationimage"/>
            </div>
        </div>
        </Route>
        <Route exact path='/authentication'><Authentication/></Route>
        </Switch>
        </Router>
    )
}

export default Forgotpassword;