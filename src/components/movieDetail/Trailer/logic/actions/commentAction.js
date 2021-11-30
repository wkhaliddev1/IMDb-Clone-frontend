import axios from 'axios'
import { fetchMovieDetailTrailer } from './trailerAction';

// Get Request from Api
export const setMovieComments = payload => ({
    // type: GET_PERSONAL_DETAIL,
    type: "GET-MOVIEID-COMMENTS",
    payload,
  });

export const fetchMovieDetailComments = (movie_id) => dispatch => {
    return axios.get("http://127.0.0.1:8000/movies/comment/bymovieID/1" + movie_id).then(response => {
      return dispatch(setMovieComments(response.data));
    }).catch(e => {
      console.error(e);
    });
  }

export const postComment = (data) => dispatch => {
  return axios.post("http://127.0.0.1:8000/movies/comment/" , data) + "/".then(
    response => {
      // Updaing store with latest comments in async way
      return dispatch(fetchMovieDetailTrailer(data.movie))
    }
  )
}

export const deleteCommentByID = (comment_id, movie_id) => dispatch => {
  return axios.delete("http://127.0.0.1:8000/movies/comment/" + comment_id + "/").then(
    response => {
      // Updaing store with latest comments in async way
      return dispatch(fetchMovieDetailTrailer(movie_id))
    }
  )
}