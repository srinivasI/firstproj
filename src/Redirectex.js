import React from 'react';
import { Route, Link,NavLink, BrowserRouter as Router,Switch, Redirect } from 'react-router-dom';
import First from './First';
import Formex from './Formex';
import Formex2 from './Formex2';
import Greeting from './Greeting';
export default class Redirectex extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      isUserAuthenticated: true
    };
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/Formex">Formex</Link>
              </li>
              <li>
                <Link to="/Formex2">Formex2</Link>
              </li>
              <li>
                <Link to="/Greeting">Greeting</Link>
              </li>
              <li>
                <Link to="/First">First</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                    return (
                      this.state.isUserAuthenticated ?
                      <Redirect to="/Formex" /> :
                      <Redirect to="/Formex2" /> 
                    )
                }}
              />
               <Route exact path="/Formex" component={Formex} />
              <Route exact path="/Formex2" component={Formex2} />
              <Route exact path="/Greeting" component={Greeting} />
              <Route exact path="/First" component={First} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
