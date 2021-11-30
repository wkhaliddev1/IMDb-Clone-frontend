import React, { Children, useEffect } from 'react'
import "../../../css/Navbar2.css"
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchPersonalDetail } from '../../movies/logic/actions/movieActions';

function MayRender() {
    const movieState = useSelector(state => state.movies.imgMovies);
    const [search, setsearch] = useState('')
    const dispatch = useDispatch()

    const onInputSearch = (event) => {
        setsearch(event.target.value)
    }

    var result = null
    var query = null

    if ( movieState ) {
        query = movieState.filter(movie => movie.movie.title.toLowerCase().indexOf(search)!==-1)
        result = query.map(movie => 
            <div id="search-result" className="p-1 text-left">
                <a id="clickable" key={movie.id} onClick={() => movieClick(movie.id)}>
                    <img id="result-image" className="text-left" src={movie.image}></img>
                    <span className="p-2 result-title">{movie.movie.title}</span>
                </a>
                <hr />
            </div>
            
            )
    }

    const imdbPage = () => {
        window.location.assign("https://localhost:3000");
    }

    const Login = () => {
        window.location.assign("https://localhost:3000/"+"login")

    }

    const Logout = () => {
        sessionStorage.clear();
        console.log(sessionStorage.getItem('LogedUserEmail'))
        window.location.assign("/")
        
    }

    const movieClick = (movieID) => {
        window.location.assign("https://localhost:3000/movieId/" + movieID)
    }

    useEffect(() => {
        dispatch(fetchPersonalDetail())
    }, [])

    return (
        <div className="text-center">
            
            <nav>
                <ul id="nav-items">
                    <li><img id="IMDb-logo" src="https://images-na.ssl-images-amazon.com/images/G/01/imdb/authportal/images/www_imdb_logo._CB667618033_.png" onClick={imdbPage}/></li>
                    <li className="nav-item dropdown">
                        <a  className="fa fa-bars fa-2x" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {/* Menu */}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    
                    <li>
                        <input id="movie-search" onChange={onInputSearch}></input>
                        <i id="search-icon" class="fa fa-search"></i>
                        {/* <Search getresult={(e)=>getResult(e)}/> */}
                        
                    </li>
                    {/* <li><button>Search</button></li> */}
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
                </ul>
            </nav>
            <div className="container z-result">
                <div className="row justify-content-md-center">
                    {/* <div className="col-8 search-result">{search ? result : null}</div> */}
                    <div className="col-8 search-result d-flex flex-column">{search ? result : null}</div>
                </div>
            </div>
            
            
        </div>
    )
}

export default MayRender
