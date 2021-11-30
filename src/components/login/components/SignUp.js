import React, { useState } from 'react'
import "../../../css/signup.css"
import { useDispatch } from 'react-redux';
import { postSignUpThunk } from '../logic/actions/signUpAction';
import { getTokenThunk } from '../logic/actions/signInAction';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

function SignInFrom() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [RePassword, setRePassword] = useState('')
    const [error, seterror] = useState(false)
    const dispatch = useDispatch();
    const signUpMessage = useSelector(state => state.movies.signUpMessage)

    const onEmailChange = (event) => {
        
        setemail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setpassword(event.target.value);
    }

    const onRePasswordChange = (event) => {
        setRePassword(event.target.value)
    }

    const onFirstNameChange = (event) => {
        setfirstname(event.target.value);
    }

    const onLastNameChange = (event) => {
        setlastname(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if ( password!== RePassword ) {
            seterror(true)
        }
        else {
            seterror(false)

            const data = {
                first_name: firstname,
                last_name: lastname,
                password: password,
                email: email,
                age: "14",
                gender: "male",
                bio: "bio"
            }
            console.log("[Before Post]", data)
            dispatch(postSignUpThunk(data))
        }

        
    }

    const onClickSignIn = (event) => {
        event.preventDefault();
        window.location.assign('https://localhost:3000/signin')
    }

    const onClickImdb = (event) => {
        event.preventDefault();
        window.location.assign('https://localhost:3000/')
    }

    if (signUpMessage === 'Created') {
        window.location.assign("https://localhost:3000/signin")
    }

    return (
       
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-4" id="form">
                    <button id="img-imdb" > <img  src="https://images-na.ssl-images-amazon.com/images/G/01/imdb/authportal/images/www_imdb_logo._CB667618033_.png" onClick={onClickImdb}></img> </button>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">First Name</label>
                            <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter first name" onChange={onFirstNameChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Last Name</label>
                            <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter last name" onChange={onLastNameChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={onEmailChange}/>
                            {signUpMessage && <p className="form-text" style={{"color" : "red"}}>{signUpMessage}</p>}
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={onPasswordChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword2">Re-enter Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Re-Password" onChange={onRePasswordChange} />
                        </div>
                        {error && <p style={{"color" : "red"}}>Passwords dont match</p>}
                        <input id="signin-button" type="submit" className="btn btn-primary" value="Create IMDb Account" />
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <small id="emailHelp" className="form-text text-muted text-center">New to IMDb?</small>
                       <div>Already have a Account <a id="signin-link" onClick={onClickSignIn} style={{color: "blue"}}>Sign in</a></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default connect()( SignInFrom )
