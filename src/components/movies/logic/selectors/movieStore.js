import { createStore } from 'redux'
import getMoviesReducer from "../reducers/movieReducer"
import { getMovies, postMovies } from "../actions/movieActions"

// const MovieStore = createStore(
//     getMoviesReducer, 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )

// export default MovieStore