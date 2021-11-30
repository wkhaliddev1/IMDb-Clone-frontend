import axios from 'axios'

// Get Request from Api
export const setBoorkedMovies = payload => ({
    // type: GET_PERSONAL_DETAIL,
    type: "GET-BOOKMARKEDMOVIES",
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
export const fetchBookmarkedMovies = (user_id) => dispatch => {
  return axios.get("http://127.0.0.1:8000/movies/bookmarked-movie-data/"+user_id,
      ).then(response => { 
    return dispatch(setBoorkedMovies(response.data));
  }).catch(e => {
    console.error(e);
  });
}