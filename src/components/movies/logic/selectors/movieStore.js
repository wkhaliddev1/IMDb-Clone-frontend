import { createStore } from 'redux'
import getMoviesReducer from "../reducers/movieReducer"

const MovieStore = createStore(getMoviesReducer)

export default MovieStore