import axios from 'axios'

// Get Request from Api
export const setMovieTrailer = payload => ({
    // type: GET_PERSONAL_DETAIL,
    type: "GET-MOVIEDETAIL-TRAILER",
    payload,
  });

export const fetchMovieDetailTrailer = (movie_id) => dispatch => {
    return axios.get("http://127.0.0.1:8000/movies/movie-detail/" + movie_id).then(response => {
      return dispatch(setMovieTrailer(response.data));
    }).catch(e => {
      console.error(e);
    });
  }


  export const postMovieBookMarkResult = payload => ({
    type : "POST-MOVIEBOOKMARK",
    payload,
  });

  export const postMovieBookmark = (movie_id) => dispatch => {
      const data = {
          'user' : [ sessionStorage.getItem('LogedUserID'), ],
          'movie' :  movie_id 
      }
    return axios.post("http://127.0.0.1:8000/movies/bookmarkedmovies/", data)
        .then(response => {
            return dispatch(postMovieBookMarkResult(response.data));
        }).catch(e => {
        console.error(e);
        });
  }

  // Delete Bookmark by Bookmark ID

export const deleteBookmarkByID = (bookmark_id) => dispatch => {
  return axios.delete("http://127.0.0.1:8000/movies/bookmarkedmovies/"+bookmark_id)
}





