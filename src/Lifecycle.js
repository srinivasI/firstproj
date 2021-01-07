import React from 'react';
class Lifecycle extends React.Component {
    constructor(props)
    {
      super(props);
       this.state = {
         date : new Date(),
         clickedStatus: false,
         list:[]
       };
    }
    componentWillMount() {
        console.log('Component will mount!')
     }
    componentDidMount() {
        console.log('Component did mount!')
        this.getList();
     }
    getList=()=>{
     
     fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => this.setState({ list:data }));
        
    }
     shouldComponentUpdate(nextProps, nextState){
         console.log(nextState.list);
       return this.state.list!==nextState.list
      }
     componentWillUpdate(nextProps, nextState) {
        console.log('Component will update!');
     }
     componentDidUpdate(prevProps, prevState) {
        console.log('Component did update!')
     }
    render() {
        return (
           <div>
              <h3>Hello Mounting Lifecycle Methods!</h3>
              
           </div>
        );
     }
}
export default Lifecycle;