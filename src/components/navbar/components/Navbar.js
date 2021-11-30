import React, { Component } from 'react'
import "../../../css/navbar.css"

export class Navbar extends Component {
    render() {

        const Login = () => {
            window.location.assign("https://localhost:3000/"+"login")

        }

        const Logout = () => {
            sessionStorage.clear();
            console.log(sessionStorage.getItem('LogedUserEmail'))
            window.location.assign("/")
            
        }

        return (
            <div className="col" id="centered">
                <nav id="navbar-custom" className="navbar navbar-expand-lg navbar-light bg-light">
                    
                    <a className="navbar-brand" href="https://localhost:3000"><button className="btn btn-warning" >IMDb</button></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a  className="fa fa-bars fa-2x" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        {/* User login section */}
                        <li className="nav-item dropdown">
                            <a  className="fa fa-user fa-2x" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span id="loged-user">{sessionStorage.getItem('LogedUserFirstName') && sessionStorage.getItem('LogedUserFirstName')}</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {sessionStorage.getItem('LogedUserEmail') ?  
                                <a className="dropdown-item" href="#" onClick={Logout}>Log out</a> :
                            <a className="dropdown-item" href="#" onClick={Login}>Sign IN</a>}
                            {/* <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a> */}
                            </div>
                        </li>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
