import React, { Component, Fragment, useState } from 'react'
import FacebookLogin from './FacebookLogin'
import GoogleLogin from './GoogleLogin'
import SignIn from './SignIn'
import "../../../css/login.css"
import { connect, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {postPersonalDetailThunk} from "../../movies/logic/actions/movieActions"
import { getTokenThunk } from '../logic/actions/signInAction'
import jwt_decode from 'jwt-decode'
import store from "../../index"
// import { useCookies } from "react-cookie"


function Login() {
    const dispatch = useDispatch();
    //setting cookies
    // const [cookies, setCookie] = useCookies(['username'])
    const state_token = useSelector(state => state.movies.token)
    const [token, settoken] = useState(state_token)
 
    const LoginFailure = (err) => {
        console.log(err);
        console.log("[Making Post Request]")
    }

    const LoginSuccess = (user) => {
        dispatch(postPersonalDetailThunk(user));
        
        // window.location.assign("https://localhost:3000/");

        const email = user._profile.email
        const password = "password"
        const user_data = {
            email, password 
        }
        dispatch(getTokenThunk(user_data));
    }
    
    //Accessing the value from store for token
    store.subscribe(() => {
        settoken(store.getState().movies.token)
    })

    if (token != "" && token!=undefined){
        
        const decoded_token = jwt_decode(token.access);
        console.log(decoded_token)
        sessionStorage.setItem('LogedUserEmail', decoded_token.email);
        sessionStorage.setItem('LogedUserFirstName', decoded_token.name);
        sessionStorage.setItem('LogedAccessToken', token.access);
        sessionStorage.setItem('LogedUserID', decoded_token.user_id);
        if (sessionStorage.getItem('lastURL')){
            window.location.assign(sessionStorage.getItem('lastURL'))
        }
        else {window.location.assign("https://localhost:3000/");}
    }

    const singUpUrl = () => {
        window.location.assign("https://localhost:3000/signup")
    }




    return (
        <div>
            <div className="container" id="social-container">
                <div className="row justify-content-md-center">
                    
                    
                    <div className="col-3 ">
                        <h2>Sign in</h2> 
                        <div className="social-buttons">
                        
                            <FacebookLogin 
                                provider = "facebook"
                                appId = "400498594861171"
                                onLoginSuccess={LoginSuccess}
                                onLoginFailure={LoginFailure}
                                scope = "user_gender, user_age_range, groups_access_member_info, email, instagram_basic"
                            />

                            <GoogleLogin 
                                provider = "google"
                                appId = "12097122372-p8hhul5uc0u1fhp2bm253olot8isffos.apps.googleusercontent.com"
                                onLoginSuccess={LoginSuccess}
                                onLoginFailure={LoginFailure}
                                // scope = "user_gender, user_age_range, groups_access_member_info, email, instagram_basic"
                            />
                            <SignIn
                                
                            />
                            
                            <button id="new-button" className="btn btn-outline-light" onClick={singUpUrl}>Create a New Account </button>
                        </div>
                        {/* <label for="email-input">Email Address</label>
                        <input type="email" id="email-input" placeholder="Enter Email"></input><br></br>

                        <label for="email-input">Password</label>
                        <input type="email" id="email-input" placeholder="Password"></input><br></br> */}
                        
                        {/* Form */}
                        {/* <div className="form-group"></div> */}
                    </div>
                    <div id="info-login" className="col-4">
                        {/* Informations */}
                        <h3>Benefits of your free IMDb account</h3>
                        <h5>Personalized Recommendations</h5>
                        <p>Your Watchlist</p>
                        <h5>Personalized Recommendations</h5>
                        <p>Track everything you want to watch and receive e-mail when movies open in theaters.</p>
                        <h5>Your Ratings</h5>
                        <p>Rate and remember everything you've seen.</p>
                        <h5>Contribute to IMDb</h5>
                        <p>Add data that will be seen by millions of people and get cool badges.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect() (Login)

