import React, { Component } from 'react';  
import First from './First';
import Formex from './Formex';
import Person from './Person';
class App extends Component{  
   render(){  
	var myStyle = {  
         fontSize: 80,  
         fontFamily: 'Courier',  
         color: 'red'  
      }  

      var  i = 5;  
      return (  
         <div> 
  <Formex/>
  <Person name="Patil"/>
  <First value="Srini"/> 
  <First value="Welcome to Apsire"/> 
		<div style={myStyle}>My Style content</div>
            <h1>{i === 5 ? 'True!' : 'False!'}</h1>  
         </div>  
      );  
   }  
}  
export default App;  