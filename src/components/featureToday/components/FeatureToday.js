import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPersonalDetail } from '../../movies/logic/actions/movieActions'
import movies_with_cover_photo from "../logic/utils/with_cover_photo"
import "../../../css/featureToday.css"
import App from "../../App"
import { Route, useLocation } from 'react-router-dom'

function FeatureToday() {
    const state = useSelector(state=>state.movies.imgMovies)
    const dispatch = useDispatch()
    const [mov, seMov] = useState(state)
    const is_clicked = {
        flag : false,
    }
    // const { search } = useLocation();

    // const addToBookmarked = () => {

    // }

    useEffect(() => {
        console.log('[UseEffect FeatureToday]')
        dispatch(fetchPersonalDetail)
        //if any image card is clicked

    }, [state])

    function onclickMovie (key) {
        //Define Route here for clicked movies
        window.location.assign("https://localhost:3000/movieId/" + key);
        console.log   ("Movie clicked : ", key); //Testing

    }

    if (!state) {return null} //before dispatching the Get request - Exception Handling

    const featureCards = 
        //making cards with movies having cover phots only
        movies_with_cover_photo(state).map((movie)=>   

                    <div key={movie.movie.id} className="col-2">
                        <img onClick={()=>onclickMovie(movie.id)} src={movie.image} id="style_img"></img>
                    </div>
            );

    return (
        
        <div className="container mt-5">
            <h1>Feature Today</h1>
            <div className="row">
                {featureCards}
                <button id="next-button-feature" className="btn btn-outline-dark" >
                    &#8250;
                </button>
            </div>
        </div>
    )
}

export default connect() ( FeatureToday )
