import getMovieReducer from "./logic/reducers/movieReducer"

export default getMovieReducer
const baseURL = "http://127.0.0.1:8000/movies/movies-images/"

export function fetchArticleDetails() {
    return function(dispatch) {
      return axios.get(baseURL)
        .then(({ data }) => {
        dispatch(setArticleDetails(data));
      });
    };
  }



