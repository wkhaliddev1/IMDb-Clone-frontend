import axios from "axios"
const baseURL = "http://127.0.0.1:8000/movies/movies-images/"


const initialState = {
    imgMovies : 0,
}
const getMovieReducer =  (state = initialState, action) => {
    switch (action.type){
        case "get":
  
            return {
                ...state,
                imgMovies: action.payload
            }
      

        case "post":
            axios.get(baseURL).then(function(response){ //same for sample testing
                console.log(response)
            })
        default:
            
            return state


    }

};

export default getMovieReducer