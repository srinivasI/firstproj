import React, {Component} from 'react';
import './App.css';
import styled, { css } from "styled-components";
class App extends Component{

render(){
  const Button = styled.button`
  display: inline-block;
  color: blue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

return (
  <div>
    <Button>Normal Button </Button>
    <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
  
  </div>
)
}
}

export default App;