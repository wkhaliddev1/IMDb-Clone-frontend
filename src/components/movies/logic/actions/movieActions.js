import axios from 'axios'

// Get Request from Api
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

  // Post Request to Rest
export function postPersonalDetailThunk(fetchedData) {
  return (dispatch, getState) => {
      dispatch({type : "REQUEST_STARTED"});
      console.log("here : ", fetchedData)
      const data = {
        first_name: `${fetchedData._profile.firstName}`,
        last_name: `${fetchedData._profile.lastName}`,
        password: "password",
        email:`${fetchedData._profile.email}`,
        age: "14",
        gender: "male",
        bio: "bio"
    }
      axios.post("http://127.0.0.1:8000/movies/users/", data)
          .then(
              response => dispatch({type : "REQUEST_SUCCEEDED", payload : response}),
              error => dispatch({type : "REQUEST_FAILED", error : error})
          );    
  };
}

export const postPersonalDetailSuccess = payload => ({
  type : "REQUEST_SUCCEEDED",
  payload,
});

export const postPersonalDetailFail = payload => ({
  type : "REQUEST_FAILED",
  payload,
});

export const postPersonalDetailRequest = payload => ({
  type : "REQUEST_STARTED",
});

//For JWT TOKEN (SIGN IN)
export const getToken = payload => ({
  type : "GET_TOKEN",
  payload,
});


