import React from 'react';
class Eventex extends React.Component {
    shoot = (a, b) => {
      alert(b.type);
      alert(a);
      /*
      'b' represents the React event that triggered the function,
      in this case the 'click' event
      */
    }
    render() {
      return (
        <button 
          onClick={(event) => this.shoot("Srini", event)}
        >EventExample</button>
      );
    }
  }
  export default Eventex;