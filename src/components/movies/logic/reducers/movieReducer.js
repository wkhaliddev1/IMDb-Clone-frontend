import axios from "axios"
import jwt_decode from 'jwt-decode'
const baseURL = "http://127.0.0.1:8000/movies/movies-images/"



const initialState = {
    imgMovies : 0 ,
    token: "" ,
    bookmarkedMovies: "" ,
    images_rating_movies : "" ,
    signUpMessage : "",
}
const getMovieReducer =  (state = initialState, action) => {
    switch (action.type){
        case "get":
  
            return {
                ...state,
                imgMovies: action.payload
            }
      

        case "REQUEST_STARTED":
            // console.log("REQUEST_STARTED")
            // return action.payload
            return {
                ...state,
                signUpMessage : action.payload
            }
            
        case "REQUEST_SUCCEEDED":
            // console.log("REQUEST_STARTED")
            // return action.payload
            return {
                ...state,
                signUpMessage : action.payload
            }

        case "REQUEST_FAILED":
            // console.log("REQUEST_STARTED")
            // return action.payload
            return {
                ...state,
                signUpMessage : action.payload
            }
        

        //JWT TOKEN    
        case "GET_TOKEN":
            
            return {
                ...state,
                token: action.payload

            }

        case "GET-BOOKMARKEDMOVIES":
            return {
                ...state,
                bookmarkedMovies: action.payload
            }
        
        case "GET-TOPPICKS":
            return {
                ...state,
                images_rating_movies : action.payload
            }

        default:
            
            return state


    }

};

export default getMovieReducer