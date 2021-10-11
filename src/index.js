import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from "../src/components/App"
import { Provider } from 'react-redux'
import MovieStore from "./components/movies/logic/selectors/movieStore"

ReactDOM.render(
  <Provider store = {MovieStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);


