import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import App from "../src/components/App";
import { Provider } from 'react-redux';
import store from "./components/index";

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


