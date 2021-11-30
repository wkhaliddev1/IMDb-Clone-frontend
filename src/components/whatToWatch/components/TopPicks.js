import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovieswithImages } from '../logic/actions/topPicksAction'
import movies_with_cover_photo from "../logic/utils/with_cover_photo"
import "../../../css/topPicks.css"
import App from "../../App"
import { Route, useLocation } from 'react-router-dom'
import LoginFirst from './LoginFirst'

function TopPicks() {
    const state = useSelector(state=>state.movies.images_rating_movies)
    // bookmarkedMovies

    const dispatch = useDispatch()
    const [movie, setmovie] = useState(state)
    // const { search } = useLocation();

    useEffect(() => {
        console.log('[UseEffect TopPicks]')
        dispatch(fetchMovieswithImages())
        //if any image card is clicked
        // setmovie(state)

    }, [])

    function onclickMovie (key) {
        //Define Route here for clicked movies
        window.location.assign("https://localhost:3000/movieId/" + key);
        console.log   ("Movie clicked : ", key); //Testing

    }
    

    if (!state) {return null} //before dispatching the Get request - Exception Handling

    console.log("Testing TOPPIKCS : ", state)
    console.log("Testing2 TOPPIKCS : ", state) // Getting the list view not retrieve view
    const featureCards = 
        //making cards with movies having cover phots only
        movies_with_cover_photo(state).map((movie)=>   
                
                    <div key={movie.id} id="top-picks-card" className="col-2 card">
                        <img onClick={()=>onclickMovie(movie.id)} src={movie.image} id="img_topPicks"></img>
                        <div className="card-body">{movie.title}</div>
                        <div className="card-body">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            {movie.rating}
                        </div>
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

export default connect() ( TopPicks )
