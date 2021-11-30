import React from 'react'
import { useSelector } from 'react-redux'
import '../../../../css/genres.css'

function Genres() {
    const genresState = useSelector(state => state.movieDetail.movie.genres)
    if (!genresState) {
        return (null)
    }
    const genre_div = genresState.map (( genre, index ) => 
        <div key={index} className="col-1 mt-2 genres">{genre.genres}</div>
    )
    console.log(genre_div)
    return (
        <div>
            <div className="container">
                <div className="row">
                    {genre_div}
                </div>
            </div>
            
        </div>
    )
}

export default Genres
