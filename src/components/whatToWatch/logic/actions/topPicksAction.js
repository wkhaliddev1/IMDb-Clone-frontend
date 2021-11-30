import axios from 'axios'

// Get Request from Api
export const setImageMovies = payload => ({
    // type: GET_PERSONAL_DETAIL,
    type: "GET-TOPPICKS",
    payload,
  });

// export const fetchBookmarkedMovies = () => dispatch => {
//     return axios.get("http://127.0.0.1:8000/movies/bookmarked-movies-image-rating/",
//         { headers: {"Authorization" : `Bearer ${sessionStorage.getItem('LogedAccessToken')}`}}).then(response => {
//       return dispatch(setBoorkedMovies(response.data));
//     }).catch(e => {
//       console.error(e);
//     });
//   }
export const fetchMovieswithImages = () => dispatch => {
  return axios.get("http://127.0.0.1:8000/movies/rated-movies",
      ).then(response => { 
    return dispatch(setImageMovies(response.data));
  }).catch(e => {
    console.error(e);
  });
}