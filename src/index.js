import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import App from "../src/components/App";
import { Provider } from 'react-redux';
import store from "./components/index";
import axios from 'axios'
import qs from 'qs'

const token = sessionStorage.getItem('LogedAccessToken')
axios.interceptors.request.use(req => {
  req.headers = {
    ...req.headers,
    Authorization: 'Bearer '+token
  }
  return req
// },  error => {
//     // Do something with response error
//     console.log('Here4 : ', error)
//     // return Promise.reject(error);

   });
  

axios.interceptors.response.use(err => {
  if (err.response!==undefined) {
    if ( err.response.status === 401 || err.response.status === '401 Unauthorized' ) {
        console.log(401, err)   
    }
  } 
  console.log('ayaaaa')
  console.log('Here', err)
  return err
}
)


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


