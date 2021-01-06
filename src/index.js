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
const myname="Srinivas Ippili";
ReactDOM.render(<React.Fragment><Formex2/><Eventex/>
    <Hookex myname="Patil"/><Stateex/><Stateex2/></React.Fragment>,
  document.getElementById('srini')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
