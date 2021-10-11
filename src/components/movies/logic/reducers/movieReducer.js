import axios from "axios"
import {getMovies ,postMovies } from "../actions/movieActions"
const baseURL = "http://127.0.0.1:8000/api/gettoken/"
function getMovieReducer(state={}, action){
    switch (action.type){
        case "get":
            axios.get(baseURL).then(function(response){
                return response
            })
        case "post":
            axios.get(baseURL).then(function(response){ //same for sample testing
                return response
            })

    }
    


}
export default getMovieReducer