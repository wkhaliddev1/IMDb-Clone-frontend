import { setMovieTrailer } from '../actions/trailerAction'
const initialState = {
    movie : "" , 
    isbookmarked : false,
    comments : ""
    
}

const movieDetailReducer = (state=initialState, action) => {
    switch ( action.type ) { 
        case "GET-MOVIEDETAIL-TRAILER" :
            return {
                ...state,
                movie : action.payload
            }

        case "POST-MOVIEBOOKMARK" : 
            return {
                ...state,
                isbookmarked : action.payload
            }

        case "GET-MOVIEID-COMMENTS" :
            return {
                ...state,
                comments : action.payload
            }

        default :
            return {
                ...state
            }

        
    }

}

export default movieDetailReducer