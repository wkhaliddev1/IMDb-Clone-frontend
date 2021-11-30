import React from 'react'
import SocialLogin from 'react-social-login';

function GoogleLogin(props) {
    const { children, triggerLogin, ...remain_props } = props
    return (
        <div>
            <button onClick={triggerLogin} {...remain_props} className="btn btn-outline-light "> 
                <i className="fa fa-google fa-lg float-left" ></i> 
                    Sign in with Google
                    {/* {children} */}
            </button>
        </div>
    )
}

export default SocialLogin(GoogleLogin);
