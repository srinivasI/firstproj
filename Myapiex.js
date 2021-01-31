import React from 'react';
export default class Myapiex extends React.Component { 
    constructor(props) { 
      super(props); 
      this.state = { 
        error: null, 
        dataFetched: false, 
        data: [] , 
        isLoaded:true
      }; 
    } 
    
    componentDidMount() { 
      fetch("https://api.toptensongs.com/data") 
        .then(res => res.json()) 
        .then( 
          (res) => { 
            this.setState({ 
              dataFetched: true, 
              data: res.data 
            }); 
          }, 
          (error) => { 
            this.setState({ 
              dataFetched: true, 
              error 
            }); 
          } 
        ) 
    } 
    
    render() { 
      const { error, dataFetched, data } = this.state; 
      if (error) { 
        return <div>Error: {error.message}</div>; 
      } else if (!isLoaded) { 
        return <div>Loading...</div>; 
      } else { 
        return ( 
          <ol> 
            {data.map(value => ( 
              <li key={value.name}> 
                {value.name} - {item.artist} 
              </li> 
            ))} 
          </ol> 
        ); 
      } 
    } 
  } 