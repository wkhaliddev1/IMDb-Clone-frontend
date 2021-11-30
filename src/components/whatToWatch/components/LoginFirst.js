import React from 'react'
import SignInButton from './SignInButton'



function LoginFirst() {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-5 text-center ">
                        <p className="mt-5 font-weight-bold">Sign in to access your Watchlist</p>
                        <p>
                        Save shows and movies to keep track of what you want to watch.
                        </p>
                        <SignInButton />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default LoginFirst
