import axios from "axios";

export function postSignUpThunk(data) {
    return (dispatch) => {
        // dispatch({type : "REQUEST_STARTED"});
        axios.post("http://127.0.0.1:8000/movies/users/", data) 
            .then((response) => {
              console.log(response)
              dispatch(postPersonalDetailSuccess(response.statusText))
              
            }).catch((err) => {
              dispatch(postPersonalDetailFail(err.response.data.email))
              // console.log(err.response.status); // status code of the request
  
          })  
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
  