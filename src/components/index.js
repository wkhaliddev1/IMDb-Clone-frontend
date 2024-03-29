//import {getMovies, postMovies} from "../components/movies/logic/actions/movieActions"
import { combineReducers, applyMiddleware } from 'redux';
import getMovieReducer from "../components/movies/logic/reducers/movieReducer"
import movieDetailReducer from './movieDetail/Trailer/logic/reducers/movieDetailReducer';
import { createStore } from 'redux'
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';


const allReducers = combineReducers({
  movies: getMovieReducer,
  movieDetail : movieDetailReducer,

})

const store = createStore(
    allReducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeWithDevTools(applyMiddleware(thunk))
    )
export default store
// store.dispatch(getMovies)
