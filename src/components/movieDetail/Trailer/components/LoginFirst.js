import React from 'react'
import SignInButton from './SignInButton'



function LoginFirst() {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-5 text-center ">
                        <p className="mt-5 font-weight-bold">Sign in for Comment in movie</p>
                        <p>
                            Keep Positive Remarks
                        </p>
                        <SignInButton />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default LoginFirst
