import React from 'react';
class AllEvent extends React.Component {
    shoot = (a) => {
      alert(a);
    }
    render() {
      return (
          <>
        <Eventex6/><Eventex4/><button onClick={() => this.shoot("Srinivas")}>AllEvent</button>
        </>
      );
    }
  }
  class Eventex4 extends React.Component {
    shoot(a) {
      alert(a);
    }
    render() {
      return (
        <button onClick={this.shoot.bind(this, "Aspire")}>Eventex4</button>
      );
    }
  }
  
  class Eventex6 extends React.Component {
    shoot = (a, b) => {
      alert(b.type);
      alert(a);
      console.log(b);
      /*
      'b' represents the React event that triggered the function,
      in this case the 'click' event
      */
    }
    render() {
      return (
        <button
          onClick={(event) => this.shoot("How are you", event)}
        >Eventex6</button>
      );
    }
  }

  export default AllEvent;