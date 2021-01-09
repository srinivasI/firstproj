import React from 'react';
import './Formex.css';
class Greeting extends React.Component {
    render(){
    return <h1 className="First">Hello {this.props.name} Salary:{this.props.salary}</h1>;
    }
  }
  Greeting.defaultProps = {
    name: "User",
    salary:60000
  };
  export default Greeting;