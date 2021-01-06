import React from 'react';
class Stateex2 extends React.Component {
  constructor() {
      super();
      this.click = this.click.bind(this);
      // Set initial state (ONLY ALLOWED IN CONSTRUCTOR)
      this.state = {
          greeting: 'Welcome!'
      };
  }
  click(e) {
      this.setState({
            greeting: 'Hello Srinivas Ippili'
      });
  }
  render() {
      return(
          <div>
              <p>{this.state.greeting}</p>
              <button onClick={this.click}>Click me</button>
          </div>
      );
  }
  
}
export default Stateex2