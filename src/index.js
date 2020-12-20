import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'
import Cookies from 'js-cookie';
import UserContextProvider from './context/UserContext'

axios.defaults.withCredentials = true;

axios.defaults.headers.common = { 'Authorization': `Bearer ${Cookies.get('token')}` };


ReactDOM.render(
  <Router>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </Router>,
  document.getElementById('root'),
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
