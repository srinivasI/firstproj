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
import { applyMiddleware,createStore } from 'redux';
import { connect,Provider } from 'react-redux';

import axios from 'axios';

class FetchDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    // Remove the 'www.' to cause a CORS error (and see the error state)
    axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(res => {
        // Transform the raw data by extracting the nested posts
        const posts = res.data.data.children.map(obj => obj.data);

        // Update state to trigger a re-render.
        // Clear any errors, and turn off the loading indiciator.
        this.setState({
          posts,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        // Something went wrong. Save the error in state and re-render.
        this.setState({
          loading: false,
          error: err
        });
      });
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return (
      <div>
        Uh oh: {this.state.error.message}
      </div>
    );
  }

  renderPosts() {
    if(this.state.error) {
      return this.renderError();
    }

    return (
      <ul>
        {this.state.posts.map(post =>
          <li key={post.id}>{post.title}</li>
        )}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        {this.state.loading ?
          this.renderLoading()
          : this.renderPosts()}
      </div>
    );
  }
}

// Change the subreddit to anything you like
ReactDOM.render(
  <FetchDemo subreddit="reactjs"/>,
  document.getElementById('srini')
);


/* import createSagaMiddleware from 'redux-saga';
import combineReducers from './reducers';
import { put, takeLatest, call,all } from 'redux-saga/effects'

// GitHub API
const gitHubApi = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
      .then(response => {console.log(response)
      return response.json()
        .then(({ login, avatar_url, html_url,name,company, location }) =>  ({ login, avatar_url, html_url,name,company, location }));
    })
    .catch(error => {
      throw error;
    })
};

// Action
const getUserDetails = (payload) => {
  return {
    type: 'LOAD_USER_REQUEST',
    payload
  }
}

// Reducer
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_USER_SUCCESS':
      return action.user;
    default:
      return state;
  }
};

// Sagas
function* loadUserDetails({ payload }) {
  try {
    const user = yield call(gitHubApi, payload);
    yield put({type: 'LOAD_USER_SUCCESS', user,});
  } catch (error) {
    throw error;
  }
}

// Watches for LOAD_USER_REQUEST action and call loadUserDetails with supplied arguments
function* watchRequest() {
  yield takeLatest('LOAD_USER_REQUEST', loadUserDetails);
}

export default function* rootSaga() {
yield all([
  watchRequest(),
]);
}

class UserProfile extends React.Component {
  constructor() {
    super();
    this.handleUserDetail = this.handleUserDetail.bind(this);
  }

  componentDidMount() {
    this.props.getUserDetails('srinivasI');
  }

  handleUserDetail(event) {
      event.preventDefault();
    if (this.username !== null) {
      console.log("My Input value =",this.username.value)
      this.props.getUserDetails(this.username.value);
      this.username.value = '';
    }
  }

  render() {
    const { user } = this.props;
      return (
        <div>
          { user ? <div>
            <input
              type="text"
              ref={(ref) => this.username = ref}
            />
            <button onClick={this.handleUserDetail}>Search</button>
            <div>
              <h1> User Profile </h1>
              <h3>Name:{user.name}</h3>
              <h4>Company:{user.company}</h4>
              <img src={user.avatar_url} alt="Noimage"/>
              <h3>Location:{user.location}</h3>
              <p><a href={user.html_url} target="_blank" rel="no relation">{user.login}</a></p>
            </div>
          </div> : '...loading'}
        </div>
      )
    }
}
// Setup store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(userReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchRequest);

const mapStateToProps = (state) => ({ user: state }); // Map the store's state to component's props

const mapDispatchToProps = (dispatch) => ({ getUserDetails: (username) => dispatch(getUserDetails(username)) })  // wrap action creator with dispatch method
const UserProfilePage = connect(mapStateToProps, mapDispatchToProps)(UserProfile);

const element = document.getElementById('srini');
ReactDOM.render(
  <Provider store={store}>
    <UserProfilePage />
  </Provider>,
  element
);

 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
