import React from 'react'
import SocialLogin from 'react-social-login';

function FacebookLogin(props) {
    const { children, triggerLogin, ...remain_props } = props
    return (
        <div>
            <button onClick={triggerLogin} {...remain_props} className="btn btn-outline-light "> 
                <i className="fa fa-facebook fa-lg float-left"></i> 
                    Sign in with Facebook
                    {/* {children} */}
            </button>
        </div>
    )
}

export default SocialLogin(FacebookLogin);
