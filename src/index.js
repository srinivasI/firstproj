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
import { Route, Link,NavLink, BrowserRouter as Router,Switch } from 'react-router-dom';
import Users from './Users';
import List from './List';
import Notfound from './Notfound';
import Funroute from './Funroute';
import Hookex1 from './Hookex1';
import AuthExample from './AuthExample';
import Redirectex from './Redirectex';
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/mytable">
            MyTable
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/greeting">
            Greeting
          </NavLink>
        </li>
      </ul>
      <br />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/register" component={Register} />
        <Route path="/mytable" component={Mytable} />
        <Route path="/greeting" component={LoginForm} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

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
//<div><App/></div>
ReactDOM.render(<Redirectex/>
,
  document.getElementById('srini')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
