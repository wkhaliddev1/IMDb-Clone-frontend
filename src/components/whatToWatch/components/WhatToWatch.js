import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBookmarkedMovies } from '../logic/actions/bookmarkedActions'
import movies_with_cover_photo from "../logic/utils/with_cover_photo"
import "../../../css/whatToWatch.css"
import App from "../../App"
import { Route, useLocation } from 'react-router-dom'
import LoginFirst from './LoginFirst'

function WhatToWatch() {
    const state = useSelector(state=>state.movies.bookmarkedMovies)
    // bookmarkedMovies

    const dispatch = useDispatch()
    const [movie, setmovie] = useState(state)
    // const { search } = useLocation();

    useEffect(() => {
        console.log('[UseEffect whatToWatch]')
        dispatch(fetchBookmarkedMovies(sessionStorage.getItem('LogedUserID')))
        //if any image card is clicked
        // setmovie(state)

    }, [])

    function onclickMovie (key) {
        //Define Route here for clicked movies
        window.location.assign("https://localhost:3000/movieId/" + key);
        console.log   ("Movie clicked : ", key); //Testing

    }
    

    if (!state) {return null} //before dispatching the Get request - Exception Handling
    if (!state[0]) {return <p>NO Movie</p>}
    console.log("Testing : ", state['movie'])
    // console.log("Testing2 : ", state[1]['movie'][0]) // Getting the list view not retrieve view
    const featureCards = 
        // Backend is already providing movies with cover photos. no need to check for those specificially
        state.map((mov)=>   

                    <div key={mov.movie[0].id} className="col-2">
                        <img onClick={()=>onclickMovie(mov.movie[0].id)} src={mov.movie[0].image} id="style_img"></img>
                    </div>
            );
    

    return (
        
        <div className="container mt-5">
            <div className="row">
                {featureCards}
                <button id="next-button-feature" className="btn btn-outline-dark" >
                    &#8250;
                </button>
            </div>
            {/* <LoginFirst /> */}
        </div>
    )
}

export default connect() ( WhatToWatch )
