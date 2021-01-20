import React, {Component} from 'react';
import NewPost from './components/NewPost';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="col-md-12">
            &nbsp;
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
          <CreatePost />
          </div>
          <div className="col-md-6">
            {<PostList /> }
          </div>
        </div>
      </div>
    );
  }
}

export default App;