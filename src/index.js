import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import First from './First';
import reportWebVitals from './reportWebVitals';
import Person from './Person';
import Formex from './Formex';
import Eventex from './Eventex';
import Formex2 from './Formex2';
import Hookex from './Hookex';
import Stateex from './Stateex';
import Stateex2 from './Stateex2';
import Lifecycle from './Lifecycle';
import Greeting from './Greeting';
import Mycssmod from './Mycssmod';
// import Scssex from './Scssex';
import Mytable from './Mytable';
import Register from './Register';
import LoginForm from './LoginForm';
import Toggleex from './Toggelex';
import AllEvent from './AllEvent';
function ActionLink() {  
  function handleClick(e) {  
      e.preventDefault();  
      console.log('You had clicked a Link.'); 
      alert("Click me button called .hi") 
  }  
  return (  
      <a href="#" onClick={handleClick}>  
            Click_Me  
      </a>  
  );  
} 
const myname = "Srinivas Ippili";
ReactDOM.render(<div style={{  margin: 10, border: '2px solid green', padding: 20 }}>
 <App/><AllEvent/><ActionLink/>
  </div>,
  document.getElementById('srini')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
