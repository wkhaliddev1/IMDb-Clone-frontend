import React, { Fragment, useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import '../../../css/Search.css'

function Search(props) {
    const movieState = useSelector(state => state.movies.imgMovies);
    const [search, setsearch] = useState('')

    const onInputSearch = (event) => {
        setsearch(event.target.value)
    }
    
    var result = null
    var query = null

    if ( movieState ) {
        query = movieState.filter(movie => movie.movie.title.toLowerCase().indexOf(search)!==-1)
        result = query.map(movie => 
                <a key={movie.id}>
                    {/* <img ></img> */}
                    {movie.movie.title}
                </a>
            )
        // console.log(result)
    }

    


    return (
        <Fragment>
            <input id="movie-search" onChange={onInputSearch}></input>
            <i id="search-icon" class="fa fa-search"></i>

            {/* {
                // search result wont render anything for "" Query
            search ? ( query && 
            props.getresult(result) )
            : props.getresult(null)
            
            } */}

            {search && props.getresult(result)}
            
        </Fragment>
    )
}

export default connect()( Search )
