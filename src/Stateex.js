import React from 'react'; 
class Stateex extends React.Component {    
  constructor(props) {  
    super(props);  
      this.state = {      
          id: 1,      
          name: "Srinivas"   
      };  
  }    
  
  render() {    
      return (      
          <div>        
            <p>{this.state.id}</p>        
            <p>{this.state.name}</p>      
          </div>    
      );  
  }
}
export default Stateex;