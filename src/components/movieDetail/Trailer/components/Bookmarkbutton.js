import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBookmarkedMovies } from '../../../whatToWatch/logic/actions/bookmarkedActions'
import { useEffect } from 'react'

function Bookmarkbutton() {
    const movieState = useSelector(state => state.movieDetail.movie)
    const dispatch = useDispatch()
    const bookmarkedMovieState = useSelector(state => state.movies.bookmarkedMovies)

    useEffect(() => {
        dispatch(fetchBookmarkedMovies(sessionStorage.getItem('LogedUserID')))
    }, [])

    if (!bookmarkedMovieState) {
        return (null)
    }
    if (bookmarkedMovieState === []){
        return (null)
    }
    console.log("Bookmarkd Button", bookmarkedMovieState[0].movie[0].id)
    const bookmarkedMovies = bookmarkedMovieState[0].movie
    const bookmarkCheck = () => {
        bookmarkedMovies.map(movie => {
            console.log(movie.id, movieState.id)//
            if (movie.id == movieState.id){
                return true
            }
        })
    }

    if (bookmarkCheck()) {
        const flag = false
        console.log('bookmarked already')
    } 
    else {
        const flag = true
        console.log('not bookmarked')
    }

    

    return (
        <div>
            <i class="fa fa-bookmark" aria-hidden="true"></i>
        </div>
    )
}

export default Bookmarkbutton
