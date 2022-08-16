import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      
    </App>
  </React.StrictMode>
);
// Not seen the 'createRoot' method before, but I can see what it's doing.
// You only render one component, traditionally: the top-level component.
// Index.js is evidently run by react-scripts when you start the app. It 
// looks up index.html in the public folder which, again, is an opinionated
// name, evidently.


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
