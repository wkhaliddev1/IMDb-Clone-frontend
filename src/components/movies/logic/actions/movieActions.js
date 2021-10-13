import axios from 'axios'



export const setPersonalDetail = payload => ({
    // type: GET_PERSONAL_DETAIL,
    type: "get",
    payload,
  });



export const fetchPersonalDetail = () => dispatch => {
    return axios.get("http://127.0.0.1:8000/movies/movies-images/").then(response => {
      return dispatch(setPersonalDetail(response.data));
    }).catch(e => {
      console.error(e);
    });
  }