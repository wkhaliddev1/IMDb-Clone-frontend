import React, { useState } from 'react'
import { useStore } from 'react-redux';
import "../../../css/signinform.css"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getTokenThunk } from '../logic/actions/signInAction';
import store from "../../index"
import jwt_decode from "jwt-decode";


function SignInFrom() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [token, settoken] = useState("")
    //Redux Store
    const dispatch = useDispatch()
    

    const onEmailChange = (event) => {
        
        setemail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setpassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault() 
        // sessionStorage.setItem('emailSignIn', email);
        const user = {
            email, password
        }
        dispatch(getTokenThunk(user));
        console.log('[TESTING]: ',token)
        
    }
    
    //Accessing the value from store for token
    store.subscribe(() => {
        settoken(store.getState().movies.token)
    })

    if (token != ""){
        
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
    
    // console.log('[TESTING]: ',token) //Testing
   
   



    const onClickSignup = (event) => {
        event.preventDefault()
        window.location.assign('https://localhost:3000/signup')
    }

    const clickHandleImdb = () => {
        window.location.assign('https://localhost:3000/')
    }

    return (
       
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-4" id="form">
                    <button id="img-imdb"> <img  src="https://images-na.ssl-images-amazon.com/images/G/01/imdb/authportal/images/www_imdb_logo._CB667618033_.png" onClick={clickHandleImdb}></img> </button>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={onEmailChange}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={onPasswordChange} />
                        </div>
                        <input id="signin-button" type="submit" className="btn btn-primary" value="Submit"  />
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <small id="emailHelp" className="form-text text-muted text-center">New to IMDb?</small>
                        <input id="signup-button" type="submit" className="btn btn-primary" value="Create Your IMDb Account" onClick={onClickSignup}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default connect()(SignInFrom)
