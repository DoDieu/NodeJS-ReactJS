import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//test 1
const name = 'Do Dieu';
const element = <h1>Hello, {name}</h1>;

/**
 * 
 * @param {*} props 
 * @returns 
 */
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

/**
 * 
 */
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // 
  // 
  <div>
    <Welcome name="Sara"></Welcome>
    <Welcome name="Cahal"></Welcome>
    <Welcome name="Edite"></Welcome>
  </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();