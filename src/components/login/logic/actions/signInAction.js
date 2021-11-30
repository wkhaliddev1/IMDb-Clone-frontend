import axios from 'axios'

// Get Request from Api
export const setPersonalDetail = payload => ({
    // type: GET_PERSONAL_DETAIL,
    type: "get",
    payload,
  });

export const fetchPersonalDetail = () => dispatch => {
    return axios.get("http://127.0.0.1:8000/api/gettoken/").then(response => {
      return dispatch(setPersonalDetail(response.data));
    }).catch(e => {
      console.error(e);
    });
  }



  export const getToken = payload => ({
    type : "GET_TOKEN",
    payload,
  });

  // Post Request to Rest
export function getTokenThunk(fetchedData) {
  return (dispatch, getState) => {
      const data = {
        email: `${fetchedData.email}`,
        password: `${fetchedData.password}` ,     
    }
      axios.post("http://127.0.0.1:8000/api/mygettoken/", data)
          .then(
            response => {
              return dispatch(getToken(response.data));
            }
          );    
  };
}





