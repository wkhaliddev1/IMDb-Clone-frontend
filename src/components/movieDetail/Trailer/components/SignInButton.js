import React from 'react'

function SignInButton() {

    const Login = () => {
        sessionStorage.setItem("lastURL", window.location.href)
        window.location.assign("https://localhost:3000/"+"login")

    }

    return (
        <div>
            <img id="IMDb-logo" src="https://images-na.ssl-images-amazon.com/images/G/01/imdb/authportal/images/www_imdb_logo._CB667618033_.png" onClick={Login}/>
        </div>
    )
}

export default SignInButton
