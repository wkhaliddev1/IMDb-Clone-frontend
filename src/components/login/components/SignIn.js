import React from 'react'

function SignIn() {

    const handleSignIn = (e) => {
        window.location.assign("https://localhost:3000/signin")
    }

    return (
        <div>
            <button className="btn btn-outline-light " onClick={handleSignIn}> 
                <i className="fa fa-imdb fa-lg float-left"></i> 
                Sign in with IMDb 
            </button>
        </div>
    )
}

export default SignIn
