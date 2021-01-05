import React from 'react';
function Person(props) {
    return (
        <p>
            <h1>Hello, {props.name}</h1>
        <h3> Welcome to aspire . My person component content</h3>
        </p>
    )
};

export default Person;
/* import React from 'react';
const Person = (props) => (
 <div>
 <h1>Hello, {props.name}</h1>
 </div>
);
export default Person; */
/* import React, { Component } from 'react';
class Person extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Srinivas',
            location:'Hyderabad'
        }
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.name}</h1>
                <h1>My Location: {this.state.location}</h1>
            </div>
        );
    }
}
export default Person; */